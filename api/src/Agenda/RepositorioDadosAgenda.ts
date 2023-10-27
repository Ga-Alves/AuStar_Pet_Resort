import Conexao from "../conexao";
import BanhistaAlocado from "./BanhistaAlocado";
import RepositorioAgenda from "./Repositorio";

export default class RepositorioDadosAgenda implements RepositorioAgenda {
    constructor(readonly conexao: Conexao) {
    }

    async save (banhistaAlocado: BanhistaAlocado): Promise<void> {
        await this.conexao.query("insert into app.Agenda (date, employeeID, horarios) values ($1, $2, $3)", [banhistaAlocado.date, banhistaAlocado.employeeID, banhistaAlocado.schedule]);
    }

    async add (week: number, day: string, employeeID: number): Promise<void> {
        const schedule: number[] = [0, 1, 2, 3, 4, 6, 7, 8, 9];
        const today = new Date();
        const start_day = new Date();
        start_day.setDate(today.getDate() - today.getDay()); // Domingo da semana atual
        
        const start_week = week - 1;

        const date = new Date();

        if (day === 'seg') {
            date.setDate(start_day.getDate() + start_week * 7 + 1);
        } else if (day === 'ter') {
            date.setDate(start_day.getDate() + start_week * 7 + 2);
        } else if (day === 'qua') {
            date.setDate(start_day.getDate() + start_week * 7 + 3);
        } else if (day === 'qui') {
            date.setDate(start_day.getDate() + start_week * 7 + 4);
        } else if (day === 'sex') {
            date.setDate(start_day.getDate() + start_week * 7 + 5);
        } else if (day == 'sab') {
            date.setDate(start_day.getDate() + start_week * 7 + 6);
        } else {
            throw new Error("Dia inválido.");
        }

        await this.conexao.query("insert into app.Agenda (dia, id_banhista, horarios) values ($1, $2, $3)", [date, employeeID, schedule]);
    }

    async get (week: number, day: string): Promise<BanhistaAlocado[]> {
        const today = new Date();
        const start_day = new Date();
        start_day.setDate(today.getDate() - today.getDay()); // Domingo da semana atual
        
        const start_week = week - 1;

        const date = new Date();

        if (day === 'seg') {
            date.setDate(start_day.getDate() + start_week * 7 + 1);
        } else if (day === 'ter') {
            date.setDate(start_day.getDate() + start_week * 7 + 2);
        } else if (day === 'qua') {
            date.setDate(start_day.getDate() + start_week * 7 + 3);
        } else if (day === 'qui') {
            date.setDate(start_day.getDate() + start_week * 7 + 4);
        } else if (day === 'sex') {
            date.setDate(start_day.getDate() + start_week * 7 + 5);
        } else if (day == 'sab') {
            date.setDate(start_day.getDate() + start_week * 7 + 6);
        } else {
            throw new Error("Dia inválido.");
        }
        
        const banhistaAlocadoDados = await this.conexao.query("select * from app.Agenda where dia = $1", [date]);
        return banhistaAlocadoDados;
    }
    
    async schedule (date: Date, employeeID: number, scheduledIndex: number, size: string) {
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

        const banhistaAlocadoDados = await this.conexao.query("select * from app.Agenda where dia = $1 and id_banhista = $2", [date, employeeID]);
        const newSchedule: number[] = banhistaAlocadoDados.schedule.filter((t: number) => !scheduled.includes(t));
        await this.conexao.query("delete from app.Agenda where id_entrada = $1", [banhistaAlocadoDados.entryID]);
        await this.conexao.query("insert into app.Agenda (dia, id_banhista, horarios) values ($1, $2, $3)", [banhistaAlocadoDados.date, employeeID, newSchedule]);
    }
    horaStrToIndex(horario: string): number{
        let horaIndex: number = -1;

        if(horario =='8:00'){
            horaIndex = 0
        }
        if(horario =='8:50'){
            horaIndex = 1
        }
        if(horario =='9:40'){
            horaIndex = 2
        }
        if(horario =='10:30'){
            horaIndex = 3
        }
        if(horario =='13:10'){
            horaIndex = 4
        }
        if(horario =='14:00'){
            horaIndex = 5
        }
        if(horario =='14:50'){
            horaIndex = 6
        }
        if(horario =='15:40'){
            horaIndex = 7
        }
        return horaIndex
    }
}
