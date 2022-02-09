const { obterPessoas } = require('./service')

/*
const item = 
    {
        name: 'Lucas',
        idade: 13
    }

const { nome } = item
console.log(nome, idade)
*/
Array.prototype.meuFilter = function(callback){
    const lista = []
    for(index in this){
        const item = this[index]
        const result = callback(item, index, this)
        // 0, '', null, undefined = false
        if(!result) continue;
        lista.push(item)
    }
    return lista;
}


async function main(){
    try {
        // por padrão precisa retornar um boolean
        // para informar se deve manter ou remover da lista
        // false > remove da lista
        // true > mantem
        // não encontrou = -1
        // encontrou = posiciona no array
        
        const { results } = await obterPessoas('a')
        // const familiaLars = results.filter(item => {
        //     const result = item.name.toLowerCase().indexOf('lars') !== -1
        //     return result
        // })
        // const names = familiaLars.map((pessoa) => pessoa.name)
        // console.log(`nomes: ${names}`)
        const familiaLars = results.meuFilter((item, index, lista) => {
            console.log(`index: ${index} ${lista.length}`)
            return item.name.toLowerCase().indexOf('lars') !== -1
        })
        const names = familiaLars.map((pessoa) => pessoa.name)        
        console.log(`nomes: ${names}`)
    } catch (error) {
        console.error('DEU RUIM', error)
    }
}

main()