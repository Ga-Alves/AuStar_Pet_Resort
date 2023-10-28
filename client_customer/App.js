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

async function setDeviceID(key) {
  const tkn = await SecureStore.getItemAsync(key)
  if(!tkn) {
    console.log('No ID config yet.');
    const notifyTkn = await getNotifyToken();

    console.log(notifyTkn);
    backend.post('/CadastroUser', {notifyToken: notifyTkn})
      .catch((err) => {
        console.log("ERR: ", err);
      })
    await SecureStore.setItemAsync('id', notifyTkn);
  }

}

export default function App() {
  setDeviceID('id');
  return (
    <Context>
      <Routes/>
    </Context>
  );
}