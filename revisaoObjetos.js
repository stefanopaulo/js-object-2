const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}

// console.log(pessoa.nome)
// console.log(pessoa['sobrenome'])

pessoa.idade = 30
pessoa.falarNome = function() {
    return `${this.nome} está falando seu nome.`
} 
pessoa.getDataNascimento = function() {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}

console.log(pessoa.getDataNascimento())

for (let chave in pessoa) {
    console.log(pessoa[chave])
}

function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return this.nome + ' ' + this.sobrenome
        }
    }
}

const p1 = criaPessoa('Maria', 'Silva')
console.log(p1.nomeCompleto)

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome
}

const p2 = new Pessoa('João', 'Pedro')
console.log(p2.nomeCompleto())
console.log(p2)
