// Passo 1

let alunos = [
    // {nome: 'David', qtdFaltas: random, notas: [random,random,random]},
    // {nome: 'Erik', qtdFaltas: random, notas: [random,random,random]},
    // {nome: 'Gabriel', qtdFaltas: random, notas: [random,random,random]},
    // {nome: 'Luis', qtdFaltas: random, notas: [random,random,random]},
    // {nome: 'Mahiny', qtdFaltas: random, notas: [random,random,random]},
    // {nome: 'Wagner', qtdFaltas: random, notas: [random,random,random]}
] 

function Aluno(nome, qtdFaltas, notas) {
    this.nome = nome
    this.qtdFaltas = qtdFaltas
    this.notas = notas
    
    this.calculaMedia = function() {
        let notasTotal = this.notas.reduce((prev, curr) => prev + curr )
        
         
        console.log(
            'Nome: '+ this.nome +
            '\nqtd de Faltas: ' + this.qtdFaltas +
            '\nnotas: ' + this.notas +
            '\nmedia: ' + parseInt(notasTotal / this.notas.length)  + '\n')
    }

}

    const David   =  new Aluno('David',   (Math.random() * 10) | 0, [(Math.random() * 10) | 0, (Math.random() * 10) | 0, (Math.random() * 10) | 0])
    const Erik    =  new Aluno('Erik',    (Math.random() * 10) | 0, [(Math.random() * 10) | 0, (Math.random() * 10) | 0, (Math.random() * 10) | 0])
    const Gabriel =  new Aluno('Gabriel', (Math.random() * 10) | 0, [(Math.random() * 10) | 0, (Math.random() * 10) | 0, (Math.random() * 10) | 0])
    const Luis    =  new Aluno('Luis',    (Math.random() * 10) | 0, [(Math.random() * 10) | 0, (Math.random() * 10) | 0, (Math.random() * 10) | 0])
    const Mahiny  =  new Aluno('Mahiny',  (Math.random() * 10) | 0, [(Math.random() * 10) | 0, (Math.random() * 10) | 0, (Math.random() * 10) | 0])
    const Wagner  =  new Aluno('Wagner',  (Math.random() * 10) | 0, [(Math.random() * 10) | 0, (Math.random() * 10) | 0, (Math.random() * 10) | 0])

    David.calculaMedia()
    Erik.calculaMedia()
    Gabriel.calculaMedia()
    Luis.calculaMedia()
    Mahiny.calculaMedia()
    Wagner.calculaMedia()

