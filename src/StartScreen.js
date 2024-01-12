import React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';
const StartScreen=()=>{
    return(
        <View style={styles.logoStyle}>
            <Image source={require('../assets/download.png')}/>
        </View>
    )
}

const styles=StyleSheet.create({
    logoStyle:{
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        display:'flex',
        backgroundColor:'black',
        width:'100%',
        flexDirection:'column',
    }
});
export default StartScreen;