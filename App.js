import { StatusBar } from 'react-native';
//NAVIGATION
import { NavigationContainer } from '@react-navigation/native'
import BottomNav from './src/components/BottomNav';
import { GlobalContextProvider } from './src/context';

export default function App() {
  return (
    <GlobalContextProvider>
      <NavigationContainer>
        <StatusBar backgroundColor='blue' />
        <BottomNav />
      </NavigationContainer >
    </GlobalContextProvider>
  );
}

