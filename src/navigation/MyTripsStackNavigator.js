import { MaterialIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import EditTripScreen from '../screens/EditTripScreen';
import MyTripsScreen from '../screens/MyTripsScreen';
import TripDetailScreen from '../screens/TripDetailScreen';

const Stack = createNativeStackNavigator();

const openDrawer = ({navigation}) => {
    return(
        <TouchableOpacity onPress={()=> navigation.openDrawer()}>
            <MaterialIcons name='menu' size={25} color={"blue"}/>
        </TouchableOpacity>
    )
}

export default function MyTripsStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="MyTripsMain"
                component={MyTripsScreen}
                options={{
                    title: 'Mis Viajes',
                    headerLeft: (() => openDrawer({ navigation }))
                }}
            />
            <Stack.Screen 
                name="TripDetail"
                component={TripDetailScreen}
                options={{
                    title: 'Detalle del Viaje',
                    headerLeft: (() => openDrawer({ navigation }))
                }}
            />
            <Stack.Screen
                name="EditTrip"
                component={EditTripScreen}
                options={{
                    title: 'Editar Viaje',
                    headerLeft: (() => openDrawer({ navigation }))
                }}
            />
        </Stack.Navigator>
    );
}