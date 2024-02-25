
import {View ,Image ,ImageBackground,Text, TextInput, StatusBar , StyleSheet,Pressable,Button} from "react-native";
const ArrowRight = require("../assets/arrowright.png");
const dots3 = require("../assets/dots3.png");
const signglove = require("../assets/sign-gloves.png");



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
onPress={ ()=> navigation.navigate("Main")}
>

<Image 
      source={ArrowRight} style={styles.Arrowright}
    />
<Image 
      source={dots3} style={styles.dots3}
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
    dots3:
    {
      position:"relative",
      bottom:70,
      left:50,
      height:14,
      width:61,
      
    },
    signglovee:
    {
    position:"relative",
    right:15,
    top:360,
    flex:1, 
    justifyContent:"center",  
    alignItems:"center", 
    width:380,
    backgroundColor:"#DCEEF2",
    },
    BackGroundImage:
    {
    backgroundColor:"#DCEEF2" ,
    height:167, 
    width:360
    },
});