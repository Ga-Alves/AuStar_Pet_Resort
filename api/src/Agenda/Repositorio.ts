import BanhistaAlocado from "./BanhistaAlocado";

export default interface RepositorioAgenda {
    save (banhistaAlocado: BanhistaAlocado): Promise<void>;
    add (week: number, day: string, employeeID: number): Promise<void>;
    get (week: number, day: string): Promise<BanhistaAlocado[]>;
    schedule (week: number, day: string, employeeID: number, scheduledIndex: number, size: string): Promise<void>;
}
