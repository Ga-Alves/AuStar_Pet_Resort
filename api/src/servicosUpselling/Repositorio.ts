import ServicoOferecido from "./servicoOferecido";
import Dicas from "./dicas";


export default interface RepositorioServicos{  //contrato repositorio 
    get(id_dog : string): Promise<[ServicoOferecido, Dicas]>;
}
