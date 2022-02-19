const { get } = require('axios')

async function obterPessoas(nome) {
    const urlBase = `https://swapi.dev/api/people`
    
    const url = `${urlBase}/?search=${nome}&format=json`
    const result = await get(url)
    return result.data.results.map(mapearPessoas)
}

function mapearPessoas(item){
    return{
        nome: item.name,
        peso: item.height
    }
}

module.exports = {
    obterPessoas
}