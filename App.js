import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View ,Image ,ImageBackground,Text, TextInput, StatusBar , StyleSheet,Pressable,Button} from "react-native";
import  FirstScreen from "./Screens/FirstScreen";
import  ThirdScreen from "./Screens/ThirdScreen";
import  SecondScreen from "./Screens/SecondScreen";
import  MainScreen from "./Screens/MainScreen";
import  SignfiyScreen from "./Screens/SignfiyScreen";

const Stack = createNativeStackNavigator();
const LogoImg = require("./assets/menu icon.png");

export default function App(){
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName='SignfiyScreen' 
        
        screenOptions=
        {{
          title:'Signify',
          headerStyle:{
            backgroundColor:"#DCEEF2"
          },
          headerTitleStyle:
          {
            fontSize:25,
            fontWeight:"bold",
            color:"black"
          },
          headerLeft:()=>
          (
            <Pressable onPress={ ()=> console.log("Fuck You")}>
            <Image 
            source={LogoImg} style={styles.menuIcon} 
            />
            </Pressable>
          )
        }}>
            
            <Stack.Screen  options={{headerShown:false}} name="SignfiyScreen" component={SignfiyScreen}/>
            <Stack.Screen name="FirstScreen" component={FirstScreen}/>
            <Stack.Screen name="SecondScreen" component={SecondScreen}/>
            <Stack.Screen name="ThirdScreen" component={ThirdScreen}/>
            <Stack.Screen name="Main" component={MainScreen}/>
        </Stack.Navigator>
</NavigationContainer>
)};

const styles = StyleSheet.create({
menuIcon:
{
  marginBottom:10,
  marginTop:12,
  width:40, 
  height:40,
  marginRight:15, 
},
});


