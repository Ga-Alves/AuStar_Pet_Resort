import Conexao from "../conexao";
import ServicoOferecido from "./servicoOferecido";
import Dicas from "./dicas";
import RepositorioServicos from "./Repositorio";

export default class RepositorioDadosServicos implements RepositorioServicos{

    constructor(readonly conexao: Conexao){
    }

    async get (id_dog: number): Promise<[ServicoOferecido, Dicas]> {
        const pet = await this.conexao.one("select raca, cor from app.pet where pet.id_pet = $1 ",
        [id_dog]); 
    
        var dadosServicosUpselling = await this.conexao.query("select nome, preco, id_upselling from app.servicosupselling where raca = 'Todos' and cor = 'Todos'", 0); 
        const dadosServicoDicas = await this.conexao.query("select dica from app.servicosupselling where raca = 'Todos' and cor = 'Todos'", 0); 

        if(pet.cor == 'Branco'){ 
            const servico1 = {nome: 'Banho Clareador',preco: 10, id_upselling: 2}
            const dica1 = {dica: 'Para seu dog deixar de ser amarelado, devolvemos o branco ao pelo'}
            dadosServicosUpselling.push(servico1)
            dadosServicoDicas.push(dica1)
        }
        if(pet.cor == 'Branco' || pet.cor == 'Preto' || pet.cor == 'Preto e Branco'){
            const servico2 = {nome:'Banho tonalizante',preco: 25, id_upselling: 6}
            const dica2 = {dica: 'Pro seu dog deixar de ser desbotado'}
            dadosServicosUpselling.push(servico2)
            dadosServicoDicas.push(dica2)
        }
        if(pet.raca != 'Spitz' && pet.raca != 'Jack Russel' ){
            const servico3 = {nome: 'Hidratação', preco: 20, id_upselling: 3}
            const servico4 = {nome: 'Queratinização', preco: 25, id_upselling: 4}
            dadosServicosUpselling.push(servico3)
            dadosServicosUpselling.push(servico4)
            const dica3 = {dica: 'Para seu dog ficar com o pelo macio e brilhante de arrasar'}
            const dica4 = {dica: 'Para seu dog ficar com o pelo resistente, à prova de balas'}
            dadosServicoDicas.push(dica3)
            dadosServicoDicas.push(dica4)
        }
        if(pet.raca != 'Poodle' && pet.raca != 'spitz' ){
            const servico5 = {nome: 'Banho Volumizante', preco: 25, id_upselling: 5}
            dadosServicosUpselling.push(servico5)
            const dica5 = {dica: 'Por ser uma raça de pelo volumoso seu dog ficará mais charmoso(a) com nosso banho volumezante.'}
            dadosServicoDicas.push(dica5)
        }

        const dicas = new Dicas(dadosServicoDicas);
        console.log(dicas)
/*
Consertar dps
Banho Xtreme $10 - Todas as raças muito sujas
*/
		return [dadosServicosUpselling, dicas];
    }
} 