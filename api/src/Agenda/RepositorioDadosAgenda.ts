import Conexao from "../Conexao";
import BanhistaAlocado from "./BanhistaAlocado";
import RepositorioAgenda from "./Repositorio";

export default class RepositorioDadosAgenda implements RepositorioAgenda {
    constructor(readonly conexao: Conexao) {
    }

    async save (banhistaAlocado: BanhistaAlocado): Promise<void> {
        await this.conexao.query("insert into app.Agenda (id_banhista, nome, dia, horarios) values ($1, $2, $3, $4)", [banhistaAlocado.id_banhista, banhistaAlocado.nome, banhistaAlocado.dia, banhistaAlocado.horarios]);
    }

    async add (week: number, day: string, id_banhista: number): Promise<void> {
        const schedule: number[] = [0, 1, 2, 3, 4, 6, 7, 8, 9];
        const date = await this.get_date_from_week_day(week, day);
        const employee = await this.conexao.one("select nome from app.Banhista where id_banhista = $1", [id_banhista]);
        const name: string = employee.nome;
        await this.conexao.query("insert into app.Agenda (id_banhista, nome, dia, horarios) values ($1, $2, $3, $4)", [id_banhista, name, date, schedule]);
    }
    
    async get (week: number, day: string): Promise<BanhistaAlocado[]> {        
        const date = await this.get_date_from_week_day(week, day);
        const banhistaAlocadoDados = await this.conexao.query("select * from app.Agenda where dia = $1", [date]);
        return banhistaAlocadoDados;
    }
    
    async get_name (employeeID: number): Promise<string> {
        const employee = await this.conexao.query("select * from app.Banhista where id_banhista = $1", [employeeID]);
        const name = employee.nome;
        return name;
    }
    
    async get_date_from_week_day (week: number, day: string): Promise<Date> {
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
        return date;
    }

    async get_week_day_from_date (date: string): Promise<WeekDay> {
        const dataString = date;
        const partesData = dataString.split("/");
        const day_month = parseInt(partesData[0], 10);
        const month = parseInt(partesData[1], 10) - 1; // Lembre-se de que os meses em JavaScript são baseados em zero (0 a 11)
        const year = parseInt(partesData[2], 10);
        const scheduled_date = new Date(year, month, day_month);
        
        const today = new Date();
        const start_day = new Date();
        start_day.setDate(today.getDate() - today.getDay()); // Domingo da semana atual

        const diff = scheduled_date.getTime() - start_day.getTime();
        const week = Math.floor(diff / (1000 * 60 * 60 * 24 * 7)) + 1;

        const days: string[] = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
        
        const day_idx = scheduled_date.getDay();
        const day: string = days[day_idx];

        return {week: week, day: day};

    }
    
    async schedule (dia: Date, id_banhista: number, horarioIndex: number, porte: string): Promise<void> {
        let horarioId: number;
        if (horarioIndex < 5) {
            horarioId = horarioIndex
        } else {
            horarioId = horarioIndex + 1
        }

        const marcado: number[] = []
        marcado.push(horarioId);
        
        if (porte === "G" || porte === "XL") {
            marcado.push(horarioId + 1)
        }

        const banhistaAlocadoDados = await this.conexao.query("select * from app.Agenda where dia = $1 and id_banhista = $2", [dia, id_banhista]);
        const novoHorarios: number[] = banhistaAlocadoDados[0].horarios.filter((t: number) => !marcado.includes(t));
        
        await this.conexao.query("update app.Agenda set horarios = $1 where id_banhista = $2 and dia = $3", [novoHorarios, id_banhista, dia]);
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
        if(horario =='11:20'){
            horaIndex = 4
        }
        if(horario =='13:10'){
            horaIndex = 5
        }
        if(horario =='14:00'){
            horaIndex = 6
        }
        if(horario =='14:50'){
            horaIndex = 7
        }
        if(horario =='15:40'){
            horaIndex = 8
        }
        return horaIndex
    }
}

type WeekDay = {
    week: number,
    day: string
}