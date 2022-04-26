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
        let aluno = {}
        let notasTotal = this.notas.reduce((prev, curr) => prev + curr )

        aluno.nome = this.nome
        aluno.media = (notasTotal / this.notas.length) | 0
        aluno.faltas = this.qtdFaltas
        aluno.notas = this.notas

        return aluno
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
    faltasMax: 3,
    notaAprovacao: 4,
    listaEstudantes: [
        David, Erik, Gabriel,
        Luis, Mahiny, Wagner
    ],
    // Passo 4
    novoAluno: function() {
        this.listaEstudantes.push(new Aluno('João', 7, [7,5,3]))
    },
    // Passo 5
    aprovado: function(aluno) {
        let faltas = aluno.qtdFaltas
        let notas = aluno.notas
        let media = parseInt(notas.reduce((prev, curr) => prev + curr) / notas.length)

        if (
            faltas <= this.faltasMax &&
            media  >= this.notaAprovacao
        ) {
            return true
        }
        return false
    },
    verificaAprovacao: function() {
        this.listaEstudantes.forEach(aluno => {
            if (this.aprovado(aluno)) {
                aluno.aprovado = true
            } else {
                aluno.aprovado = false
            }
        })
        console.table(this.listaEstudantes, ['nome', 'aprovado'])
    }
}

console.table([
    David.calculaMedia(),
    Erik.calculaMedia(),
    Gabriel.calculaMedia(),
    Luis.calculaMedia(),
    Mahiny.calculaMedia(),
    Wagner.calculaMedia()
], ['nome', 'notas', 'media', 'faltas'])

curso.verificaAprovacao()
