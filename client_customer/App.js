// react navigator
import 'react-native-gesture-handler';
import Routes from './utils/Routes';
//Context
import { Context } from "./context/AgendaBanhoContext";

// storage
import * as SecureStore from 'expo-secure-store'; 

async function setDeviceID(key) {
  const tkn = await SecureStore.getItemAsync(key)
  
  if(!tkn) {
    console.log('No ID config yet.');
    const backendID = '1'
    const setTkn = await SecureStore.setItemAsync('id', backendID);
  }
  else{
    console.log('Seu DeviceID é:', tkn);
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