import BanhistaAlocado from "./BanhistaAlocado";

export default interface RepositorioAgenda {
    save (banhistaAlocado: BanhistaAlocado): Promise<void>;
    add (week: number, day: string, employeeID: number): Promise<void>;
    get (week: number, day: string): Promise<BanhistaAlocado[]>;
    get_name (employeeID: number): Promise<string>;
    get_date_from_week_day(week: number, day:string): Promise<Date>;
    get_week_day_from_date(date: string): Promise<WeekDay>;
    schedule (date: Date, employeeID: number, scheduledIndex: number, size: string): Promise<void>;
    horaStrToIndex(horario: string): number;
}

type WeekDay = {
    week: number,
    day: string
}
