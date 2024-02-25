
import {View ,Image ,ImageBackground,Text, TextInput, StatusBar , StyleSheet,Pressable,Button} from "react-native";
const ArrowRight = require("../assets/arrowright.png");
const dots2 = require("../assets/dots2.png");
const signglove = require("../assets/signglioves2.png");



export default function HomeScreen({ navigation }){
return(
  
<View style={styles.container}>
<StatusBar barStyle={"light-content"}hidden/>

<View
style={styles.signglovee}>
  <ImageBackground source={signglove} style={styles.BackGroundImage}></ImageBackground>
</View>


<Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do  </Text>
<Pressable 
onPress={ ()=> navigation.navigate("ThirdScreen")}
>

<Image 
      source={ArrowRight} style={styles.Arrowright}
    />
<Image 
      source={dots2} style={styles.dots2}
    />

</Pressable>
</View>
);
}


const styles = StyleSheet.create({
    container:
    {
      position:"relative",
      backgroundColor:"#DCEEF2",
      flex:1,
    },
    text:
    {
      color:"#003C51",
      fontSize:15,
      fontWeight:"700",
      lineHeight:24,
      padding:50,
      paddingBottom:80,
      paddingTop:600,
      textAlign:"center",
      
    },
  

    Arrowright:
    {
      position:"relative",
      bottom:40,
      right:50,
      left:350,
      height:40,
      width:40,
    },
    dots2:
    {
      position:"relative",
      bottom:70,
      left:50,
      height:14,
      width:58,
      
    },
    signglovee:
    {
    position:"relative",
    left:20,
    top:360,
    flex:1, 
    justifyContent:"center",  
    alignItems:"center", 
    width:400,
    backgroundColor:"#DCEEF2",
    },
    BackGroundImage:
    {
    backgroundColor:"#DCEEF2" ,
    height:300, 
    width:300
    },
});