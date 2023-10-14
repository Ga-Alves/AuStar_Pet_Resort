import ServicoOferecido from "./servicoOferecido";

export default interface RepositorioServicos{  //contrato repositorio 
    get(id_dog : string): Promise<ServicoOferecido>;
}
