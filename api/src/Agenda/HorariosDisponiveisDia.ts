import RepositorioAgenda from "./Repositorio";
import RepositorioPet from "../CadastroPet/Repositorio";
import BanhistaAlocado from "./BanhistaAlocado";
import petCadastrado from "../CadastroPet/petCadastrado";

export default class HorariosDisponiveisDia {
    constructor (readonly repositorioAgenda: RepositorioAgenda, readonly repositorioPet: RepositorioPet) {
    }

    async execute(input: Input): Promise<boolean[]> {
        const banhistasDisponiveis: BanhistaAlocado[] = await this.repositorioAgenda.get(input.week, input.day)
        const pet: petCadastrado = await this.repositorioPet.get(input.id_pet)
        
        const horariosDisponiveis: Set<number> = new Set();
        if (pet.porte === "P") {
            for (const banhista of banhistasDisponiveis) {
                for (const horario of banhista.schedule) {
                    horariosDisponiveis.add(horario);
                }
            }
        }
        else {
            for (const banhista of banhistasDisponiveis) {
                banhista.schedule.sort((h1, h2) => h1 - h2)
                for (let i = 1; i < banhista.schedule.length; i++) {
                    if (banhista.schedule[i] === banhista.schedule[i-1] + 1) {
                        horariosDisponiveis.add(banhista.schedule[i-1]);
                    }
                }
            }
        }
        
        const numberHorariosDisponiveis: number[] = [...horariosDisponiveis];
        const boolHorariosDisponiveis: boolean[] = Array.from({length: 9}, () => false);

        for (const horario of numberHorariosDisponiveis) {
            switch (horario) {
                case 0:
                    boolHorariosDisponiveis[0] = true;
                    break;
                case 1:
                    boolHorariosDisponiveis[1] = true;
                    break;
                case 2:
                    boolHorariosDisponiveis[2] = true;
                    break;
                case 3:
                    boolHorariosDisponiveis[3] = true;
                    break;
                case 4:
                    boolHorariosDisponiveis[4] = true;
                    break;
                case 6:
                    boolHorariosDisponiveis[5] = true;
                    break;
                case 7:
                    boolHorariosDisponiveis[6] = true;
                    break;
                case 8:
                    boolHorariosDisponiveis[7] = true;
                    break;
                case 9:
                    boolHorariosDisponiveis[8] = true;
                    break;
                default:
                    break;
            }
        }
        return boolHorariosDisponiveis;
    }
}

type Input = {
    week: number,
    day: string,
    id_pet: number
}
