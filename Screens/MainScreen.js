
import {View ,Image ,ImageBackground,Text, TextInput, StatusBar , StyleSheet,Pressable} from "react-native";  
const BackGroundImg = require("../assets/Artboard 3.png");
const Arrow = require("../assets/arrowicon.png");

export default function App(){
    return( 
    <View style={styles.container}>
    <StatusBar barStyle={"light-content"}hidden/>



<View
style={styles.SecondBox}>
  <ImageBackground source={BackGroundImg} style={styles.BackGroundImage}></ImageBackground>
</View>

  <View 
  style={styles.ThirdBox}>
  <Pressable   onPress={()=> console.log("Fuck You")}>
  <Image 
      source={Arrow} style={styles.ArrowIcon}
    />
    </Pressable>
  <TextInput placeholder="Text Here.." style={styles.TextBox}></TextInput>
  </View> 
  </View>
  
  );


}const styles = StyleSheet.create({
container:
{
  position:"relative",
  backgroundColor:"#dfedf0",
  flex:1,
},
Logo:
{
  color:"white",
  fontSize:35,
  marginTop:25
},
SecondBox:
{
  position:"relative",
  flex:1, 
  flexDirection:"row-reverse" ,
  justifyContent:"center",  
  alignItems:"center", 
  width:410,
  backgroundColor:"#DCEEF2", 
},
BackGroundImage:
{
  backgroundColor:"#DCEEF2" ,
  height:200 , 
  width:170
},
ThirdBox:
{
  position:"relative",
  flexDirection:"row-reverse" ,
  alignItems:"flex-end",    
  width:410,
  backgroundColor:"#DCEEF2", 
  paddingBottom:10
},
ArrowIcon:
{
  margin:7, 
  marginRight:0, 
  marginBottom:3,
  width:40, 
  height:40,  
},
TextBox:
{
  backgroundColor:"#D9D9D9",
  textAlign:"left",
  borderRadius:50, 
  paddingLeft:25,
  color:"black",
  height:45,
  width:340,
  fontSize:25,
  margin:5,
  marginRight:1
},
TestButton:
{
  backgroundColor:"red",
  width:55,
  height:10.
}
});;
