import ConexaoNotificacao from "./ConexaoNotificacao";
import { Expo } from 'expo-server-sdk';

export default class AdaptadorNotificaco implements ConexaoNotificacao{
    expo: any;

    constructor(){
        //this.conexao = pgp() ("postgres://postgres:rapha@localhost:5432/app") 
        this.expo = new Expo();

    }
    notifica(pushToken: string): number {  
        //return this.expo.query(statement, params);
        if (this.expo.isExpoPushToken(pushToken)) {
                this.expo.sendPushNotificationsAsync([{
                to: pushToken,
                sound: 'default',
                title: "Agora sim, cheirosinho! 🐶⭐",
                body: 'Já estou de banho tomado, vem me buscar.',
                data: { withSome: 'data' },
              }]);
              return 1
    }
    return 0
}
}