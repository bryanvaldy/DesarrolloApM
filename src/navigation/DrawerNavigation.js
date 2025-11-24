import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import local screens
import SettingScreen from '../screens/SettingScreen';
import TabNavigator from './TabNavigator';
// Import nuevas pantallas de viajes
import ItemsInBoxScreen from '../screens/ItemsInBoxScreen';
import NewTripScreen from '../screens/NewTripScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation({ navigation }) {
    return (
        <Drawer.Navigator>
            <Drawer.Screen 
                name="Inicio" 
                component={TabNavigator}
                options={{
                    headerShown: false,
                    drawerIcon: ({ color }) => (<MaterialIcons name='home' size={25} color={color} />)
                }}
            />
            <Drawer.Screen 
                name="Nuevo Viaje" 
                component={NewTripScreen}
                options={{
                    drawerIcon: ({ color }) => (<Ionicons name='add-circle' size={25} color={color} />)
                }}
            />
            <Drawer.Screen 
                name="Mis Maletas / Cajas" 
                component={ItemsInBoxScreen}
                options={{
                    drawerIcon: ({ color }) => (<Ionicons name='briefcase' size={25} color={color} />)
                }}
            />
            <Drawer.Screen 
                name="Config" 
                component={SettingScreen}
                options={{
                    drawerIcon: ({ color }) => (<MaterialIcons name='settings' size={25} color={color} />)
                }}
            />
        </Drawer.Navigator>
    )
}