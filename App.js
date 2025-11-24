import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

// Auth Screens
  import LoginScreen from './src/screens/auth_users/LogInScreen';
import RegisterScreen from './src/screens/auth_users/RegisterScreen';

// Main Screens
import HomeScreen from './src/screens/HomeScreen';
import MyTripsScreen from './src/screens/MyTripsScreen';
import NewMoveScreen from './src/screens/NewMoveScreen';
import NewTripScreen from './src/screens/NewTripScreen';

// Ignorar todos los logs de error (SOLO para desarrollo)
LogBox.ignoreAllLogs();

// O ignorar logs específicos
LogBox.ignoreLogs([
  'SafeAreaView has been deprecated',
  'Cannot read property',
  'TypeError:',
  'Error obteniendo viajes',
  'Error cargando viajes'
]);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Auth Screens */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        
        {/* Main Screens */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="NewTrip" 
          component={NewTripScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="NewMove" 
          component={NewMoveScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="MyTrips" 
          component={MyTripsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}