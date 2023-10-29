import NotifyToken from "./CadastroUser/notifyToken";

export default interface ConexaoNotificacao{
    notifica(statement: string, dadosNotificacao : NotifyToken): number;
}