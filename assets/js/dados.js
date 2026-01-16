// ==========================================
// BASE DE DADOS DO CONFIGURADOR STOFFUS
// ==========================================
// Guardar este ficheiro em: js/dados.js

window.DB_MODELS = {
    'athena': { 
        name: 'Athena', 
        type: 'relax', 
        folder: 'athena', 
        sizes: { S: 62, M: 72, L: 82, XL: 92 }, 
        meridienSizes: { S: 112, M: 122, L: 132, XL: 142 }, 
        chaiseSizes: { S: 60, M: 70, L: 80, XL: 90 },
        armWidth: 20, 
        depth: 100, 
        chaiseDepth: 165, 
        cornerSize: 113, 
        modules: ['seat_no_arm', 'seat_arm_l', 'seat_arm_r', 'corner', 'chaise_l', 'chaise_r', 'meridien_l', 'meridien_r'] 
    },
    'bartini': { 
        name: 'Bartini', 
        type: 'relax', 
        folder: 'Bartini', 
        sizes: { S: 62, M: 68, L: 78, XL: 88 }, 
        meridienSizes: { S: 116, M: 122, L: 132, XL: 142 },
        chaiseSizes: { S: 64, M: 70, L: 80, XL: 90 },
        armWidth: 22, 
        depth: 100, 
        chaiseDepth: 165, 
        cornerSize: 108, 
        modules: ['seat_no_arm', 'seat_arm_l', 'seat_arm_r', 'corner', 'chaise_l', 'chaise_r', 'meridien_l', 'meridien_r', 'meiple'] 
    },
    'brittany': { 
        name: 'Brittany', 
        type: 'relax', 
        folder: 'brittany', 
        sizes: { S: 62, M: 72, L: 82, XL: 92 }, 
        armWidth: 18, 
        depth: 102, 
        chaiseDepth: 160, 
        cornerSize: 110, 
        modules: ['seat_no_arm', 'seat_arm_l', 'seat_arm_r', 'corner', 'chaise_l', 'chaise_r', 'meridien_l', 'meridien_r'] 
    },
    'dayma': { 
        name: 'Dayma', 
        type: 'relax', 
        folder: 'dayma', 
        sizes: { S: 62, M: 72, L: 82, XL: 92 }, 
        meridienSizes: { S: 112, M: 122, L: 132, XL: 142 }, 
        chaiseSizes: { S: 86, M: 92, L: 102, XL: 112 },
        armWidth: 24, 
        depth: 100, 
        chaiseDepth: 165, 
        cornerSize: 113, 
        modules: ['seat_no_arm', 'seat_arm_l', 'seat_arm_r', 'corner', 'chaise_l', 'chaise_r', 'meridien_l', 'meridien_r'] 
    },
    'enzo': { 
        name: 'Enzo', 
        type: 'relax', 
        folder: 'enzo', 
        sizes: { S: 62, M: 72, L: 82, XL: 92 }, 
        meridienSizes: { S: 112, M: 122, L: 132, XL: 142 }, 
        chaiseSizes: { S: 92, M: 102, L: 112, XL: 122 },
        armWidth: 30, 
        depth: 100, 
        chaiseDepth: 165, 
        cornerSize: 113, 
        modules: ['seat_no_arm', 'seat_arm_l', 'seat_arm_r', 'corner', 'chaise_l', 'chaise_r', 'meridien_l', 'meridien_r'] 
    },
    'fiori': { 
        name: 'Fiori', 
        type: 'relax', 
        folder: 'fiori', 
        sizes: { S: 62, M: 68, L: 78, XL: 88 }, 
        meridienSizes: { S: 114, M: 120, L: 130, XL: 140 }, 
        chaiseSizes: { S: 87, M: 93, L: 103, XL: 113 },
        armWidth: 25, 
        depth: 100, 
        chaiseDepth: 165, 
        cornerSize: 108, 
        modules: ['seat_no_arm', 'seat_arm_l', 'seat_arm_r', 'corner', 'chaise_l', 'chaise_r', 'meridien_l', 'meridien_r'] 
    },
    'fienza': {
        name: 'Fienza (Fixo)',
        type: 'fixed',
        folder: 'fienza',
        sizes: { S: 62, M: 72, L: 82, XL: 92 },
        armWidth: 20,
        depth: 105,
        chaiseDepth: 165,
        cornerSize: 113,
        modules: ['seat_arm_l', 'seat_arm_r', '2seats_arm_l', '2seats_arm_r', '2seats_2arms', 'chaise_l', 'chaise_r', 'corner']
    },
    'infinity': { name: 'Infinity (Deslizante)', type: 'slide', folder: 'Infinity', sizes: { S: 70, M: 80, L: 90, XL: 100, XXL: 110 }, armWidth: 25, depth: 115, chaiseDepth: 180, cornerSize: 0, modules: ['2seats_2arms', 'seat_arm_l', 'seat_arm_r', '2seats_arm_l', '2seats_arm_r', 'chaise_l', 'chaise_r', 'meiple'] },
    'magic': { name: 'Magic (Deslizante)', type: 'slide', folder: 'magic', sizes: { S: 70, M: 80, L: 90, XL: 100, XXL: 110 }, armWidth: 25, depth: 115, chaiseDepth: 180, cornerSize: 0, modules: ['2seats_2arms', 'seat_arm_l', 'seat_arm_r', '2seats_arm_l', '2seats_arm_r', 'chaise_l', 'chaise_r', 'meiple'] },
    'bruma': { 
        name: 'Bruma (Fixo)', 
        type: 'fixed', 
        folder: 'bruma', 
        sizes: { L: 82, XL: 92 }, 
        pouffSize: 105,
        triangleSize: 113,
        armWidth: 20, 
        depth: 105, 
        chaiseDepth: 165, 
        cornerSize: 113, 
        modules: ['seat_arm_l', 'seat_arm_r', '2seats_no_arm', '2seats_arm_l', '2seats_arm_r', '2seats_2arms', 'chaise_l', 'chaise_r', 'corner', 'triangle', 'pouff'] 
    },
    'kindia': { 
        name: 'Kindia', 
        type: 'relax', 
        folder: 'kindia', 
        sizes: { S: 58, M: 62, L: 78, XL: 90 }, 
        oneSeatArmSizes: { S: 82, M: 86, L: 102, XL: 114 },
        twoSeatSizes: { S: 132, M: 140, L: 172, XL: 196 },
        chaiseSizes: { S: 82, M: 86, L: 102, XL: 114 },
        armWidth: 16, 
        depth: 95, 
        chaiseDepth: 175, 
        cornerSize: 0, 
        modules: ['seat_no_arm', 'seat_arm_l', 'seat_arm_r', '2seats_arm_l', '2seats_arm_r', '2seats_2arms', 'chaise_l', 'chaise_r', 'meiple'] 
    },
    'sting': { name: 'Sting', type: 'relax', folder: 'sting', sizes: { S: 62, M: 72, L: 82, XL: 92 }, armWidth: 20, depth: 105, chaiseDepth: 165, cornerSize: 113, modules: ['seat_no_arm', 'seat_arm_l', 'seat_arm_r', 'corner', 'chaise_l', 'chaise_r', 'meridien_l', 'meridien_r'] }
};

window.DB_PRICES = {
    "athena": {
        "seat_no_arm": { "S": { "cliente": 18, "bliss": 20, "delta": 21, "fashion": 25, "pele_extra": 34, "pele_platina": 37 }, "M": { "cliente": 18, "bliss": 20, "delta": 21, "fashion": 25, "pele_extra": 34, "pele_platina": 37 }, "L": { "cliente": 20, "bliss": 22, "delta": 23, "fashion": 27, "pele_extra": 36, "pele_platina": 40 }, "XL": { "cliente": 20, "bliss": 22, "delta": 23, "fashion": 27, "pele_extra": 36, "pele_platina": 40 } },
        "seat_arm_l": { "S": { "cliente": 23, "bliss": 24, "delta": 26, "fashion": 31, "pele_extra": 43, "pele_platina": 48 }, "M": { "cliente": 23, "bliss": 24, "delta": 26, "fashion": 31, "pele_extra": 43, "pele_platina": 48 }, "L": { "cliente": 23, "bliss": 25, "delta": 27, "fashion": 33, "pele_extra": 46, "pele_platina": 51 }, "XL": { "cliente": 23, "bliss": 25, "delta": 27, "fashion": 33, "pele_extra": 46, "pele_platina": 51 } },
        "seat_arm_r": { "S": { "cliente": 23, "bliss": 24, "delta": 26, "fashion": 31, "pele_extra": 43, "pele_platina": 48 }, "M": { "cliente": 23, "bliss": 24, "delta": 26, "fashion": 31, "pele_extra": 43, "pele_platina": 48 }, "L": { "cliente": 23, "bliss": 25, "delta": 27, "fashion": 33, "pele_extra": 46, "pele_platina": 51 }, "XL": { "cliente": 23, "bliss": 25, "delta": 27, "fashion": 33, "pele_extra": 46, "pele_platina": 51 } },
        "2seats_arm_l": { "S": { "cliente": 33, "bliss": 36, "delta": 39, "fashion": 49, "pele_extra": 70, "pele_platina": 78 }, "M": { "cliente": 33, "bliss": 36, "delta": 39, "fashion": 49, "pele_extra": 70, "pele_platina": 78 }, "L": { "cliente": 36, "bliss": 40, "delta": 43, "fashion": 53, "pele_extra": 76, "pele_platina": 84 }, "XL": { "cliente": 36, "bliss": 40, "delta": 43, "fashion": 53, "pele_extra": 76, "pele_platina": 84 } },
        "2seats_arm_r": { "S": { "cliente": 33, "bliss": 36, "delta": 39, "fashion": 49, "pele_extra": 70, "pele_platina": 78 }, "M": { "cliente": 33, "bliss": 36, "delta": 39, "fashion": 49, "pele_extra": 70, "pele_platina": 78 }, "L": { "cliente": 36, "bliss": 40, "delta": 43, "fashion": 53, "pele_extra": 76, "pele_platina": 84 }, "XL": { "cliente": 36, "bliss": 40, "delta": 43, "fashion": 53, "pele_extra": 76, "pele_platina": 84 } },
        "2seats_2arms": { "S": { "cliente": 36, "bliss": 40, "delta": 43, "fashion": 53, "pele_extra": 77, "pele_platina": 85 }, "M": { "cliente": 36, "bliss": 40, "delta": 43, "fashion": 53, "pele_extra": 77, "pele_platina": 85 }, "L": { "cliente": 39, "bliss": 43, "delta": 47, "fashion": 58, "pele_extra": 82, "pele_platina": 91 }, "XL": { "cliente": 39, "bliss": 43, "delta": 47, "fashion": 58, "pele_extra": 82, "pele_platina": 91 } },
        "chaise_l": { "S": { "cliente": 29, "bliss": 30, "delta": 32, "fashion": 37, "pele_extra": 49, "pele_platina": 53 }, "M": { "cliente": 29, "bliss": 30, "delta": 32, "fashion": 37, "pele_extra": 49, "pele_platina": 53 }, "L": { "cliente": 31, "bliss": 33, "delta": 35, "fashion": 40, "pele_extra": 53, "pele_platina": 58 }, "XL": { "cliente": 31, "bliss": 33, "delta": 35, "fashion": 40, "pele_extra": 53, "pele_platina": 58 } },
        "chaise_r": { "S": { "cliente": 29, "bliss": 30, "delta": 32, "fashion": 37, "pele_extra": 49, "pele_platina": 53 }, "M": { "cliente": 29, "bliss": 30, "delta": 32, "fashion": 37, "pele_extra": 49, "pele_platina": 53 }, "L": { "cliente": 31, "bliss": 33, "delta": 35, "fashion": 40, "pele_extra": 53, "pele_platina": 58 }, "XL": { "cliente": 31, "bliss": 33, "delta": 35, "fashion": 40, "pele_extra": 53, "pele_platina": 58 } },
        "meridien_l": { "S": { "cliente": 30, "bliss": 32, "delta": 34, "fashion": 40, "pele_extra": 53, "pele_platina": 58 }, "M": { "cliente": 30, "bliss": 32, "delta": 34, "fashion": 40, "pele_extra": 53, "pele_platina": 58 }, "L": { "cliente": 31, "bliss": 33, "delta": 36, "fashion": 42, "pele_extra": 56, "pele_platina": 61 }, "XL": { "cliente": 31, "bliss": 33, "delta": 36, "fashion": 42, "pele_extra": 56, "pele_platina": 61 } },
        "meridien_r": { "S": { "cliente": 30, "bliss": 32, "delta": 34, "fashion": 40, "pele_extra": 53, "pele_platina": 58 }, "M": { "cliente": 30, "bliss": 32, "delta": 34, "fashion": 40, "pele_extra": 53, "pele_platina": 58 }, "L": { "cliente": 31, "bliss": 33, "delta": 36, "fashion": 42, "pele_extra": 56, "pele_platina": 61 }, "XL": { "cliente": 31, "bliss": 33, "delta": 36, "fashion": 42, "pele_extra": 56, "pele_platina": 61 } },
        "corner": { "S": { "cliente": 26, "bliss": 27, "delta": 29, "fashion": 34, "pele_extra": 45, "pele_platina": 49 }, "M": { "cliente": 26, "bliss": 27, "delta": 29, "fashion": 34, "pele_extra": 45, "pele_platina": 49 }, "L": { "cliente": 26, "bliss": 27, "delta": 29, "fashion": 34, "pele_extra": 45, "pele_platina": 49 }, "XL": { "cliente": 26, "bliss": 27, "delta": 29, "fashion": 34, "pele_extra": 45, "pele_platina": 49 } }
    },
    "bartini": {
        "seat_no_arm": { "S": { "cliente": 20, "bliss": 22, "delta": 23, "fashion": 27, "pele_extra": 36, "pele_platina": 39 }, "M": { "cliente": 20, "bliss": 22, "delta": 23, "fashion": 27, "pele_extra": 36, "pele_platina": 39 }, "L": { "cliente": 22, "bliss": 23, "delta": 25, "fashion": 29, "pele_extra": 39, "pele_platina": 43 }, "XL": { "cliente": 22, "bliss": 23, "delta": 25, "fashion": 29, "pele_extra": 39, "pele_platina": 43 } },
        "seat_arm_l": { "S": { "cliente": 24, "bliss": 26, "delta": 27, "fashion": 32, "pele_extra": 42, "pele_platina": 45 }, "M": { "cliente": 24, "bliss": 26, "delta": 27, "fashion": 32, "pele_extra": 42, "pele_platina": 45 }, "L": { "cliente": 27, "bliss": 28, "delta": 30, "fashion": 36, "pele_extra": 48, "pele_platina": 52 }, "XL": { "cliente": 27, "bliss": 28, "delta": 30, "fashion": 36, "pele_extra": 48, "pele_platina": 52 } },
        "seat_arm_r": { "S": { "cliente": 24, "bliss": 26, "delta": 27, "fashion": 32, "pele_extra": 42, "pele_platina": 45 }, "M": { "cliente": 24, "bliss": 26, "delta": 27, "fashion": 32, "pele_extra": 42, "pele_platina": 45 }, "L": { "cliente": 27, "bliss": 28, "delta": 30, "fashion": 36, "pele_extra": 48, "pele_platina": 52 }, "XL": { "cliente": 27, "bliss": 28, "delta": 30, "fashion": 36, "pele_extra": 48, "pele_platina": 52 } },
        "2seats_arm_l": { "S": { "cliente": 33, "bliss": 36, "delta": 39, "fashion": 46, "pele_extra": 64, "pele_platina": 71 }, "M": { "cliente": 33, "bliss": 36, "delta": 39, "fashion": 46, "pele_extra": 64, "pele_platina": 71 }, "L": { "cliente": 35, "bliss": 39, "delta": 42, "fashion": 51, "pele_extra": 72, "pele_platina": 80 }, "XL": { "cliente": 35, "bliss": 39, "delta": 42, "fashion": 51, "pele_extra": 72, "pele_platina": 80 } },
        "2seats_arm_r": { "S": { "cliente": 33, "bliss": 36, "delta": 39, "fashion": 46, "pele_extra": 64, "pele_platina": 71 }, "M": { "cliente": 33, "bliss": 36, "delta": 39, "fashion": 46, "pele_extra": 64, "pele_platina": 71 }, "L": { "cliente": 35, "bliss": 39, "delta": 42, "fashion": 51, "pele_extra": 72, "pele_platina": 80 }, "XL": { "cliente": 35, "bliss": 39, "delta": 42, "fashion": 51, "pele_extra": 72, "pele_platina": 80 } },
        "2seats_2arms": { "S": { "cliente": 34, "bliss": 37, "delta": 40, "fashion": 48, "pele_extra": 65, "pele_platina": 72 }, "M": { "cliente": 34, "bliss": 37, "delta": 40, "fashion": 48, "pele_extra": 65, "pele_platina": 72 }, "L": { "cliente": 40, "bliss": 43, "delta": 46, "fashion": 55, "pele_extra": 77, "pele_platina": 84 }, "XL": { "cliente": 40, "bliss": 43, "delta": 46, "fashion": 55, "pele_extra": 77, "pele_platina": 84 } },
        "chaise_l": { "S": { "cliente": 31, "bliss": 33, "delta": 35, "fashion": 41, "pele_extra": 54, "pele_platina": 59 }, "M": { "cliente": 31, "bliss": 33, "delta": 35, "fashion": 41, "pele_extra": 54, "pele_platina": 59 }, "L": { "cliente": 32, "bliss": 35, "delta": 37, "fashion": 44, "pele_extra": 59, "pele_platina": 65 }, "XL": { "cliente": 32, "bliss": 35, "delta": 37, "fashion": 44, "pele_extra": 59, "pele_platina": 65 } },
        "chaise_r": { "S": { "cliente": 31, "bliss": 33, "delta": 35, "fashion": 41, "pele_extra": 54, "pele_platina": 59 }, "M": { "cliente": 31, "bliss": 33, "delta": 35, "fashion": 41, "pele_extra": 54, "pele_platina": 59 }, "L": { "cliente": 32, "bliss": 35, "delta": 37, "fashion": 44, "pele_extra": 59, "pele_platina": 65 }, "XL": { "cliente": 32, "bliss": 35, "delta": 37, "fashion": 44, "pele_extra": 59, "pele_platina": 65 } },
        "meridien_l": { "S": { "cliente": 25, "bliss": 27, "delta": 29, "fashion": 34, "pele_extra": 45, "pele_platina": 49 }, "M": { "cliente": 25, "bliss": 27, "delta": 29, "fashion": 34, "pele_extra": 45, "pele_platina": 49 }, "L": { "cliente": 28, "bliss": 30, "delta": 33, "fashion": 38, "pele_extra": 52, "pele_platina": 57 }, "XL": { "cliente": 28, "bliss": 30, "delta": 33, "fashion": 38, "pele_extra": 52, "pele_platina": 57 } },
        "meridien_r": { "S": { "cliente": 25, "bliss": 27, "delta": 29, "fashion": 34, "pele_extra": 45, "pele_platina": 49 }, "M": { "cliente": 25, "bliss": 27, "delta": 29, "fashion": 34, "pele_extra": 45, "pele_platina": 49 }, "L": { "cliente": 28, "bliss": 30, "delta": 33, "fashion": 38, "pele_extra": 52, "pele_platina": 57 }, "XL": { "cliente": 28, "bliss": 30, "delta": 33, "fashion": 38, "pele_extra": 52, "pele_platina": 57 } },
        "corner": { "S": { "cliente": 28, "bliss": 30, "delta": 32, "fashion": 38, "pele_extra": 51, "pele_platina": 56 }, "M": { "cliente": 28, "bliss": 30, "delta": 32, "fashion": 38, "pele_extra": 51, "pele_platina": 56 }, "L": { "cliente": 28, "bliss": 30, "delta": 32, "fashion": 38, "pele_extra": 51, "pele_platina": 56 }, "XL": { "cliente": 28, "bliss": 30, "delta": 32, "fashion": 38, "pele_extra": 51, "pele_platina": 56 } }
    },
    "brittany": {
        "seat_no_arm": { "S": { "cliente": 18, "bliss": 20, "delta": 21, "fashion": 25, "pele_extra": 34, "pele_platina": 37 }, "M": { "cliente": 18, "bliss": 20, "delta": 21, "fashion": 25, "pele_extra": 34, "pele_platina": 37 }, "L": { "cliente": 20, "bliss": 22, "delta": 23, "fashion": 27, "pele_extra": 36, "pele_platina": 40 }, "XL": { "cliente": 20, "bliss": 22, "delta": 23, "fashion": 27, "pele_extra": 36, "pele_platina": 40 } },
        "seat_arm_l": { "S": { "cliente": 22, "bliss": 24, "delta": 25, "fashion": 30, "pele_extra": 41, "pele_platina": 45 }, "M": { "cliente": 22, "bliss": 24, "delta": 25, "fashion": 30, "pele_extra": 41, "pele_platina": 45 }, "L": { "cliente": 23, "bliss": 25, "delta": 27, "fashion": 32, "pele_extra": 44, "pele_platina": 48 }, "XL": { "cliente": 23, "bliss": 25, "delta": 27, "fashion": 32, "pele_extra": 44, "pele_platina": 48 } },
        "seat_arm_r": { "S": { "cliente": 22, "bliss": 24, "delta": 25, "fashion": 30, "pele_extra": 41, "pele_platina": 45 }, "M": { "cliente": 22, "bliss": 24, "delta": 25, "fashion": 30, "pele_extra": 41, "pele_platina": 45 }, "L": { "cliente": 23, "bliss": 25, "delta": 27, "fashion": 32, "pele_extra": 44, "pele_platina": 48 }, "XL": { "cliente": 23, "bliss": 25, "delta": 27, "fashion": 32, "pele_extra": 44, "pele_platina": 48 } },
        "2seats_arm_l": { "S": { "cliente": 33, "bliss": 36, "delta": 39, "fashion": 48, "pele_extra": 70, "pele_platina": 77 }, "M": { "cliente": 33, "bliss": 36, "delta": 39, "fashion": 48, "pele_extra": 70, "pele_platina": 77 }, "L": { "cliente": 36, "bliss": 39, "delta": 43, "fashion": 52, "pele_extra": 75, "pele_platina": 83 }, "XL": { "cliente": 36, "bliss": 39, "delta": 43, "fashion": 52, "pele_extra": 75, "pele_platina": 83 } },
        "2seats_arm_r": { "S": { "cliente": 33, "bliss": 36, "delta": 39, "fashion": 48, "pele_extra": 70, "pele_platina": 77 }, "M": { "cliente": 33, "bliss": 36, "delta": 39, "fashion": 48, "pele_extra": 70, "pele_platina": 77 }, "L": { "cliente": 36, "bliss": 39, "delta": 43, "fashion": 52, "pele_extra": 75, "pele_platina": 83 }, "XL": { "cliente": 36, "bliss": 39, "delta": 43, "fashion": 52, "pele_extra": 75, "pele_platina": 83 } },
        "2seats_2arms": { "S": { "cliente": 36, "bliss": 40, "delta": 43, "fashion": 53, "pele_extra": 76, "pele_platina": 85 }, "M": { "cliente": 36, "bliss": 40, "delta": 43, "fashion": 53, "pele_extra": 76, "pele_platina": 85 }, "L": { "cliente": 39, "bliss": 43, "delta": 47, "fashion": 57, "pele_extra": 81, "pele_platina": 90 }, "XL": { "cliente": 39, "bliss": 43, "delta": 47, "fashion": 57, "pele_extra": 81, "pele_platina": 90 } },
        "chaise_l": { "S": { "cliente": 29, "bliss": 30, "delta": 32, "fashion": 37, "pele_extra": 49, "pele_platina": 53 }, "M": { "cliente": 29, "bliss": 30, "delta": 32, "fashion": 37, "pele_extra": 49, "pele_platina": 53 }, "L": { "cliente": 30, "bliss": 32, "delta": 34, "fashion": 40, "pele_extra": 53, "pele_platina": 57 }, "XL": { "cliente": 30, "bliss": 32, "delta": 34, "fashion": 40, "pele_extra": 53, "pele_platina": 57 } },
        "chaise_r": { "S": { "cliente": 29, "bliss": 30, "delta": 32, "fashion": 37, "pele_extra": 49, "pele_platina": 53 }, "M": { "cliente": 29, "bliss": 30, "delta": 32, "fashion": 37, "pele_extra": 49, "pele_platina": 53 }, "L": { "cliente": 30, "bliss": 32, "delta": 34, "fashion": 40, "pele_extra": 53, "pele_platina": 57 }, "XL": { "cliente": 30, "bliss": 32, "delta": 34, "fashion": 40, "pele_extra": 53, "pele_platina": 57 } },
        "meridien_l": { "S": { "cliente": 30, "bliss": 32, "delta": 34, "fashion": 39, "pele_extra": 53, "pele_platina": 58 }, "M": { "cliente": 30, "bliss": 32, "delta": 34, "fashion": 39, "pele_extra": 53, "pele_platina": 58 }, "L": { "cliente": 30, "bliss": 33, "delta": 35, "fashion": 41, "pele_extra": 55, "pele_platina": 61 }, "XL": { "cliente": 30, "bliss": 33, "delta": 35, "fashion": 41, "pele_extra": 55, "pele_platina": 61 } },
        "meridien_r": { "S": { "cliente": 30, "bliss": 32, "delta": 34, "fashion": 39, "pele_extra": 53, "pele_platina": 58 }, "M": { "cliente": 30, "bliss": 32, "delta": 34, "fashion": 39, "pele_extra": 53, "pele_platina": 58 }, "L": { "cliente": 30, "bliss": 33, "delta": 35, "fashion": 41, "pele_extra": 55, "pele_platina": 61 }, "XL": { "cliente": 30, "bliss": 33, "delta": 35, "fashion": 41, "pele_extra": 55, "pele_platina": 61 } },
        "corner": { "S": { "cliente": 25, "bliss": 27, "delta": 29, "fashion": 34, "pele_extra": 45, "pele_platina": 49 }, "M": { "cliente": 25, "bliss": 27, "delta": 29, "fashion": 34, "pele_extra": 45, "pele_platina": 49 }, "L": { "cliente": 25, "bliss": 27, "delta": 29, "fashion": 34, "pele_extra": 45, "pele_platina": 49 }, "XL": { "cliente": 25, "bliss": 27, "delta": 29, "fashion": 34, "pele_extra": 45, "pele_platina": 49 } }
    },
    "dayma": {
        "seat_no_arm": { "S": { "cliente": 18, "bliss": 20, "delta": 21, "fashion": 25, "pele_extra": 34, "pele_platina": 37 }, "M": { "cliente": 18, "bliss": 20, "delta": 21, "fashion": 25, "pele_extra": 34, "pele_platina": 37 }, "L": { "cliente": 20, "bliss": 22, "delta": 23, "fashion": 27, "pele_extra": 36, "pele_platina": 40 }, "XL": { "cliente": 20, "bliss": 22, "delta": 23, "fashion": 27, "pele_extra": 36, "pele_platina": 40 } },
        "seat_arm_l": { "S": { "cliente": 22, "bliss": 24, "delta": 25, "fashion": 30, "pele_extra": 41, "pele_platina": 45 }, "M": { "cliente": 22, "bliss": 24, "delta": 25, "fashion": 30, "pele_extra": 41, "pele_platina": 45 }, "L": { "cliente": 23, "bliss": 25, "delta": 27, "fashion": 32, "pele_extra": 44, "pele_platina": 48 }, "XL": { "cliente": 23, "bliss": 25, "delta": 27, "fashion": 32, "pele_extra": 44, "pele_platina": 48 } },
        "seat_arm_r": { "S": { "cliente": 22, "bliss": 24, "delta": 25, "fashion": 30, "pele_extra": 41, "pele_platina": 45 }, "M": { "cliente": 22, "bliss": 24, "delta": 25, "fashion": 30, "pele_extra": 41, "pele_platina": 45 }, "L": { "cliente": 23, "bliss": 25, "delta": 27, "fashion": 32, "pele_extra": 44, "pele_platina": 48 }, "XL": { "cliente": 23, "bliss": 25, "delta": 27, "fashion": 32, "pele_extra": 44, "pele_platina": 48 } },
        "2seats_arm_l": { "S": { "cliente": 33, "bliss": 36, "delta": 39, "fashion": 48, "pele_extra": 70, "pele_platina": 77 }, "M": { "cliente": 33, "bliss": 36, "delta": 39, "fashion": 48, "pele_extra": 70, "pele_platina": 77 }, "L": { "cliente": 36, "bliss": 39, "delta": 43, "fashion": 52, "pele_extra": 75, "pele_platina": 83 }, "XL": { "cliente": 36, "bliss": 39, "delta": 43, "fashion": 52, "pele_extra": 75, "pele_platina": 83 } },
        "2seats_arm_r": { "S": { "cliente": 33, "bliss": 36, "delta": 39, "fashion": 48, "pele_extra": 70, "pele_platina": 77 }, "M": { "cliente": 33, "bliss": 36, "delta": 39, "fashion": 48, "pele_extra": 70, "pele_platina": 77 }, "L": { "cliente": 36, "bliss": 39, "delta": 43, "fashion": 52, "pele_extra": 75, "pele_platina": 83 }, "XL": { "cliente": 36, "bliss": 39, "delta": 43, "fashion": 52, "pele_extra": 75, "pele_platina": 83 } },
        "2seats_2arms": { "S": { "cliente": 36, "bliss": 40, "delta": 43, "fashion": 53, "pele_extra": 76, "pele_platina": 85 }, "M": { "cliente": 36, "bliss": 40, "delta": 43, "fashion": 53, "pele_extra": 76, "pele_platina": 85 }, "L": { "cliente": 39, "bliss": 43, "delta": 47, "fashion": 57, "pele_extra": 81, "pele_platina": 90 }, "XL": { "cliente": 39, "bliss": 43, "delta": 47, "fashion": 57, "pele_extra": 81, "pele_platina": 90 } },
        "chaise_l": { "S": { "cliente": 29, "bliss": 30, "delta": 32, "fashion": 37, "pele_extra": 49, "pele_platina": 53 }, "M": { "cliente": 29, "bliss": 30, "delta": 32, "fashion": 37, "pele_extra": 49, "pele_platina": 53 }, "L": { "cliente": 30, "bliss": 32, "delta": 34, "fashion": 40, "pele_extra": 53, "pele_platina": 57 }, "XL": { "cliente": 30, "bliss": 32, "delta": 34, "fashion": 40, "pele_extra": 53, "pele_platina": 57 } },
        "chaise_r": { "S": { "cliente": 29, "bliss": 30, "delta": 32, "fashion": 37, "pele_extra": 49, "pele_platina": 53 }, "M": { "cliente": 29, "bliss": 30, "delta": 32, "fashion": 37, "pele_extra": 49, "pele_platina": 53 }, "L": { "cliente": 30, "bliss": 32, "delta": 34, "fashion": 40, "pele_extra": 53, "pele_platina": 57 }, "XL": { "cliente": 30, "bliss": 32, "delta": 34, "fashion": 40, "pele_extra": 53, "pele_platina": 57 } },
        "meridien_l": { "S": { "cliente": 30, "bliss": 32, "delta": 34, "fashion": 39, "pele_extra": 53, "pele_platina": 58 }, "M": { "cliente": 30, "bliss": 32, "delta": 34, "fashion": 39, "pele_extra": 53, "pele_platina": 58 }, "L": { "cliente": 30, "bliss": 33, "delta": 35, "fashion": 41, "pele_extra": 55, "pele_platina": 61 }, "XL": { "cliente": 30, "bliss": 33, "delta": 35, "fashion": 41, "pele_extra": 55, "pele_platina": 61 } },
        "meridien_r": { "S": { "cliente": 30, "bliss": 32, "delta": 34, "fashion": 39, "pele_extra": 53, "pele_platina": 58 }, "M": { "cliente": 30, "bliss": 32, "delta": 34, "fashion": 39, "pele_extra": 53, "pele_platina": 58 }, "L": { "cliente": 30, "bliss": 33, "delta": 35, "fashion": 41, "pele_extra": 55, "pele_platina": 61 }, "XL": { "cliente": 30, "bliss": 33, "delta": 35, "fashion": 41, "pele_extra": 55, "pele_platina": 61 } },
        "corner": { "S": { "cliente": 25, "bliss": 27, "delta": 29, "fashion": 34, "pele_extra": 45, "pele_platina": 49 }, "M": { "cliente": 25, "bliss": 27, "delta": 29, "fashion": 34, "pele_extra": 45, "pele_platina": 49 }, "L": { "cliente": 25, "bliss": 27, "delta": 29, "fashion": 34, "pele_extra": 45, "pele_platina": 49 }, "XL": { "cliente": 25, "bliss": 27, "delta": 29, "fashion": 34, "pele_extra": 45, "pele_platina": 49 } }
    },
    "enzo": {
        "seat_no_arm": { "S": { "cliente": 19, "bliss": 20, "delta": 22, "fashion": 26, "pele_extra": 36, "pele_platina": 40 }, "M": { "cliente": 19, "bliss": 20, "delta": 22, "fashion": 26, "pele_extra": 36, "pele_platina": 40 }, "L": { "cliente": 21, "bliss": 23, "delta": 24, "fashion": 29, "pele_extra": 40, "pele_platina": 44 }, "XL": { "cliente": 21, "bliss": 23, "delta": 24, "fashion": 29, "pele_extra": 40, "pele_platina": 44 } },
        "seat_arm_l": { "S": { "cliente": 22, "bliss": 24, "delta": 25, "fashion": 30, "pele_extra": 41, "pele_platina": 45 }, "M": { "cliente": 22, "bliss": 24, "delta": 25, "fashion": 30, "pele_extra": 41, "pele_platina": 45 }, "L": { "cliente": 23, "bliss": 25, "delta": 27, "fashion": 32, "pele_extra": 44, "pele_platina": 48 }, "XL": { "cliente": 23, "bliss": 25, "delta": 27, "fashion": 32, "pele_extra": 44, "pele_platina": 48 } },
        "seat_arm_r": { "S": { "cliente": 22, "bliss": 24, "delta": 25, "fashion": 30, "pele_extra": 41, "pele_platina": 45 }, "M": { "cliente": 22, "bliss": 24, "delta": 25, "fashion": 30, "pele_extra": 41, "pele_platina": 45 }, "L": { "cliente": 23, "bliss": 25, "delta": 27, "fashion": 32, "pele_extra": 44, "pele_platina": 48 }, "XL": { "cliente": 23, "bliss": 25, "delta": 27, "fashion": 32, "pele_extra": 44, "pele_platina": 48 } },
        "2seats_arm_l": { "S": { "cliente": 33, "bliss": 36, "delta": 40, "fashion": 49, "pele_extra": 72, "pele_platina": 80 }, "M": { "cliente": 33, "bliss": 36, "delta": 40, "fashion": 49, "pele_extra": 72, "pele_platina": 80 }, "L": { "cliente": 36, "bliss": 40, "delta": 44, "fashion": 54, "pele_extra": 79, "pele_platina": 88 }, "XL": { "cliente": 36, "bliss": 40, "delta": 44, "fashion": 54, "pele_extra": 79, "pele_platina": 88 } },
        "2seats_arm_r": { "S": { "cliente": 33, "bliss": 36, "delta": 40, "fashion": 49, "pele_extra": 72, "pele_platina": 80 }, "M": { "cliente": 33, "bliss": 36, "delta": 40, "fashion": 49, "pele_extra": 72, "pele_platina": 80 }, "L": { "cliente": 36, "bliss": 40, "delta": 44, "fashion": 54, "pele_extra": 79, "pele_platina": 88 }, "XL": { "cliente": 36, "bliss": 40, "delta": 44, "fashion": 54, "pele_extra": 79, "pele_platina": 88 } },
        "2seats_2arms": { "S": { "cliente": 37, "bliss": 41, "delta": 46, "fashion": 57, "pele_extra": 84, "pele_platina": 93 }, "M": { "cliente": 37, "bliss": 41, "delta": 46, "fashion": 57, "pele_extra": 84, "pele_platina": 93 }, "L": { "cliente": 40, "bliss": 45, "delta": 49, "fashion": 61, "pele_extra": 89, "pele_platina": 99 }, "XL": { "cliente": 40, "bliss": 45, "delta": 49, "fashion": 61, "pele_extra": 89, "pele_platina": 99 } },
        "chaise_l": { "S": { "cliente": 29, "bliss": 31, "delta": 33, "fashion": 39, "pele_extra": 52, "pele_platina": 57 }, "M": { "cliente": 29, "bliss": 31, "delta": 33, "fashion": 39, "pele_extra": 52, "pele_platina": 57 }, "L": { "cliente": 31, "bliss": 33, "delta": 36, "fashion": 42, "pele_extra": 56, "pele_platina": 61 }, "XL": { "cliente": 31, "bliss": 33, "delta": 36, "fashion": 42, "pele_extra": 56, "pele_platina": 61 } },
        "chaise_r": { "S": { "cliente": 29, "bliss": 31, "delta": 33, "fashion": 39, "pele_extra": 52, "pele_platina": 57 }, "M": { "cliente": 29, "bliss": 31, "delta": 33, "fashion": 39, "pele_extra": 52, "pele_platina": 57 }, "L": { "cliente": 31, "bliss": 33, "delta": 36, "fashion": 42, "pele_extra": 56, "pele_platina": 61 }, "XL": { "cliente": 31, "bliss": 33, "delta": 36, "fashion": 42, "pele_extra": 56, "pele_platina": 61 } },
        "meridien_l": { "S": { "cliente": 30, "bliss": 32, "delta": 34, "fashion": 39, "pele_extra": 53, "pele_platina": 58 }, "M": { "cliente": 30, "bliss": 32, "delta": 34, "fashion": 39, "pele_extra": 53, "pele_platina": 58 }, "L": { "cliente": 31, "bliss": 33, "delta": 36, "fashion": 42, "pele_extra": 58, "pele_platina": 63 }, "XL": { "cliente": 31, "bliss": 33, "delta": 36, "fashion": 42, "pele_extra": 58, "pele_platina": 63 } },
        "meridien_r": { "S": { "cliente": 30, "bliss": 32, "delta": 34, "fashion": 39, "pele_extra": 53, "pele_platina": 58 }, "M": { "cliente": 30, "bliss": 32, "delta": 34, "fashion": 39, "pele_extra": 53, "pele_platina": 58 }, "L": { "cliente": 31, "bliss": 33, "delta": 36, "fashion": 42, "pele_extra": 58, "pele_platina": 63 }, "XL": { "cliente": 31, "bliss": 33, "delta": 36, "fashion": 42, "pele_extra": 58, "pele_platina": 63 } },
        "corner": { "S": { "cliente": 25, "bliss": 27, "delta": 29, "fashion": 34, "pele_extra": 45, "pele_platina": 49 }, "M": { "cliente": 25, "bliss": 27, "delta": 29, "fashion": 34, "pele_extra": 45, "pele_platina": 49 }, "L": { "cliente": 25, "bliss": 27, "delta": 29, "fashion": 34, "pele_extra": 45, "pele_platina": 49 }, "XL": { "cliente": 25, "bliss": 27, "delta": 29, "fashion": 34, "pele_extra": 45, "pele_platina": 49 } }
     },
     "fiori": {
        "seat_no_arm": { "S": { "cliente": 22, "bliss": 24, "delta": 25, "fashion": 29, "pele_extra": 38, "pele_platina": 42 }, "M": { "cliente": 22, "bliss": 24, "delta": 25, "fashion": 29, "pele_extra": 38, "pele_platina": 42 }, "L": { "cliente": 24, "bliss": 26, "delta": 27, "fashion": 32, "pele_extra": 43, "pele_platina": 47 }, "XL": { "cliente": 24, "bliss": 26, "delta": 27, "fashion": 32, "pele_extra": 43, "pele_platina": 47 } },
        "seat_arm_l": { "S": { "cliente": 24, "bliss": 26, "delta": 28, "fashion": 33, "pele_extra": 46, "pele_platina": 50 }, "M": { "cliente": 24, "bliss": 26, "delta": 28, "fashion": 33, "pele_extra": 46, "pele_platina": 50 }, "L": { "cliente": 26, "bliss": 28, "delta": 30, "fashion": 35, "pele_extra": 49, "pele_platina": 54 }, "XL": { "cliente": 26, "bliss": 28, "delta": 30, "fashion": 35, "pele_extra": 49, "pele_platina": 54 } },
        "seat_arm_r": { "S": { "cliente": 24, "bliss": 26, "delta": 28, "fashion": 33, "pele_extra": 46, "pele_platina": 50 }, "M": { "cliente": 24, "bliss": 26, "delta": 28, "fashion": 33, "pele_extra": 46, "pele_platina": 50 }, "L": { "cliente": 26, "bliss": 28, "delta": 30, "fashion": 35, "pele_extra": 49, "pele_platina": 54 }, "XL": { "cliente": 26, "bliss": 28, "delta": 30, "fashion": 35, "pele_extra": 49, "pele_platina": 54 } },
        "2seats_arm_l": { "S": { "cliente": 33, "bliss": 36, "delta": 39, "fashion": 46, "pele_extra": 64, "pele_platina": 71 }, "M": { "cliente": 33, "bliss": 36, "delta": 39, "fashion": 46, "pele_extra": 64, "pele_platina": 71 }, "L": { "cliente": 37, "bliss": 40, "delta": 44, "fashion": 53, "pele_extra": 74, "pele_platina": 82 }, "XL": { "cliente": 37, "bliss": 40, "delta": 44, "fashion": 53, "pele_extra": 74, "pele_platina": 82 } },
        "2seats_arm_r": { "S": { "cliente": 33, "bliss": 36, "delta": 39, "fashion": 46, "pele_extra": 64, "pele_platina": 71 }, "M": { "cliente": 33, "bliss": 36, "delta": 39, "fashion": 46, "pele_extra": 64, "pele_platina": 71 }, "L": { "cliente": 37, "bliss": 40, "delta": 44, "fashion": 53, "pele_extra": 74, "pele_platina": 82 }, "XL": { "cliente": 37, "bliss": 40, "delta": 44, "fashion": 53, "pele_extra": 74, "pele_platina": 82 } },
        "2seats_2arms": { "S": { "cliente": 37, "bliss": 40, "delta": 43, "fashion": 51, "pele_extra": 70, "pele_platina": 77 }, "M": { "cliente": 37, "bliss": 40, "delta": 43, "fashion": 51, "pele_extra": 70, "pele_platina": 77 }, "L": { "cliente": 41, "bliss": 44, "delta": 48, "fashion": 58, "pele_extra": 80, "pele_platina": 88 }, "XL": { "cliente": 41, "bliss": 44, "delta": 48, "fashion": 58, "pele_extra": 80, "pele_platina": 88 } },
        "chaise_l": { "S": { "cliente": 31, "bliss": 34, "delta": 37, "fashion": 44, "pele_extra": 62, "pele_platina": 69 }, "M": { "cliente": 31, "bliss": 34, "delta": 37, "fashion": 44, "pele_extra": 62, "pele_platina": 69 }, "L": { "cliente": 33, "bliss": 36, "delta": 39, "fashion": 48, "pele_extra": 68, "pele_platina": 75 }, "XL": { "cliente": 33, "bliss": 36, "delta": 39, "fashion": 48, "pele_extra": 68, "pele_platina": 75 } },
        "chaise_r": { "S": { "cliente": 31, "bliss": 34, "delta": 37, "fashion": 44, "pele_extra": 62, "pele_platina": 69 }, "M": { "cliente": 31, "bliss": 34, "delta": 37, "fashion": 44, "pele_extra": 62, "pele_platina": 69 }, "L": { "cliente": 33, "bliss": 36, "delta": 39, "fashion": 48, "pele_extra": 68, "pele_platina": 75 }, "XL": { "cliente": 33, "bliss": 36, "delta": 39, "fashion": 48, "pele_extra": 68, "pele_platina": 75 } },
        "meridien_l": { "S": { "cliente": 29, "bliss": 31, "delta": 33, "fashion": 39, "pele_extra": 52, "pele_platina": 57 }, "M": { "cliente": 29, "bliss": 31, "delta": 33, "fashion": 39, "pele_extra": 52, "pele_platina": 57 }, "L": { "cliente": 31, "bliss": 33, "delta": 36, "fashion": 42, "pele_extra": 58, "pele_platina": 64 }, "XL": { "cliente": 31, "bliss": 33, "delta": 36, "fashion": 42, "pele_extra": 58, "pele_platina": 64 } },
        "meridien_r": { "S": { "cliente": 29, "bliss": 31, "delta": 33, "fashion": 39, "pele_extra": 52, "pele_platina": 57 }, "M": { "cliente": 29, "bliss": 31, "delta": 33, "fashion": 39, "pele_extra": 52, "pele_platina": 57 }, "L": { "cliente": 31, "bliss": 33, "delta": 36, "fashion": 42, "pele_extra": 58, "pele_platina": 64 }, "XL": { "cliente": 31, "bliss": 33, "delta": 36, "fashion": 42, "pele_extra": 58, "pele_platina": 64 } },
        "corner": { "S": { "cliente": 28, "bliss": 30, "delta": 33, "fashion": 39, "pele_extra": 53, "pele_platina": 59 }, "M": { "cliente": 28, "bliss": 30, "delta": 33, "fashion": 39, "pele_extra": 53, "pele_platina": 59 }, "L": { "cliente": 28, "bliss": 30, "delta": 33, "fashion": 39, "pele_extra": 53, "pele_platina": 59 }, "XL": { "cliente": 28, "bliss": 30, "delta": 33, "fashion": 39, "pele_extra": 53, "pele_platina": 59 } }
     },
     "fienza": {
        // Placeholder
     },
     "kindia": {
        "seat_no_arm": { "S": { "cliente": 18, "bliss": 19, "delta": 21, "fashion": 24, "pele_extra": 33, "pele_platina": 36 }, "M": { "cliente": 18, "bliss": 19, "delta": 21, "fashion": 24, "pele_extra": 33, "pele_platina": 36 }, "L": { "cliente": 20, "bliss": 22, "delta": 24, "fashion": 28, "pele_extra": 38, "pele_platina": 41 }, "XL": { "cliente": 20, "bliss": 22, "delta": 24, "fashion": 28, "pele_extra": 38, "pele_platina": 41 } },
        "seat_arm_l": { "S": { "cliente": 22, "bliss": 23, "delta": 24, "fashion": 28, "pele_extra": 37, "pele_platina": 40 }, "M": { "cliente": 22, "bliss": 23, "delta": 24, "fashion": 28, "pele_extra": 37, "pele_platina": 40 }, "L": { "cliente": 23, "bliss": 25, "delta": 26, "fashion": 31, "pele_extra": 41, "pele_platina": 44 }, "XL": { "cliente": 23, "bliss": 25, "delta": 26, "fashion": 31, "pele_extra": 41, "pele_platina": 44 } },
        "seat_arm_r": { "S": { "cliente": 22, "bliss": 23, "delta": 24, "fashion": 28, "pele_extra": 37, "pele_platina": 40 }, "M": { "cliente": 22, "bliss": 23, "delta": 24, "fashion": 28, "pele_extra": 37, "pele_platina": 40 }, "L": { "cliente": 23, "bliss": 25, "delta": 26, "fashion": 31, "pele_extra": 41, "pele_platina": 44 }, "XL": { "cliente": 23, "bliss": 25, "delta": 26, "fashion": 31, "pele_extra": 41, "pele_platina": 44 } },
        "2seats_arm_l": { "S": { "cliente": 32, "bliss": 35, "delta": 38, "fashion": 47, "pele_extra": 67, "pele_platina": 74 }, "M": { "cliente": 32, "bliss": 35, "delta": 38, "fashion": 47, "pele_extra": 67, "pele_platina": 74 }, "L": { "cliente": 36, "bliss": 39, "delta": 43, "fashion": 52, "pele_extra": 73, "pele_platina": 80 }, "XL": { "cliente": 36, "bliss": 39, "delta": 43, "fashion": 52, "pele_extra": 73, "pele_platina": 80 } },
        "2seats_arm_r": { "S": { "cliente": 32, "bliss": 35, "delta": 38, "fashion": 47, "pele_extra": 67, "pele_platina": 74 }, "M": { "cliente": 32, "bliss": 35, "delta": 38, "fashion": 47, "pele_extra": 67, "pele_platina": 74 }, "L": { "cliente": 36, "bliss": 39, "delta": 43, "fashion": 52, "pele_extra": 73, "pele_platina": 80 }, "XL": { "cliente": 36, "bliss": 39, "delta": 43, "fashion": 52, "pele_extra": 73, "pele_platina": 80 } },
        "2seats_2arms": { "S": { "cliente": 35, "bliss": 38, "delta": 41, "fashion": 49, "pele_extra": 69, "pele_platina": 77 }, "M": { "cliente": 35, "bliss": 38, "delta": 41, "fashion": 49, "pele_extra": 69, "pele_platina": 77 }, "L": { "cliente": 38, "bliss": 42, "delta": 45, "fashion": 54, "pele_extra": 77, "pele_platina": 85 }, "XL": { "cliente": 38, "bliss": 42, "delta": 45, "fashion": 54, "pele_extra": 77, "pele_platina": 85 } },
        "chaise_l": { "S": { "cliente": 31, "bliss": 32, "delta": 34, "fashion": 39, "pele_extra": 51, "pele_platina": 55 }, "M": { "cliente": 31, "bliss": 32, "delta": 34, "fashion": 39, "pele_extra": 51, "pele_platina": 55 }, "L": { "cliente": 32, "bliss": 34, "delta": 36, "fashion": 42, "pele_extra": 55, "pele_platina": 60 }, "XL": { "cliente": 32, "bliss": 34, "delta": 36, "fashion": 42, "pele_extra": 55, "pele_platina": 60 } },
        "chaise_r": { "S": { "cliente": 31, "bliss": 32, "delta": 34, "fashion": 39, "pele_extra": 51, "pele_platina": 55 }, "M": { "cliente": 31, "bliss": 32, "delta": 34, "fashion": 39, "pele_extra": 51, "pele_platina": 55 }, "L": { "cliente": 32, "bliss": 34, "delta": 36, "fashion": 42, "pele_extra": 55, "pele_platina": 60 }, "XL": { "cliente": 32, "bliss": 34, "delta": 36, "fashion": 42, "pele_extra": 55, "pele_platina": 60 } },
        "meiple": { "S": { "cliente": 26, "bliss": 28, "delta": 30, "fashion": 35, "pele_extra": 47, "pele_platina": 52 }, "M": { "cliente": 26, "bliss": 28, "delta": 30, "fashion": 35, "pele_extra": 47, "pele_platina": 52 }, "L": { "cliente": 26, "bliss": 28, "delta": 30, "fashion": 35, "pele_extra": 47, "pele_platina": 52 }, "XL": { "cliente": 26, "bliss": 28, "delta": 30, "fashion": 35, "pele_extra": 47, "pele_platina": 52 } }
     },
     "sting": { name: 'Sting', type: 'relax', folder: 'sting', sizes: { S: 62, M: 72, L: 82, XL: 92 }, armWidth: 20, depth: 105, chaiseDepth: 165, cornerSize: 113, modules: ['seat_no_arm', 'seat_arm_l', 'seat_arm_r', 'corner', 'chaise_l', 'chaise_r', 'meridien_l', 'meridien_r'] }
};

// --- 2. GLOBAL UI FUNCTIONS (HOISTED) ---

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
    
    const modelName = DB_MODELS[CURRENT_MODEL_ID].name;
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
    if (!DB_MODELS[modelId]) return; 
    CURRENT_MODEL_ID = modelId; 
    const modelData = DB_MODELS[modelId]; 
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

    document.getElementById('summary-model').innerText = DB_MODELS[CURRENT_MODEL_ID].name;
    const fabName = document.getElementById('current-fabric-name').innerText;
    document.getElementById('summary-fabric').innerText = fabName;
    document.getElementById('summary-width').innerText = totalWidth;
    updatePriceUI();
    uiSet('order-modal', 'display', 'flex');
};

// --- 3. VARIABLES & CORE LOGIC ---
let CURRENT_MODEL_ID = 'athena';
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

function updateModelButtonUI() { 
    const nameEl = document.getElementById('current-model-name'); 
    if(nameEl) nameEl.textContent = DB_MODELS[CURRENT_MODEL_ID].name; 
    const cards = document.querySelectorAll('.model-card'); 
    cards.forEach(c => { 
        if(c.innerText.includes(DB_MODELS[CURRENT_MODEL_ID].name)) c.classList.add('active'); 
        else c.classList.remove('active'); 
    }); 
}

function initSizeSelector() { 
    const container = document.getElementById('size-selector-container'); 
    if(!container) return; 
    container.innerHTML = ''; 
    const modelSizes = DB_MODELS[CURRENT_MODEL_ID].sizes; 
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
    if(el) el.innerText = `${DB_MODELS[CURRENT_MODEL_ID].sizes[CURRENT_SIZE_KEY]} cm`; 
}

function loadModelAssets(modelId) {
    const modelData = DB_MODELS[modelId];
    modelLibrary = {};
    const loader = new THREE.GLTFLoader(manager);
    const dracoLoader = new THREE.DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');
    loader.setDRACOLoader(dracoLoader);
    loader.setCrossOrigin('anonymous');
    
    const neededKeys = new Set();
    if (modelData.modules) {
        modelData.modules.forEach(modId => {
            const def = DB_MODULES.find(m => m.id === modId);
            if (def) neededKeys.add(def.fileKey);
        });
    } else {
        ['seat', 'arm', 'corner', 'chaise'].forEach(k => neededKeys.add(k));
    }

    const partsToLoad = Array.from(neededKeys);
    partsToLoad.forEach(part => {
        const folderName = modelData.folder;
        const path = `${GITHUB_REPO_URL}assets/models/${folderName}/${part}.glb`;
         loader.load(path, (gltf) => {
             const box = new THREE.Box3().setFromObject(gltf.scene);
             const size = new THREE.Vector3(); box.getSize(size);
             if (size.x < 20) { gltf.scene.scale.set(100, 100, 100); }
             gltf.scene.traverse(n => { if (n.isMesh) { n.castShadow = true; n.receiveShadow = true; } });
             modelLibrary[part] = gltf.scene;
         }, undefined, (err) => { console.warn(`Failed to load ${part} for ${modelId}`, err); });
    });
}

function createModuleMesh(moduleId) {
    const def = DB_MODULES.find(m => m.id === moduleId); 
    const modelData = DB_MODELS[CURRENT_MODEL_ID]; 
    const group = new THREE.Group();
    let width = 70; 
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
    if (def.type === 'corner') depth = modelData.cornerSize;
    
    const asset = modelLibrary[def.fileKey];
    if (asset) {
        const mesh = asset.clone();
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
        
        const finalBox = new THREE.Box3().setFromObject(mesh);
        const center = new THREE.Vector3(); finalBox.getCenter(center); 
        mesh.position.sub(center); 
        mesh.position.y += (finalBox.max.y - finalBox.min.y) / 2;
        if (CURRENT_MODEL_ID === 'kindia' && def.id === 'seat_no_arm') { mesh.position.y += 4; }
        group.add(mesh);
    } else {
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
     mesh.traverse((node) => { 
        if (node.isMesh) { 
            if (node.name.toLowerCase().includes('leg')) node.material = currentLegMaterial;
            else if (currentFabricMaterial && node.name !== 'shadow_plane') node.material = currentFabricMaterial;
        }
     });
     repositionModules();
}

function repositionModules() {
    let cornerIdx = -1; 
    for(let i=0; i<addedModules.length; i++) if(addedModules[i].data.type === 'corner') { cornerIdx = i; break; }
    let cornerPos = { x:0, z:0, depth: 0 }; 
    const modelData = DB_MODELS[CURRENT_MODEL_ID];
    let gapCorrection = -2;
    if (CURRENT_MODEL_ID === 'brittany') gapCorrection = -4;

    addedModules.forEach((mod, i) => {
        const mesh = mod.mesh;
        if(cornerIdx === -1 || i <= cornerIdx) {
            mod.isCornerLine = false; mesh.rotation.y = 0;
            if(i === 0) mesh.position.x = 0; 
            else { const prev = addedModules[i-1]; mesh.position.x = prev.mesh.position.x + (prev.width/2) + (mod.width/2) + gapCorrection; }
            mesh.position.z = ((mod.depth - modelData.depth) / 2); 
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
    updatePriceUI();
}

function updatePriceUI() {
     const sidebarEl = document.getElementById('sidebar-points');
     const summaryEl = document.getElementById('summary-points');
     let total = 0;
     let currentClass = 'bliss'; 
     addedModules.forEach(mod => {
        const modelPrices = DB_PRICES[CURRENT_MODEL_ID] || {};
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
    const modelData = DB_MODELS[CURRENT_MODEL_ID]; 
    DB_MODULES.forEach(def => { 
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
     const type = DB_MODELS[CURRENT_MODEL_ID].type;
     const container = document.getElementById('battery-container');
     if(container) {
         if (type === 'relax' || type === 'slide') container.classList.remove('hidden');
         else container.classList.add('hidden');
     }
}

function initFabricData() {
    FABRIC_LIBRARY = [];
    DB_COLLECTIONS.forEach(col => {
         const key = col.name.toLowerCase().replace(/\s/g, ''); 
         for(let i=0; i<7; i++) {
             FABRIC_LIBRARY.push({
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
        DB_COLLECTIONS.forEach(col => {
            const item = document.createElement('div');
            item.className = 'dock-item';
            const imgUrl = `https://stoffus-pt.github.io/configurador-eleganza/assets/compressedtextures/${col.name} 1.webp`;
            item.innerHTML = `<div class="dock-circle" style="background-image: url('${imgUrl}'); background-size: cover;"></div><span class="dock-label">${col.name}</span>`;
            item.onclick = () => renderFabricDock('colors', col.name.toLowerCase().replace(/\s/g, ''));
            list.appendChild(item);
        });
     } else {
         const fabrics = FABRIC_LIBRARY.filter(f => f.type === collectionKey);
         fabrics.forEach(fab => {
            const item = document.createElement('div');
            item.className = `dock-item ${fab.id === activeFabricId ? 'active' : ''}`;
            const imgUrl = `https://stoffus-pt.github.io/configurador-eleganza/assets/compressedtextures/${fab.collection} ${fab.fileIndex}.webp`;
            item.innerHTML = `<div class="dock-circle" style="background-image: url('${imgUrl}'); background-size: cover;"></div><span class="dock-label">${fab.name}</span>`;
            item.onclick = () => setFabricFromLibrary(fab.id);
            list.appendChild(item);
         });
     }
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
}

// --- INIT ---
window.onload = function() {
    setTimeout(() => { 
        const l = document.getElementById('app-loader');
        if(l) l.style.display='none'; 
    }, 3000);

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
};
    </script>
</body>
</html>
