// react navigator
import 'react-native-gesture-handler';
import Routes from './utils/Routes';
//Context
import { Context } from "./context/AgendaBanhoContext";

export default function App() {
  return (
    <Context>
      <Routes/>
    </Context>
  );
}