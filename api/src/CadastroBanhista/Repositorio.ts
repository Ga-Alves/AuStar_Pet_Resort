import BanhistaCadastrado from "./banhistaCadastrado";

export default interface RepositorioBanhistas{
    save (banhistaCadastrado: BanhistaCadastrado): Promise<void>
}
