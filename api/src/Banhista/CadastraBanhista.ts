import RepositorioBanhistas from "./Repositorio";
import BanhistaCadastrado from "./BanhistaCadastrado";

export default class CadastraBanhista {
    constructor (readonly repositorioBanhistas: RepositorioBanhistas) {
    }
    
    async execute (input: Input): Promise<void> {
        await this.repositorioBanhistas.save(new BanhistaCadastrado(input.nome));
    }
}

type Input = {
    nome: string
}
