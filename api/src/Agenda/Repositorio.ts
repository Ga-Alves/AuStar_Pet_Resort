import BanhistaAlocado from "./BanhistaAlocado";

export default interface RepositorioAgenda {
    save (banhistaAlocado: BanhistaAlocado): Promise<void>;
    add (week: number, day: string, employeeID: number, name: string): Promise<void>;
    get (week: number, day: string): Promise<BanhistaAlocado[]>;
    get_name (employeeID: number): Promise<string>;
    schedule (date: Date, employeeID: number, scheduledIndex: number, size: string): Promise<void>;
    horaStrToIndex(horario: string): number;
}
