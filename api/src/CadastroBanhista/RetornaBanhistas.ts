import RepositorioBanhistas from "./Repositorio";
import BanhistaCadastrado from "./BanhistaCadastrado";

export default class RetornaBanhistas {
    constructor (readonly repositorioBanhistas: RepositorioBanhistas) {
    }
    
    async execute (): Promise<Output> {
        const banhistasCadastrados = await this.repositorioBanhistas.list()
        return {
            banhistasCadastrados : banhistasCadastrados
        }

    }
}

type Output = {
    banhistasCadastrados : any[]
}
