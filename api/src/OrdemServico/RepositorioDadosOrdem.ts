import Conexao from "../conexao";
import RepositorioOrdem from "./Repositorio";
import OrdemServico from "./OrdemServico";
import Finalizacao from "./Finalizacao";

export default class RepositorioDadosOrdem implements RepositorioOrdem {
    constructor (readonly conexao: Conexao) {
    }
    
    async save (ordemServico: OrdemServico): Promise<void> {
        await this.conexao.query("insert into app.OrdemServico (id_pet, id_banhista, finalizacao, servicos, total, dia, horario, completo) values ($1, $2, $3, $4, $5, $6, $7)",
        [ordemServico.id_pet, ordemServico.id_banhista, ordemServico.finalizacoes, ordemServico.servicos, ordemServico.total, ordemServico.data, ordemServico.horario, ordemServico.completo]);
    }
    
    async get (id_ordem: number): Promise<OrdemServico> {
        const ordemServicoDados: OrdemServico = await this.conexao.one("select * from app.OrdemServico where id_ordem = $1", [id_ordem]);
        return ordemServicoDados;
    }
    
    async list_day (week: number, day: string): Promise<OrdemServico[]> {
        const today = new Date();
        const start_day = new Date();
        start_day.setDate(today.getDate() - today.getDay()); // Domingo da semana atual
        
        const scheduled_week = week - 1;
        
        const date = new Date();
        
        if (day === 'seg') {
            date.setDate(start_day.getDate() + scheduled_week * 7 + 1);
        } else if (day === 'ter') {
            date.setDate(start_day.getDate() + scheduled_week * 7 + 2);
        } else if (day === 'qua') {
            date.setDate(start_day.getDate() + scheduled_week * 7 + 3);
        } else if (day === 'qui') {
            date.setDate(start_day.getDate() + scheduled_week * 7 + 4);
        } else if (day === 'sex') {
            date.setDate(start_day.getDate() + scheduled_week * 7 + 5);
        } else if (day === 'sab') {
            date.setDate(start_day.getDate() + scheduled_week * 7 + 6);
        } else {
            throw new Error("Dia inválido.");
        }
        
        const ordensServicoDados: OrdemServico[] = await this.conexao.query("select * from app.OrdemServico where dia = $1", [date]);
        return ordensServicoDados;
    }

    async calcula_total (finalizacoes: number[], servicos: number[]): Promise<number> {
        const banho = 50;

        const preco_finalizacoes: number[] = [];
        const preco_servicos: number[] = [];

        for (const id of finalizacoes) {
            const preco = await this.conexao.query("select preco from app.Finalizacoes where id_finalizacao = $1", [id]);
            preco_finalizacoes.push(preco);
        }

        for (const id of servicos) {
            const preco = await this.conexao.query("select preco from app.ServicosUpselling where id_finalizacao = $1", [id]);
            preco_finalizacoes.push(preco);
        }

        const total_finalizacoes = preco_finalizacoes.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const total_servicos = preco_servicos.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const total = banho + total_finalizacoes + total_servicos;
        return total;
    }
    async finalizaServico(id_ordem: number): Promise<number> {
        const status = await this.conexao.query("update app.OrdemServico set completo = true where id_ordem = $1", [id_ordem]);

        return status
        
    }
}
