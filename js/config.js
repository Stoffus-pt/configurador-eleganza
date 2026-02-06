const REPO_URL_BASE = 'https://stoffus-pt.github.io/configurador-eleganza/';

const DB_MODULES_EXTERNAL = [
    { id: 'seat_no_arm', name: 'Centro', icon: 'fa-couch', imgUrl: `${REPO_URL_BASE}assets/icons/seatrelax.svg`, type: 'seat', fileKey: 'seat', hasArm: false },
    { id: '2seats_no_arm', name: '2 Costas', icon: 'fa-couch', imgUrl: `${REPO_URL_BASE}assets/icons/2backs.svg`, type: 'seat', fileKey: '2seats', hasArm: false },
    { id: 'seat_arm_l', name: 'Braço Esq.', icon: 'fa-cube', imgUrl: `${REPO_URL_BASE}assets/icons/arm.svg`, type: 'seat', fileKey: 'arm', hasArm: 'left' },
    { id: 'seat_arm_r', name: 'Braço Dir.', icon: 'fa-cube', imgUrl: `${REPO_URL_BASE}assets/icons/arm.svg`, type: 'seat', fileKey: 'arm', hasArm: 'right' },
    { id: '2seats_2arms', name: '2 Lug. 2 Braços', icon: 'fa-couch', imgUrl: `${REPO_URL_BASE}assets/icons/2arm2seats.svg`, type: 'seat', fileKey: '2arm2seats', hasArm: 'both' },
    { id: '2seats_arm_l', name: '2 Lug. Braço Esq.', icon: 'fa-couch', imgUrl: `${REPO_URL_BASE}assets/icons/arm2seats.svg`, type: 'seat', fileKey: 'arm2seats', hasArm: 'left' },
    { id: '2seats_arm_r', name: '2 Lug. Braço Dir.', icon: 'fa-couch', imgUrl: `${REPO_URL_BASE}assets/icons/arm2seats.svg`, type: 'seat', fileKey: 'arm2seats', hasArm: 'right' },
    { id: 'corner', name: 'Canto', icon: 'fa-border-all', imgUrl: `${REPO_URL_BASE}assets/icons/corner.svg`, type: 'corner', fileKey: 'corner', hasArm: false, fixed: true },
    { id: 'chaise_l', name: 'Chaise Esq.', icon: 'fa-l', imgUrl: `${REPO_URL_BASE}assets/icons/chaise.svg`, type: 'chaise', fileKey: 'chaise', hasArm: 'left' },
    { id: 'chaise_r', name: 'Chaise Dir.', icon: 'fa-l', imgUrl: `${REPO_URL_BASE}assets/icons/chaise.svg`, type: 'chaise', fileKey: 'chaise', hasArm: 'right' },
    { id: 'meridien_l', name: 'Meridien Esq.', icon: 'fa-layer-group', imgUrl: `${REPO_URL_BASE}assets/icons/meridien.svg`, type: 'meridien', fileKey: 'meridien', hasArm: 'left' },
    { id: 'meridien_r', name: 'Meridien Dir.', icon: 'fa-layer-group', imgUrl: `${REPO_URL_BASE}assets/icons/meridien.svg`, type: 'meridien', fileKey: 'meridien', hasArm: 'right' },
    { id: 'meiple', name: '1 Lug. 2 Braços', icon: 'fa-chair', imgUrl: `${REPO_URL_BASE}assets/icons/meiple.svg`, type: 'standalone', fileKey: 'meiple', hasArm: 'both' },
    { id: 'pouff', name: 'Pouff Quadrado', icon: 'fa-vector-square', imgUrl: `${REPO_URL_BASE}assets/icons/pouff.svg`, type: 'standalone', fileKey: 'pouff', hasArm: false, fixed: true },
    { id: 'triangle', name: 'Triângulo', icon: 'fa-play', imgUrl: `${REPO_URL_BASE}assets/icons/triangle.svg`, type: 'corner', fileKey: 'triangle', hasArm: false, fixed: true },
    { id: 'maxxi_l', name: 'Maxxi Esq.', icon: 'fa-vector-square', imgUrl: `${REPO_URL_BASE}assets/icons/chaise.svg`, type: 'chaise', fileKey: 'maxxi', hasArm: 'left' },
    { id: 'maxxi_r', name: 'Maxxi Dir.', icon: 'fa-vector-square', imgUrl: `${REPO_URL_BASE}assets/icons/chaise.svg`, type: 'chaise', fileKey: 'maxxi', hasArm: 'right' },
    // Módulos RINALDI
    { id: 'rinaldi_seat_l', name: 'Assento L', icon: 'fa-couch', imgUrl: `${REPO_URL_BASE}assets/icons/seatrelax.svg`, type: 'seat', fileKey: 'seatL', hasArm: false, fixedWidth: 83 },
    { id: 'rinaldi_seat_xl', name: 'Assento XL', icon: 'fa-couch', imgUrl: `${REPO_URL_BASE}assets/icons/seatrelax.svg`, type: 'seat', fileKey: 'seatXL', hasArm: false, fixedWidth: 119 },
    { id: 'rinaldi_arm_l_l', name: 'Braço L Esq.', icon: 'fa-cube', imgUrl: `${REPO_URL_BASE}assets/icons/armrelax.svg`, type: 'seat', fileKey: 'armL', hasArm: 'left', fixedWidth: 83 },
    { id: 'rinaldi_arm_l_r', name: 'Braço L Dir.', icon: 'fa-cube', imgUrl: `${REPO_URL_BASE}assets/icons/armrelax.svg`, type: 'seat', fileKey: 'armL', hasArm: 'right', fixedWidth: 83 },
    { id: 'rinaldi_arm_xl_l', name: 'Braço XL Esq.', icon: 'fa-cube', imgUrl: `${REPO_URL_BASE}assets/icons/armrelax.svg`, type: 'seat', fileKey: 'armXL', hasArm: 'left', fixedWidth: 119 },
    { id: 'rinaldi_arm_xl_r', name: 'Braço XL Dir.', icon: 'fa-cube', imgUrl: `${REPO_URL_BASE}assets/icons/armrelax.svg`, type: 'seat', fileKey: 'armXL', hasArm: 'right', fixedWidth: 119 },
    { id: 'rinaldi_corner', name: 'Canto', icon: 'fa-border-all', imgUrl: `${REPO_URL_BASE}assets/icons/corner.svg`, type: 'corner', fileKey: 'corner', hasArm: false, fixed: true },
    { id: 'rinaldi_pouff', name: 'Pouff', icon: 'fa-vector-square', imgUrl: `${REPO_URL_BASE}assets/icons/pouff.svg`, type: 'standalone', fileKey: 'pouff', hasArm: false, fixed: true }
];

const DB_COLLECTIONS_EXTERNAL = [ 
    { name: 'Artis', prefix: 'D', start: 4001, end: 4007 }, { name: 'Barbados', prefix: 'F', start: 4001, end: 4007 }, { name: 'Bella', prefix: 'B', start: 1057, end: 1063 }, { name: 'Carmen', prefix: 'B', start: 1127, end: 1133 }, { name: 'Falcon', prefix: 'B', start: 4092, end: 4098 }, { name: 'Funky', prefix: 'B', start: 4106, end: 4112 }, { name: 'Garby', prefix: 'B', start: 4078, end: 4084 }, { name: 'Grift', prefix: 'B', start: 4008, end: 4014 }, { name: 'Jade', prefix: 'B', start: 1145, end: 1151 }, { name: 'Kamala', prefix: 'B', start: 4071, end: 4077 }, { name: 'Kamala2', prefix: 'B', start: 1138, end: 1144 }, { name: 'Karma', prefix: 'B', start: 4043, end: 4049 }, { name: 'Matchy', prefix: 'B', start: 4085, end: 4091 }, { name: 'Mirage', prefix: 'B', start: 4099, end: 4105 }, { name: 'Pisa', prefix: 'B', start: 1113, end: 1119 }, { name: 'Prisma', prefix: 'B', start: 4022, end: 4028 }, { name: 'Ramses', prefix: 'B', start: 1015, end: 1021 }, { name: 'Rissani', prefix: 'B', start: 4057, end: 4063 }, { name: 'Soft', prefix: 'B', start: 4015, end: 4021 }, { name: 'Stancy', prefix: 'B', start: 4029, end: 4035 }, { name: 'Talia', prefix: 'B', start: 1043, end: 1049 }, { name: 'Touareg', prefix: 'B', start: 1106, end: 1112 }, { name: 'Venturi', prefix: 'B', start: 4050, end: 4056 }, { name: 'Zemy', prefix: 'B', start: 4001, end: 4007 },
    { name: 'Fumiko', prefix: 'D', start: 1001, end: 1007 }, { name: 'Madoka', prefix: 'D', start: 4008, end: 4014 },
    { name: 'River', prefix: 'E', start: 1001, end: 1007 }, { name: 'Siza', prefix: 'P', start: 1001, end: 1007 }
];