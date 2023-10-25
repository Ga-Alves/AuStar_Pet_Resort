import Conexao from "../conexao";
import BanhistaAlocado from "./BanhistaAlocado";
import RepositorioAgenda from "./Repositorio";

export default class RepositorioDadosAgenda implements RepositorioAgenda {
    constructor(readonly conexao: Conexao) {
    }

    async save (banhistaAlocado: BanhistaAlocado): Promise<void> {
        await this.conexao.query("insert into app.Agenda (date, week, day, employeeID, horarios) values ($1, $2, $3, $4, $5)", [banhistaAlocado.date, banhistaAlocado.week, banhistaAlocado.day, banhistaAlocado.employeeID, banhistaAlocado.schedule]);
    }

    async add (week: number, day: string, employeeID: number): Promise<void> {
        const schedule: number[] = [0, 1, 2, 3, 4, 6, 7, 8, 9];
        const date = new Date();
        await this.conexao.query("insert into app.Agenda (date, week, day, employeeID, horarios) values ($1, $2, $3, $4, $5)", [date, week, day, employeeID, schedule]);
    }

    async get (week: number, day: string): Promise<BanhistaAlocado[]> {
        const banhistaAlocadoDados = await this.conexao.query("select * from app.Agenda where week = $1 and day = $2", [week, day]);
        return banhistaAlocadoDados;
    }
    
    async schedule (week: number, day: string, employeeID: number, scheduledIndex: number, size: string) {
        let scheduledTime: number;
        if (scheduledIndex < 5) {
            scheduledTime = scheduledIndex
        } else {
            scheduledTime = scheduledIndex + 1
        }

        const scheduled: number[] = []
        scheduled.push(scheduledTime);
        
        if (size === "G" || size === "XL") {
            scheduled.push(scheduledTime + 1)
        }

        const banhistaAlocadoDados = await this.conexao.query("select * from app.Agenda where week = $1 and day = $2 and employeeID = $3", [week, day, employeeID]);
        const newSchedule: number[] = banhistaAlocadoDados.schedule.filter((t: number) => !scheduled.includes(t));
        await this.conexao.query("delete from app.Agenda where entryId = $1", [banhistaAlocadoDados.entryID]);
        await this.conexao.query("insert into app.Agenda (week, day, employeeID, schedule) values ($1, $2, $3)", [banhistaAlocadoDados.week, banhistaAlocadoDados.day, employeeID, newSchedule]);
    }
}
