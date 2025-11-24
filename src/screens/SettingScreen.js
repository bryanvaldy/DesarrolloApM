import { StyleSheet, Text, View } from 'react-native';

const SettingScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Configuración</Text>
            <Text style={styles.text}>Pantalla de configuración</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
    },
    title: {
        fontSize: 24,
        color: '#FFFFFF',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        color: '#BB86FC',
    },
});

export default SettingScreen;