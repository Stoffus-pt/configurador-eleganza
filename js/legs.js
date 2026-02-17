// Base de Dados de Regras e Códigos de Pés
// Carregado externamente pelo Configurador Stoffus

const MODEL_LEG_RULES_EXTERNAL = {
    'athena': ['black_matte', 'chrome', 'moka'],
    'bartini': ['black_matte', 'chrome', 'moka'],
    'brittany': ['black_matte'],
    'bruma': ['wenge', 'cherry', 'natural', 'lacquered'],
    'corsi': ['chrome', 'black_matte'],
    'dayma': ['black_matte'],
    'enzo': ['black_matte'],
    'fienza': ['black_matte', 'chrome', 'moka'],
    'fiori': ['black_matte'],
    'infinity': ['black_matte', 'black_shine', 'chrome', 'moka', 'gold'],
    'kaori': ['moka', 'black_matte', 'black_shine', 'chrome', 'gold'],
    'kindia': ['cherry', 'wenge', 'natural', 'lacquered'],
    'sting': ['black_matte', 'black_shine', 'chrome', 'moka', 'gold'],
    'magic': ['black_matte'],
    'moretti': ['moka', 'black_matte', 'black_shine'],
    'polestar': [], 
    'rinaldi': ['moka', 'black_matte', 'black_shine'],
    'rose': ['moka', 'black_matte', 'black_shine'],
    'spirit': ['moka', 'black_matte', 'black_shine'],
    'default': ['black_matte', 'black_shine', 'chrome', 'moka', 'gold']
};

const LEG_PRODUCT_CODES_EXTERNAL = {
    'athena': { 'black_matte': 'Pé C.510.5 - Preto Matte', 'chrome': 'Pé C.510.7 - Cromo', 'moka': 'Pé C.510.8 - Moka' },
    'bartini': { 'black_matte': 'Pé C.510.5 - Preto Matte', 'chrome': 'Pé C.510.7 - Cromo', 'moka': 'Pé C.510.8 - Moka' },
    'brittany': { 'black_matte': 'Pé C.525.5 - Preto Matte' },
    'bruma': { 'wenge': 'Pé C.115.1 - Wangué', 'cherry': 'Pé C.115.2 - Cerejeira', 'natural': 'Pé C.115.3 - Natural', 'lacquered': 'Pé C.115.4 - Lacado' },
    'corsi': { 'chrome': 'Pé C.550.7 - Cromo', 'black_matte': 'Pé C.550.5 - Negro Matte' },
    'dayma': { 'black_matte': 'Pé C.525.5 - Preto Matte' },
    'enzo': { 'black_matte': 'Pé C.525.5 - Preto Matte' },
    'fienza': { 'black_matte': 'Pé C.510.5 - Preto Matte', 'chrome': 'Pé C.510.7 - Cromo', 'moka': 'Pé C.510.8 - Moka' },
    'fiori': { 'black_matte': 'Pé C.525.5 - Preto Matte' },
    'infinity': { 'black_matte': 'Pé C.500.5 - Preto Matte', 'black_shine': 'Pé C.500.6 - Preto Brilho', 'chrome': 'Pé C.500.7 - Cromo', 'moka': 'Pé C.500.8 - Moka', 'gold': 'Pé C.500.9 - Dourado' },
    'kaori': { 'black_matte': 'Pé C.515.5 - Preto Matte', 'black_shine': 'Pé C.515.6 - Preto Brilho', 'chrome': 'Pé C.515.7 - Cromo', 'moka': 'Pé C.515.8 - Moka', 'gold': 'Pé C.515.9 - Dourado' },
    'kindia': { 'cherry': 'Pé C.110.2 - Cerejeira', 'wenge': 'Pé C.110.1 - Wangué', 'natural': 'Pé C.110.3 - Natural', 'lacquered': 'Pé C.110.4 - Lacado (Indicar Pantone)' },
    'sting': { 'black_matte': 'Pé C.505.5 - Preto Matte', 'black_shine': 'Pé C.505.6 - Preto Brilho', 'chrome': 'Pé C.505.7 - Cromo', 'moka': 'Pé C.505.8 - Moka', 'gold': 'Pé C.505.9 - Dourado' },
    'magic': { 'black_matte': 'Pé C.525.5 - Preto Matte' },
    'moretti': { 'moka': 'Pé C.515.8 - Moka', 'black_matte': 'Pé C.515.5 - Preto Matte', 'black_shine': 'Pé C.515.6 - Preto Brilho' },
    'rinaldi': { 'moka': 'Pé C.515.8 - Moka', 'black_matte': 'Pé C.515.5 - Preto Matte', 'black_shine': 'Pé C.515.6 - Preto Brilho' },
    'rose': { 'moka': 'Pé C.515.8 - Moka', 'black_matte': 'Pé C.515.5 - Preto Matte', 'black_shine': 'Pé C.515.6 - Preto Brilho' },
    'spirit': { 'moka': 'Pé C.515.8 - Moka', 'black_matte': 'Pé C.515.5 - Preto Matte', 'black_shine': 'Pé C.515.6 - Preto Brilho' },
    'polestar': {},
    'default': { 'black_matte': 'Pé Padrão', 'black_shine': 'Pé Brilho', 'chrome': 'Pé Cromo', 'moka': 'Pé Moka', 'gold': 'Pé Dourado' }
};