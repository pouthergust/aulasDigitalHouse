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
    
    // passo 2
    this.calculaMedia = function() {
        let notasTotal = this.notas.reduce((prev, curr) => prev + curr )

        console.log(
            'Nome: '+ this.nome +
            '\nqtd de Faltas: ' + this.qtdFaltas +
            '\nnotas: ' + this.notas +
            '\nmedia: ' + parseInt(notasTotal / this.notas.length)  + '\n'
        )
    }

    this.faltas = function() {
        return this.qtdFaltas++
    }
}

const David   =  new Aluno('David',   (Math.random() * 10) | 0, [(Math.random() * 10) | 0, (Math.random() * 10) | 0, (Math.random() * 10) | 0])
const Erik    =  new Aluno('Erik',    (Math.random() * 10) | 0, [(Math.random() * 10) | 0, (Math.random() * 10) | 0, (Math.random() * 10) | 0])
const Gabriel =  new Aluno('Gabriel', (Math.random() * 10) | 0, [(Math.random() * 10) | 0, (Math.random() * 10) | 0, (Math.random() * 10) | 0])
const Luis    =  new Aluno('Luis',    (Math.random() * 10) | 0, [(Math.random() * 10) | 0, (Math.random() * 10) | 0, (Math.random() * 10) | 0])
const Mahiny  =  new Aluno('Mahiny',  (Math.random() * 10) | 0, [(Math.random() * 10) | 0, (Math.random() * 10) | 0, (Math.random() * 10) | 0])
const Wagner  =  new Aluno('Wagner',  (Math.random() * 10) | 0, [(Math.random() * 10) | 0, (Math.random() * 10) | 0, (Math.random() * 10) | 0])

// passo 3
let curso = {
    nome: 'JavaScript',
    faltasMax: 5,
    notaAprovacao: 4,
    listaEstudantes: [
        David, Erik, Gabriel,
        Luis, Mahiny, Wagner
    ],
    novoAluno: function() {
        this.listaEstudantes.push(new Aluno('João', 7, [7,5,3]))
    },
    aprovado: function(aluno) {
        let faltas = aluno.qtdFaltas
        let notas = aluno.notas
        let media = parseInt(notas.reduce((prev, curr) => prev + curr ) / notas.length)
    }
}

David.calculaMedia()
Erik.calculaMedia()
Gabriel.calculaMedia()
Luis.calculaMedia()
Mahiny.calculaMedia()
Wagner.calculaMedia()

