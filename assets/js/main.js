// ==========================================
// LÓGICA PRINCIPAL (MOTOR 3D & UI)
// ==========================================
// Este ficheiro contém a lógica de funcionamento.
// Depende dos dados carregados em dados.js

// --- 0. CONFIGURAÇÕES GERAIS ---

tailwind.config = {
    theme: {
        extend: {
            fontFamily: { sans: ['Inter', 'sans-serif'] },
            colors: { 'stoffus-primary': '#e84c26' }
        }
    }
};

// --- 1. VARIÁVEIS GLOBAIS ---

let CURRENT_MODEL_ID = 'athena'; // Modelo padrão
let CURRENT_SIZE_KEY = 'M';
const GITHUB_REPO_URL = 'https://stoffus-pt.github.io/configurador-eleganza/';
let scene, camera, renderer, controls, manager, raycaster, mouse;
let addedModules = [], modelLibrary = {}, FABRIC_LIBRARY = [], IMAGES = {};
let currentFabricMaterial = null;
const currentLegMaterial = new THREE.MeshStandardMaterial({ color: 0x1a1a1a });
let showDimensions = false;
let dimensionLinesGroup = null;
let activeFabricId = null;
let currentRapport = 35;
let hasLithiumBattery = false;
let touchStartX = 0;
let touchStartY = 0;
const RELAX_COST_POINTS = 11;
const BATTERY_COST_POINTS = 6;

// --- 2. FUNÇÕES DE INTERFACE (UI) ---

window.uiSet = function(id, prop, val) { 
    const el = document.getElementById(id); 
    if(el) el.style[prop] = val; 
};

window.showFeedback = function(msg, type) { 
    const el = document.getElementById('feedback-message'); 
    if(!el) return; 
    el.textContent = msg; 
    let className = "fixed top-20 left-1/2 transform -translate-x-1/2 z-50 px-5 py-2 rounded-full text-white font-bold shadow-lg transition-opacity duration-300 pointer-events-none opacity-100 show-feedback flex items-center gap-2 "; 
    className += type === 'success' ? 'bg-green-600' : (type === 'error' ? 'bg-red-600' : (type === 'info' ? 'bg-blue-600' : 'bg-gray-800')); 
    el.className = className; 
    if (el.timeout) clearTimeout(el.timeout); 
    el.timeout = setTimeout(() => { el.classList.remove('opacity-100'); el.classList.add('opacity-0'); }, 2000); 
};

window.openModelSelector = function() { 
    uiSet('model-modal', 'display', 'flex'); 
};

window.openFabricSelector = function() { 
    if (activeFabricId) {
        const fab = FABRIC_LIBRARY.find(f => f.id === activeFabricId);
        if (fab) {
            renderFabricDock('colors', fab.type);
        } else {
            renderFabricDock('collections');
        }
    } else {
        renderFabricDock('collections');
    }
    uiSet('fabric-modal', 'display', 'flex'); 
};

window.confirmAndGeneratePDF = function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Aceder aos dados globais carregados pelo dados.js
    const modelName = window.DB_MODELS[CURRENT_MODEL_ID].name;
    const fabricName = document.getElementById('current-fabric-name').innerText;
    const totalWidth = document.getElementById('summary-width').innerText;
    const totalPrice = document.getElementById('summary-points').innerText;
    const obs = document.getElementById('order-observations').value;

    doc.setFontSize(22);
    doc.setTextColor(232, 76, 38); 
    doc.text("Stoffus Studio - Encomenda", 14, 20);
    
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(`Data: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`, 14, 28);

    doc.autoTable({
        startY: 35,
        head: [['Detalhe', 'Valor']],
        body: [
            ['Modelo', modelName],
            ['Tecido', fabricName],
            ['Largura Total', totalWidth],
            ['Bateria de Lítio', hasLithiumBattery ? 'Sim' : 'Não'],
            ['Preço Final', totalPrice]
        ],
        theme: 'striped',
        headStyles: { fillColor: [232, 76, 38] }
    });

    const modulesBody = addedModules.map(mod => {
        let desc = mod.data.name;
        if(mod.hasRelax) desc += " (Relax/Slide)";
        return [desc, Math.round(mod.width) + " cm"];
    });

    doc.text("Lista de Módulos", 14, doc.lastAutoTable.finalY + 10);
    
    doc.autoTable({
        startY: doc.lastAutoTable.finalY + 15,
        head: [['Módulo', 'Largura']],
        body: modulesBody,
        theme: 'grid'
    });

    if(obs) {
        const finalY = doc.lastAutoTable.finalY + 10;
        doc.text("Observações:", 14, finalY);
        doc.setFontSize(9);
        doc.text(obs, 14, finalY + 7);
    }

    doc.save(`Encomenda_${modelName}_${Date.now()}.pdf`);
    uiSet('order-modal', 'display', 'none');
    showFeedback("PDF Descarregado!", "success");
};

window.changeModel = function(modelId) { 
    if (!window.DB_MODELS[modelId]) return; 
    CURRENT_MODEL_ID = modelId; 
    const modelData = window.DB_MODELS[modelId]; 
    if (!modelData.sizes[CURRENT_SIZE_KEY]) { 
        const keys = Object.keys(modelData.sizes);
        if(keys.length > 0) CURRENT_SIZE_KEY = keys[0];
        else CURRENT_SIZE_KEY = 'M';
    } 
    updateModelButtonUI(); 
    initSizeSelector(); 
    addedModules.forEach(m => scene.remove(m.mesh)); 
    addedModules = []; 
    loadModelAssets(modelId); 
    updateSizePreview(); 
    updateBatteryVisibility(); 
    renderModuleButtons(); 
};

window.changeSize = function(sizeKey) {
    CURRENT_SIZE_KEY = sizeKey;
    initSizeSelector();
    const currentModules = addedModules.map(m => ({ id: m.data.id, hasRelax: m.hasRelax }));
    addedModules.forEach(m => scene.remove(m.mesh));
    addedModules = [];
    currentModules.forEach(m => addModule(m.id, true, m.hasRelax));
    repositionModules();
};

window.openOrderSummary = function() {
    const tbody = document.getElementById('order-items-body');
    tbody.innerHTML = '';
    let totalWidth = 0;
    if(addedModules.length > 0) {
         const widthDisplay = document.getElementById('total-width-display');
         totalWidth = widthDisplay ? widthDisplay.innerText : "0 cm";
    }
    
    addedModules.forEach(mod => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${mod.data.name}</td><td>${Math.round(mod.width)} cm</td><td>-</td>`;
        tbody.appendChild(tr);
    });

    document.getElementById('summary-model').innerText = window.DB_MODELS[CURRENT_MODEL_ID].name;
    const fabName = document.getElementById('current-fabric-name').innerText;
    document.getElementById('summary-fabric').innerText = fabName;
    document.getElementById('summary-width').innerText = totalWidth;
    updatePriceUI();
    uiSet('order-modal', 'display', 'flex');
};

// --- 3. LÓGICA DO MOTOR 3D ---

function updateModelButtonUI() { 
    const nameEl = document.getElementById('current-model-name'); 
    if(nameEl) nameEl.textContent = window.DB_MODELS[CURRENT_MODEL_ID].name; 
    const cards = document.querySelectorAll('.model-card'); 
    cards.forEach(c => { 
        if(c.innerText.includes(window.DB_MODELS[CURRENT_MODEL_ID].name)) c.classList.add('active'); 
        else c.classList.remove('active'); 
    }); 
}

function initSizeSelector() { 
    const container = document.getElementById('size-selector-container'); 
    if(!container) return; 
    container.innerHTML = ''; 
    const modelSizes = window.DB_MODELS[CURRENT_MODEL_ID].sizes; 
    Object.keys(modelSizes).forEach(size => { 
        const btn = document.createElement('button'); 
        btn.className = `flex-1 py-1.5 text-xs font-bold rounded-md transition ${CURRENT_SIZE_KEY === size ? 'bg-white shadow-sm text-stoffus-primary' : 'text-gray-600 hover:bg-white'}`; 
        btn.innerText = size; 
        btn.onclick = () => window.changeSize(size); 
        container.appendChild(btn); 
    }); 
    updateSizePreview(); 
}

function updateSizePreview() { 
    const el = document.getElementById('size-preview');
    if(el) el.innerText = `${window.DB_MODELS[CURRENT_MODEL_ID].sizes[CURRENT_SIZE_KEY]} cm`; 
}

function loadModelAssets(modelId) {
    const modelData = window.DB_MODELS[modelId];
    modelLibrary = {};
    const loader = new THREE.GLTFLoader(manager);
    const dracoLoader = new THREE.DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');
    loader.setDRACOLoader(dracoLoader);
    loader.setCrossOrigin('anonymous');
    
    const neededKeys = new Set();
    if (modelData.modules) {
        modelData.modules.forEach(modId => {
            const def = window.DB_MODULES.find(m => m.id === modId);
            if (def) neededKeys.add(def.fileKey);
        });
    } else {
        ['seat', 'arm', 'corner', 'chaise'].forEach(k => neededKeys.add(k));
    }

    const cacheBuster = `?v=${Date.now()}`; 

    Array.from(neededKeys).forEach(part => {
        const folderName = modelData.folder;
        // Tenta carregar o modelo GLB
        const path = `${GITHUB_REPO_URL}assets/models/${folderName}/${part}.glb${cacheBuster}`;
        
         loader.load(path, (gltf) => {
             const box = new THREE.Box3().setFromObject(gltf.scene);
             const size = new THREE.Vector3(); box.getSize(size);
             // Correção de escala para modelos que vêm muito pequenos (unidades erradas)
             if (size.x < 20) { gltf.scene.scale.set(100, 100, 100); }
             gltf.scene.traverse(n => { if (n.isMesh) { n.castShadow = true; n.receiveShadow = true; } });
             modelLibrary[part] = gltf.scene;
         }, undefined, (err) => { console.warn(`Falha ao carregar ${part} para ${modelId}`, err); });
    });
}

function createModuleMesh(moduleId) {
    const def = window.DB_MODULES.find(m => m.id === moduleId); 
    const modelData = window.DB_MODELS[CURRENT_MODEL_ID]; 
    const group = new THREE.Group();
    
    // Lógica de Dimensões (Simplificada e Robusta)
    let width = 70; // Default
    if (def.fixed) {
        if (def.id === 'pouff' && modelData.pouffSize) width = modelData.pouffSize;
        else if (def.id === 'triangle' && modelData.triangleSize) width = modelData.triangleSize;
        else width = modelData.cornerSize || 100;
    } else if (def.type === 'meridien' && modelData.meridienSizes) {
        width = modelData.meridienSizes[CURRENT_SIZE_KEY] || 100;
    } else if (def.type === 'chaise' && modelData.chaiseSizes) {
        width = modelData.chaiseSizes[CURRENT_SIZE_KEY] || 80;
    } else if ((def.id === 'seat_arm_l' || def.id === 'seat_arm_r') && modelData.oneSeatArmSizes) {
        width = modelData.oneSeatArmSizes[CURRENT_SIZE_KEY];
    } else if (def.id === 'meiple' && modelData.oneSeatArmSizes) {
        width = modelData.oneSeatArmSizes[CURRENT_SIZE_KEY];
    } else if (def.id.startsWith('2seats') && modelData.twoSeatSizes) {
        width = modelData.twoSeatSizes[CURRENT_SIZE_KEY];
    } else {
        width = modelData.sizes[CURRENT_SIZE_KEY] || 70;
    }

    if (def.id.startsWith('2seats') && !modelData.twoSeatSizes) width *= 2;

    let totalWidth = width + (def.hasArm ? modelData.armWidth : 0);
    if (def.hasArm === 'both') totalWidth = width + (modelData.armWidth * 2);
    
    let depth = modelData.depth || 100;
    if (def.type === 'chaise') depth = modelData.chaiseDepth || 160;
    if (def.type === 'meridien' && modelData.chaiseDepth) depth = modelData.chaiseDepth; 
    if (CURRENT_MODEL_ID === 'athena' && def.type === 'meridien') depth = modelData.depth;

    const asset = modelLibrary[def.fileKey];
    if (asset) {
        const mesh = asset.clone();
        // Lógica de Escala (Esticar o modelo para caber na medida)
        const box = new THREE.Box3().setFromObject(mesh);
        const size = new THREE.Vector3(); box.getSize(size);
        if (size.x > 1) {
            mesh.scale.x *= (totalWidth / size.x);
        }
        
        let flip = def.hasArm === 'right'; 
        if (def.type === 'meridien') { flip = def.hasArm === 'left'; }
        if (def.type === 'chaise') { if (CURRENT_MODEL_ID === 'athena') { flip = def.hasArm === 'right'; } else { flip = def.hasArm === 'left'; } }
        if (CURRENT_MODEL_ID === 'kindia' && def.id.includes('seat_arm')) { flip = !flip; }

        if (flip) { mesh.scale.x *= -1; mesh.traverse(n => { if(n.isMesh) n.material.side = THREE.DoubleSide; }); }
        
        // Recentrar
        const finalBox = new THREE.Box3().setFromObject(mesh);
        const center = new THREE.Vector3(); finalBox.getCenter(center); 
        mesh.position.sub(center); 
        mesh.position.y += (finalBox.max.y - finalBox.min.y) / 2;

        // Ajustes de altura específicos
        if (CURRENT_MODEL_ID === 'kindia' && def.id === 'seat_no_arm') { mesh.position.y += 4; }
        
        group.add(mesh);
    } else {
        // Fallback (Caixa cinzenta se o modelo 3D falhar)
        const mesh = new THREE.Mesh(new THREE.BoxGeometry(totalWidth, 40, depth), new THREE.MeshStandardMaterial({color:0xcccccc}));
        mesh.position.y = 20;
        group.add(mesh);
    }

    group.userData = { def: def, width: totalWidth, depth: depth, hasRelax: false, relaxFactor: 0 };
    return group;
}

function addModule(moduleId, silent = false) {
     const mesh = createModuleMesh(moduleId);
     scene.add(mesh);
     addedModules.push({ mesh: mesh, data: mesh.userData.def, ...mesh.userData });
     
     // Atualizar materiais
     mesh.traverse((node) => { 
        if (node.isMesh) { 
            if (node.name.toLowerCase().includes('leg')) node.material = currentLegMaterial;
            else if (currentFabricMaterial && node.name !== 'shadow_plane') node.material = currentFabricMaterial;
        }
     });
     
     repositionModules();
     if(!silent) showFeedback("Módulo Adicionado", "success");
}

function repositionModules() {
    let cornerIdx = -1; 
    for(let i=0; i<addedModules.length; i++) if(addedModules[i].data.type === 'corner') { cornerIdx = i; break; }
    let cornerPos = { x:0, z:0, depth: 0 }; 
    const modelData = window.DB_MODELS[CURRENT_MODEL_ID];
    let gapCorrection = -2; // Correção padrão para colmatar falhas visuais entre módulos
    if (CURRENT_MODEL_ID === 'brittany') gapCorrection = -4;

    addedModules.forEach((mod, i) => {
        const mesh = mod.mesh;
        if(cornerIdx === -1 || i <= cornerIdx) {
            mod.isCornerLine = false; mesh.rotation.y = 0;
            if(i === 0) mesh.position.x = 0; 
            else { const prev = addedModules[i-1]; mesh.position.x = prev.mesh.position.x + (prev.width/2) + (mod.width/2) + gapCorrection; }
            mesh.position.z = ((mod.depth - modelData.depth) / 2); // Alinhamento pela traseira/centro
            if(mod.data.type === 'corner') cornerPos = { x: mesh.position.x, z: mesh.position.z, depth: mod.depth };
        } else {
            mod.isCornerLine = true; mesh.rotation.y = -Math.PI / 2; 
            if(i === cornerIdx + 1) { mesh.position.z = cornerPos.z + (cornerPos.depth/2) + (mod.width/2) + gapCorrection; } 
            else { const prev = addedModules[i-1]; mesh.position.z = prev.mesh.position.z + (prev.width/2) + (mod.width/2) + gapCorrection; }
            mesh.position.x = cornerPos.x + (cornerPos.depth/2) - (mod.depth/2);
        }
    });
    
     let totalW = 0;
    if (addedModules.length > 0) { 
        const first = addedModules[0]; let lastInLine1 = addedModules.length - 1; 
        if (cornerIdx !== -1) lastInLine1 = cornerIdx; 
        const startX = first.mesh.position.x - first.width/2; const endX = addedModules[lastInLine1].mesh.position.x + addedModules[lastInLine1].width/2; 
        totalW = endX - startX; 
    }
    const widthDisplay = document.getElementById('total-width-display');
    if (widthDisplay) widthDisplay.innerText = Math.round(totalW) + " cm";
    
    updateDimensionLabels();
    updatePriceUI();
}

function updatePriceUI() {
     const sidebarEl = document.getElementById('sidebar-points');
     const summaryEl = document.getElementById('summary-points');
     
     let total = 0;
     let currentClass = 'bliss'; // Preço padrão se não for detetado tecido
     
     addedModules.forEach(mod => {
        const modelPrices = window.DB_PRICES[CURRENT_MODEL_ID] || {};
        if (modelPrices && modelPrices[mod.data.id]) {
            const sizeKey = CURRENT_SIZE_KEY;
            const sizePrices = modelPrices[mod.data.id][sizeKey];
            if (sizePrices && sizePrices[currentClass]) {
                let pts = sizePrices[currentClass];
                if (mod.hasRelax) pts += RELAX_COST_POINTS;
                if (mod.hasRelax && hasLithiumBattery) pts += BATTERY_COST_POINTS;
                total += pts;
            }
        }
     });

     const multiplier = parseFloat(document.getElementById('price-multiplier').value) || 23.5;
     const price = total * multiplier; 
     const priceStr = price.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' });
     
     if(sidebarEl) sidebarEl.innerText = priceStr;
     if(summaryEl) summaryEl.innerText = priceStr;
}

function renderModuleButtons() { 
    const container = document.getElementById('module-list'); 
    if(!container) return; 
    container.innerHTML = ''; 
    const modelData = window.DB_MODELS[CURRENT_MODEL_ID]; 
    window.DB_MODULES.forEach(def => { 
        if (modelData.modules && !modelData.modules.includes(def.id)) return; 
        const btn = document.createElement('button'); 
        btn.className = "module-btn flex flex-col items-center justify-center p-2 bg-white border border-gray-200 rounded-lg transition hover:border-stoffus-primary group h-16"; 
        btn.onclick = () => addModule(def.id); 
        btn.innerHTML = `<i class="fas ${def.icon} text-lg text-gray-400 group-hover:text-stoffus-primary mb-1"></i><span class="text-[9px] font-bold text-gray-600 leading-tight text-center">${def.name}</span>`; 
        container.appendChild(btn); 
    }); 
}

function buildFloor() {
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin('anonymous');
    const floorTex = loader.load('https://stoffus-pt.github.io/configurador-eleganza/assets/textures/floor.jpg');
    floorTex.wrapS = THREE.RepeatWrapping;
    floorTex.wrapT = THREE.RepeatWrapping;
    floorTex.repeat.set(10, 10); 
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000), new THREE.MeshStandardMaterial({ map: floorTex }));
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.5;
    floor.receiveShadow = true;
    scene.add(floor);
}

function updateBatteryVisibility() {
     const type = window.DB_MODELS[CURRENT_MODEL_ID].type;
     const container = document.getElementById('battery-container');
     if(container) {
         if (type === 'relax' || type === 'slide') container.classList.remove('hidden');
         else container.classList.add('hidden');
     }
}

// --- Funções Auxiliares (Sprites, Labels, etc.) ---

function createStatusSprite(label) {
    const canvas = document.createElement('canvas'); const ctx = canvas.getContext('2d'); 
    const w = 256; const h = 64; canvas.width = w; canvas.height = h;
    ctx.fillStyle = "#e84c26"; 
    if (ctx.roundRect) { ctx.beginPath(); ctx.roundRect(0, 0, w, h, 30); ctx.fill(); } 
    else { ctx.fillRect(0, 0, w, h); }
    ctx.fillStyle = "white"; ctx.font = "bold 30px Arial"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; 
    ctx.fillText(label.toUpperCase(), w/2, h/2);
    const texture = new THREE.CanvasTexture(canvas); 
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, depthTest: false, depthWrite: false })); 
    sprite.scale.set(40, 10, 1);
    return sprite;
}

function createTextSprite(message) {
    const canvas = document.createElement('canvas'); const ctx = canvas.getContext('2d'); 
    const fontSize = 64; ctx.font = "Bold " + fontSize + "px Arial"; 
    const textWidth = ctx.measureText(message).width; canvas.width = textWidth + 40; canvas.height = fontSize + 40;
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)"; 
    if (ctx.roundRect) { ctx.beginPath(); ctx.roundRect(0, 0, canvas.width, canvas.height, 20); ctx.fill(); } 
    else { ctx.fillRect(0, 0, canvas.width, canvas.height); }
    ctx.fillStyle = "white"; ctx.font = "Bold " + fontSize + "px Arial"; 
    ctx.textAlign = "center"; ctx.textBaseline = "middle"; 
    ctx.fillText(message, canvas.width/2, canvas.height/2);
    const texture = new THREE.CanvasTexture(canvas); 
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, depthTest: false, depthWrite: false })); 
    sprite.scale.set(canvas.width * 0.15, canvas.height * 0.15, 1);
    return sprite;
}

function updateDimensionLabels() {
    if (!dimensionLinesGroup) return;
    while(dimensionLinesGroup.children.length > 0){ 
        const obj = dimensionLinesGroup.children[0]; 
        if(obj.material && obj.material.map) obj.material.map.dispose(); 
        dimensionLinesGroup.remove(obj); 
    }
    if(!showDimensions || addedModules.length === 0) return;
    
    // Simple Length Calc
    let startX = 0; let endX = 0;
    if(addedModules.length > 0) {
        const first = addedModules[0]; 
        const last = addedModules[addedModules.length - 1]; 
        endX = last.mesh.position.x + last.width/2; 
        startX = first.mesh.position.x - first.width/2;
        const lineY = 110; 
        const linePoints = [new THREE.Vector3(startX, lineY, 0), new THREE.Vector3(endX, lineY, 0)]; 
        const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(linePoints), new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 })); 
        dimensionLinesGroup.add(line);
        const sprite = createTextSprite(Math.round(endX - startX) + " cm"); 
        sprite.position.set((startX + endX)/2, lineY + 15, 0); 
        dimensionLinesGroup.add(sprite);
    }
}

function initFabricData() {
    window.FABRIC_LIBRARY = [];
    window.DB_COLLECTIONS.forEach(col => {
         const key = col.name.toLowerCase().replace(/\s/g, ''); 
         for(let i=0; i<7; i++) {
             window.FABRIC_LIBRARY.push({
                 id: `${key}_${col.prefix}${col.start+i}`,
                 name: `${col.name} ${col.prefix}${col.start+i}`,
                 type: key,
                 fileIndex: i+1,
                 collection: col.name
             });
         }
    });
}

function renderFabricDock(mode, collectionKey) {
     const list = document.getElementById('fabric-modal-content-list'); 
     if(!list) return; 
     list.innerHTML = '';
     if (mode === 'collections') {
        window.DB_COLLECTIONS.forEach(col => {
            const item = document.createElement('div');
            item.className = 'dock-item';
            const imgUrl = `${GITHUB_REPO_URL}assets/compressedtextures/${col.name} 1.webp`;
            item.innerHTML = `<div class="dock-circle" style="background-image: url('${imgUrl}'); background-size: cover;"></div><span class="dock-label">${col.name}</span>`;
            item.onclick = () => renderFabricDock('colors', col.name.toLowerCase().replace(/\s/g, ''));
            list.appendChild(item);
        });
     } else {
         const fabrics = window.FABRIC_LIBRARY.filter(f => f.type === collectionKey);
         fabrics.forEach(fab => {
            const item = document.createElement('div');
            item.className = `dock-item ${fab.id === activeFabricId ? 'active' : ''}`;
            const imgUrl = `${GITHUB_REPO_URL}assets/compressedtextures/${fab.collection} ${fab.fileIndex}.webp`;
            item.innerHTML = `<div class="dock-circle" style="background-image: url('${imgUrl}'); background-size: cover;"></div><span class="dock-label">${fab.name}</span>`;
            item.onclick = () => {
                setFabricFromLibrary(fab.id);
                uiSet('fabric-modal', 'display', 'none');
                document.getElementById('current-fabric-name').innerText = fab.name;
            };
            list.appendChild(item);
         });
     }
}

function setFabricFromLibrary(id) {
    const fab = window.FABRIC_LIBRARY.find(f => f.id === id);
    if (!fab) return;
    activeFabricId = id;
    
    // Load Texture
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin('anonymous');
    const url = `${GITHUB_REPO_URL}assets/textures/${fab.collection} ${fab.fileIndex}.jpg`;
    
    showFeedback(`A carregar ${fab.name}...`, "info");
    
    loader.load(url, (tex) => {
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.RepeatWrapping;
        tex.repeat.set(2, 2);
        currentFabricMaterial = new THREE.MeshStandardMaterial({ map: tex });
        
        // Apply to all
        addedModules.forEach(mod => {
            mod.mesh.traverse(n => {
                if (n.isMesh && !n.name.toLowerCase().includes('leg') && n.name !== 'shadow_plane') {
                    n.material = currentFabricMaterial;
                }
            });
        });
        showFeedback("Tecido aplicado", "success");
        updatePriceUI();
    }, undefined, (err) => {
        showFeedback("Erro ao carregar textura", "error");
        console.error(err);
    });
}

function initUIListeners() {
    const resetBtn = document.getElementById('reset-btn');
    if(resetBtn) resetBtn.addEventListener('click', () => {
        addedModules.forEach(m => scene.remove(m.mesh));
        addedModules = [];
        repositionModules();
    });
    
    const battBtn = document.getElementById('battery-btn');
    if(battBtn) battBtn.addEventListener('click', () => {
        hasLithiumBattery = !hasLithiumBattery;
        updateBatteryVisibility();
        updatePriceUI();
    });

    const priceInput = document.getElementById('price-multiplier');
    if(priceInput) priceInput.addEventListener('input', updatePriceUI);
    
    const dimsBtn = document.getElementById('toggle-dims-btn');
    if(dimsBtn) dimsBtn.addEventListener('click', () => {
        showDimensions = !showDimensions;
        updateDimensionLabels();
    });
}

// --- INIT ---
window.onload = function() {
    setTimeout(() => { 
        const l = document.getElementById('app-loader');
        if(l) l.style.display='none'; 
    }, 5000);

    initFabricData();
    renderFabricDock('collections');

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 10, 5000);
    camera.position.set(0, 450, 750);
    
    renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    document.getElementById('canvas-container').appendChild(renderer.domElement);
    
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(300, 500, 300);
    dirLight.castShadow = true;
    scene.add(dirLight);

    manager = new THREE.LoadingManager();
    manager.onLoad = function() { 
        const l = document.getElementById('app-loader');
        if(l) l.style.display = 'none'; 
    };
    
    // Add Dimensions Group
    dimensionLinesGroup = new THREE.Group();
    scene.add(dimensionLinesGroup);
    
    buildFloor();

    initModelSelector();
    renderModuleButtons();
    initSizeSelector();
    initUIListeners();
    loadModelAssets(CURRENT_MODEL_ID);
    updateBatteryVisibility();

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
    animate();
    
    window.addEventListener('resize', onWindowResize);
    renderer.domElement.addEventListener('mousemove', interactWithScene); 
    renderer.domElement.addEventListener('click', interactWithScene);
    renderer.domElement.addEventListener('touchstart', onTouchStart, {passive: false});
    renderer.domElement.addEventListener('touchend', onTouchEnd, {passive: false});
};
    </script>
</body>
</html>
