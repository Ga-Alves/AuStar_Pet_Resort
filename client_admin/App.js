import { StyleSheet, View } from 'react-native';


// components
import { ServiceOrder } from './components/ServiceOrder';

export default function App() {


  return (
    <View style={styles.container}>
      <ServiceOrder
        title='Pipoca'
        services={['Banho', 'Banho Volumezante', 'Sem Perfume', 'Gravata']}
        responsable='Rafael'
        total='R$ 50,00'
        confirmOrder={()=>console.log('confirm callback')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
