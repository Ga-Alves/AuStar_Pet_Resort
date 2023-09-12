import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// views
import { Home } from "../views/Home";
import { CadastroPet } from "../views/CadastroPet"
import { AgendaBanhoPasso1 } from '../views/AgendaBanhoPasso1'
import { AgendaBanhoPasso5 } from '../views/AgendaBanhoPasso5'

// Componentes
import { Header } from "../components/Header";

const Stack = createNativeStackNavigator();

export default function Routes() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        header: (props) => <Header headProps={props}/>
      }}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Cadastro" component={CadastroPet}/>
        <Stack.Screen name="AgendaBanhoPasso1" component={AgendaBanhoPasso1}/>
        <Stack.Screen name="AgendaBanhoPasso5" component={AgendaBanhoPasso5}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
