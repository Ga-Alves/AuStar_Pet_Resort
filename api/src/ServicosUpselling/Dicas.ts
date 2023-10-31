export default class Dicas{
    constructor (readonly dica: any[]){
        }

    getRandom(){
        var keys = Object.keys(this.dica).length;
        return this.dica[Math.floor(Math.random() * (keys))];
    }   
}   
