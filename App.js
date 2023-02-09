import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import {View, Button, StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();

const Home = (props) => {
    const navigation = props.navigation;
    return (<View style = {styles.container}>
        
        <Button style={styles.homeButton}
            title='Thông tin cá nhân'
            // onPress={() => navigation.navigate('Manager', {name: 'Tuan'})}
            onPress={() => navigation.navigate('Profile', {name: 'Tuan'})}
        />
    </View>);
};

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Profile' component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },

});
export default App;
