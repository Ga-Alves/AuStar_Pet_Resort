import Conexao from "../conexao";
import OrdemServico from "./OrdemServico";
import RepositorioOrdem from "./Repositorio";

export default class RepositorioDadosOrdem implements RepositorioOrdem {
    constructor (readonly conexao: Conexao) {
    }
    
    async save (ordemServico: OrdemServico): Promise<void> {
        await this.conexao.query("insert into app.OrdemServico (id_pet, id_banhista, servicos, total, dia, horario, completo) values ($1, $2, $3, $4, $5, $6, $7)",
        [ordemServico.petID, ordemServico.employeeID, ordemServico.services, ordemServico.total, ordemServico.date, ordemServico.time, ordemServico.completed]);
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
}
