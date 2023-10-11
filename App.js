import { StatusBar } from 'react-native';
//NAVIGATION
import { NavigationContainer } from '@react-navigation/native'
import BottomNav from './src/components/BottomNav';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='skyblue' />
      <BottomNav />
    </NavigationContainer >
  );
}

