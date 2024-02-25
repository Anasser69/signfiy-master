import { StyleSheet, Text, View, ImageBackground,Image } from 'react-native';
import React, { useEffect } from 'react';
const logo = require("../assets/Artboard 3.png");

const SignfiyScreen = ({ navigation }) => {
useEffect(() => {
		setTimeout(() => {
			navigation.navigate('FirstScreen');
		}, 2000);
	}, []); 
	return (
		<View style={styles.container}>
            
            <View style={styles.logoimage}>
                <Image source={logo} style={styles.image}></Image>
            <Text style={styles.text}>Signfiy</Text>

            </View>

		</View>
	);
};
export default SignfiyScreen;


const styles = StyleSheet.create({
container:
{
    backgroundColor: '#00A2DB',
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
},
text:
{
    color: 'white',
	fontSize: 40,
	fontWeight: 'bold',
},
logoimage:
{
position:"relative",
bottom:100,
flex:1, 
justifyContent:"center",  
alignItems:"center", 
width:200,
color:"#00A2DB",
},
image:
{
backgroundColor:"#00A2DB" ,
height:100, 
width:100,
},

});