import NotifyToken from "./Usuario/NotifyToken";

export default interface ConexaoNotificacao{
    notifica(statement: string, dadosNotificacao : NotifyToken): number;
}