import Conexao from "../conexao";
import OrdemServico from "./OrdemServico";
import RepositorioOrdem from "./Repositorio";

export default class RepositorioDadosOrdem implements RepositorioOrdem {
    constructor (readonly conexao: Conexao) {
    }
    
    async save (ordemServico: OrdemServico): Promise<void> {
        await this.conexao.query("insert into app.OrdemServico (title, services, responsible, total, week, day, time, completed) values ($1, $2, $3, $4, $5, $6, $7, $8)",
        [ordemServico.title, ordemServico.services, ordemServico.responsible, ordemServico.total, ordemServico.week, ordemServico.day, ordemServico.time, ordemServico.completed]);
    }
    
    async get (id_ordem: number): Promise<OrdemServico> {
        const ordemServicoDados: OrdemServico = await this.conexao.one("select * from app.OrdemServico where id_ordem = $1", [id_ordem]);
        return ordemServicoDados;
    }

    async list_day (week: number, day: string): Promise<OrdemServico[]> {
        const ordensServicoDados: OrdemServico[] = await this.conexao.query("select * from app.OrdemServico where week = $1 and day = $2", [week, day]);
        return ordensServicoDados;
    }
}
