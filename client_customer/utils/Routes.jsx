import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// views
import { Home } from "../views/Home";
import { CadastroPet } from "../views/CadastroPet"

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
