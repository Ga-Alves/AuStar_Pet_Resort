// react navigator
import 'react-native-gesture-handler';
import Routes from './utils/Routes';
//Context
import { Context } from "./context/AgendaBanhoContext";

// storage
import * as SecureStore from 'expo-secure-store'; 

//notify token
import { getNotifyToken } from './services/getNotifyToken';

// api
import backend from './services/BackEndAPI'

async function setDeviceID() {
  const id = await SecureStore.getItemAsync('id')

  if(!id) {
    const notifyTkn = await getNotifyToken();

    await backend.post('/CadastroUser', {notifyToken: notifyTkn})
      .then(async (res) => {
        await SecureStore.setItemAsync('id', res.data.idUser.toString());
      })
      .catch((err) => {
        console.log("ERR: ", err);
      })
  }

}

export default function App() {
  setDeviceID();
  return (
    <Context>
      <Routes/>
    </Context>
  );
}