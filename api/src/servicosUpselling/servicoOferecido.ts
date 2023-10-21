export default class servicoOferecido{
    tip: any[];
    upSelling?: any[];
    constructor (readonly servicoUpselling : any[], readonly tips: any[]){
        }

    getRandom(tips: any[]){
        this.tip = tips[Math.floor(Math.random() * tips.length)]
    }
    
    // colocar funcoes relacionadas a operacoes/regras de negocio aqui
}

