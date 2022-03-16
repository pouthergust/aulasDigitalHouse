let menu = ['pipoca', 'macarrão', 'carne', 'feijão', 'brigadeiro']
let preparos = [
    { comida: 'pipoca'    , tempoPadrao: 10, tempoConfigurado: 10 },
    { comida: 'macarrão'  , tempoPadrao: 8 , tempoConfigurado: 12 },
    { comida: 'carne'     , tempoPadrao: 15, tempoConfigurado: 30 },
    { comida: 'miojo'     , tempoPadrao: 5 , tempoConfigurado: 10 },
    { comida: 'feijão'    , tempoPadrao: 12, tempoConfigurado: 12 },
    { comida: 'brigadeiro', tempoPadrao: 8 , tempoConfigurado: 5 },
]

function config() {    
    for(let modoPreparo of preparos) {
        let { comida, tempoPadrao, tempoConfigurado } = modoPreparo

        menu.find(prato => prato == comida)
        ? console.log(`${comida}: `, microondas(tempoPadrao, tempoConfigurado))
        : console.log(`${comida}: Prato inexistente`)
    }
}

function microondas(tempoPadrao, tempo) {
    if (tempo >= tempoPadrao * 3) return 'kabumm'
    if (tempo >= tempoPadrao * 2) return 'A comida queimou'
    if (tempo < tempoPadrao) return 'tempo insuficiente'
    return 'Prato pronto, bom apetite!!!'
}

config()