import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";

// views
import { ServiceOrdemScreen } from "../views/OrdemServico";
import { GerenciaAgenda } from "../views/GerenciaAgenda";

// Componentes
import { Header } from "../components/Header";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        header: (props) => <Header headProps={props}/>
      }}>
        <Stack.Screen name="Ordem de Serviço" component={ServiceOrdemScreen}/>
        <Stack.Screen name="GerenciaAgenda" component={GerenciaAgenda}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
