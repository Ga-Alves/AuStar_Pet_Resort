import OrdemServico from "./OrdemServico";

export default interface RepositorioOrdem {
    save (ordemServico: OrdemServico): Promise<void>;
    get (id: number): Promise<OrdemServico>;
    list_day (week: number, day: string): Promise<OrdemServico[]>;
    calcula_total (finalizacoes: number[], servicos: number[]): Promise<number>;
}
