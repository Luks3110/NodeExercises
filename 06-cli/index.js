const Commander = require('commander');
const Database = require('./database')
const Heroi = require('./heroi')

async function main(){
    Commander
        .version('v1')
        .option('-n, --nome [value', "Nome do herói")
        .option('-p, --poder [value]', "Poder do herói")

        .option('-c, --cadastrar', "Cadastrar um herói")
        .parse(process.argv)
    
    const heroi = new Heroi(Commander)

        try {
            if(Commander.cadastrar){
                console.log(heroi.id)
                // const resultado = await Database.cadastrar(Commander)
            }
        } catch (error) {
            console.error('Deu ruim', error)
        }
}

main()