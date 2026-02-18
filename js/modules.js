// Base de Dados de Módulos e Coleções
// Carregado externamente pelo Configurador Stoffus

const DB_MODULES_EXTERNAL = [
    { id: "seat_arm_l", name: "1 Lugar c/ Braço Esq.", fileKey: "seat", hasArm: "left", icon: "fa-couch", widthRatio: 1 },
    { id: "seat_arm_r", name: "1 Lugar c/ Braço Dir.", fileKey: "seat", hasArm: "right", icon: "fa-couch", widthRatio: 1 },
    { id: "seat_no_arm", name: "1 Lugar s/ Braços", fileKey: "seat", hasArm: false, icon: "fa-chair", widthRatio: 1 },
    { id: "corner", name: "Canto", fileKey: "corner", fixed: true, type: "corner", icon: "fa-vector-square" },
    { id: "chaise_l", name: "Chaise Longue Esq.", fileKey: "chaise", hasArm: "left", type: "chaise", icon: "fa-bed" },
    { id: "chaise_r", name: "Chaise Longue Dir.", fileKey: "chaise", hasArm: "right", type: "chaise", icon: "fa-bed" },
    { id: "meridien_l", name: "Meridien Esq.", fileKey: "seat", hasArm: "left", type: "meridien", icon: "fa-couch" },
    { id: "meridien_r", name: "Meridien Dir.", fileKey: "seat", hasArm: "right", type: "meridien", icon: "fa-couch" },
    { id: "2seats_2arms", name: "2 Lug. 2 Braços", fileKey: "2arm2seats", hasArm: "both", icon: "fa-couch" },
    { id: "2seats_arm_l", name: "2 Lug. Braço Esq.", fileKey: "arm2seats", hasArm: "left", icon: "fa-couch", widthRatio: 2 },
    { id: "2seats_arm_r", name: "2 Lug. Braço Dir.", fileKey: "arm2seats", hasArm: "right", icon: "fa-couch", widthRatio: 2 },
    { id: "pouff", name: "Puff", fileKey: "pouff", fixed: true, icon: "fa-square" }
];

const DB_COLLECTIONS_EXTERNAL = [
    { name: "Siza", prefix: "SZ", start: 100 }, 
    { name: "River", prefix: "RV", start: 200 },
    { name: "Fumiko", prefix: "FK", start: 300 }, 
    { name: "Madoka", prefix: "MK", start: 400 }
];