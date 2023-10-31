import ServicoOferecido from "./ServicoOferecido";
import Dicas from "./Dicas";

export default interface RepositorioServicos{  //contrato repositorio 
    get(id_dog : number): Promise<[ServicoOferecido, Dicas]>;
}
