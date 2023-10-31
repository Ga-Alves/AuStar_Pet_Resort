import BanhistaCadastrado from "./BanhistaCadastrado";

export default interface RepositorioBanhistas{
    save (banhistaCadastrado: BanhistaCadastrado): Promise<void>
    list (): Promise<any[]>
}
