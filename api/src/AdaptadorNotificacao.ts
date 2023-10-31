import NotifyToken from "./Usuario/NotifyToken";
import ConexaoNotificacao from "./ConexaoNotificacao";
import { Expo } from 'expo-server-sdk';

export default class AdaptadorNotificaco implements ConexaoNotificacao{
    expo: any;

    constructor(){
        //this.conexao = pgp() ("postgres://postgres:rapha@localhost:5432/app") 
        this.expo = new Expo();

    }
    notifica(pushToken: string, dadosNotificacao: NotifyToken): number {  
        //return this.expo.query(statement, params);
        if (Expo.isExpoPushToken(pushToken)) {
                this.expo.sendPushNotificationsAsync([{
                to: pushToken,
                sound: dadosNotificacao.sound,
                title: dadosNotificacao.title,
                body: dadosNotificacao.body,
                data: { withSome: 'data' },
              }]);
              return 1
    }
    return 0
}
}