import BanhistaCadastrado from "./BanhistaCadastrado";
import RepositorioBanhistas from "./Repositorio";

export default class RepositorioMemoriaBanhista implements RepositorioBanhistas {
    banhistasCadastrados: BanhistaCadastrado[];
    constructor () {
        this.banhistasCadastrados = [];
    }
    async save(banhistaCadastrado: BanhistaCadastrado): Promise<void> {
        this.banhistasCadastrados.push(banhistaCadastrado);
    }
}