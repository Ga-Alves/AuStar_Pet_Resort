import RepositorioBanhistas from "./Repositorio";
import BanhistaCadastrado from "./banhistaCadastrado";

export default class CadastraBanhista {
    constructor (readonly repositorioBanhistas: RepositorioBanhistas) {
    }
    async execute (input: Input) : Promise<void> {
        await this.repositorioBanhistas.save(new BanhistaCadastrado(input.id_banhista,
                                                                    input.nome));
    }
}

type Input = {
    id_banhista: number,
    nome: string
}
