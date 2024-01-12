import React, { useState } from "react";
import {Text,View,StyleSheet, ScrollView, Pressable} from 'react-native';

const HomeScreen=()=>{
    const[value,setValue]=useState('0');
    const[isbracketOpen,setIsBracketOpen]=useState(false);
    const Presses=(val)=>{
        console.log('pressed',val);
        if(val=='AC'){
            setValue('0');
        }else if(val=='='){
            try{
                if((value.match(/\(/g)||[]).length==(value.match(/\)/g)||[]).length){
                    if(value.slice(-1)=='+'||value.slice(-1)=='-'||value.slice(-1)=='*'||value.slice(-1)=='/'||value.slice(-1)=='%'||value.slice(-1)=='.'){
                        setValue(`${eval(value.replace('()','(0)').slice(0,-1))}`);
                    }else{
                        setValue(`${eval(value.replace('()','(0)'))}`)
                    }
                }
            }catch(e){
                setValue('Expression Error');
            }
        }else if(val=='back'){
            setValue(value.slice(0,-1));
        }else if(val=='()'){
            if(value=='0'){
                setValue('(');
                setIsBracketOpen(true);
            }else if(value.slice(-1)=='+'||value.slice(-1)=='-'||value.slice(-1)=='*'||value.slice(-1)=='/'||value.slice(-1)=='%'||value.slice(-1)=='.'){
                setValue(value+'(');
                setIsBracketOpen(true);
            }else{
                if(isbracketOpen==true){
                    setValue(value+')');
                    setIsBracketOpen(false);
                }else{
                    setValue(value+'(');
                    setIsBracketOpen(true);
                }
            }
        }else if(value=='Expression Error'){
            setValue(val); 
        }
        else{
            if(value=='0'){
                if(val=='+'||val=='-'||val=='*'||val=='/'||val=='.'||val=='%'){
                    setValue(value+val);
                }else{
                    setValue(val);
                }
            }else if(isNaN(val)){
                if(value.slice(-1)=='+'||value.slice(-1)=='-'||value.slice(-1)=='*'||value.slice(-1)=='/'||value.slice(-1)=='%'||value.slice(-1)=='.'){
                    setValue(value.slice(0,-1)+val);
                }else{
                    setValue(value+val);
                }
            }else{
                setValue(value+val);
            }
        }
    }
    return(
        <View style={styles.HomeStyle}>
            <ScrollView style ={styles.ScrollStyle}>
                <Text style={styles.textStyle}>
                    {value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </Text>
            </ScrollView>
            <View style={styles.KeyPadStyle}>
                <View style={styles.KeyPad_row}>
                    <Pressable onPress={()=>Presses('AC')}>
                        <View style={styles.btn1}>
                            <Text style={styles.bg1}>AC</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={()=>Presses('()')}>
                        <View style={styles.btn2}>
                            <Text style={styles.bg2}>( )</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={()=>Presses('%')}>
                        <View style={styles.btn2}>
                            <Text style={styles.bg2}>%</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={()=>Presses('/')}>
                        <View style={styles.btn2}>
                            <Text style={styles.bg2}>/</Text>
                        </View>
                    </Pressable>
                </View>
                <View style={styles.KeyPad_row}>
                    <Pressable onPress={()=>Presses('7')}>
                        <View style={styles.btn}>
                            <Text style={styles.bg}>7</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={()=>Presses('8')}>
                        <View style={styles.btn}>
                            <Text style={styles.bg}>8</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={()=>Presses('9')}>
                        <View style={styles.btn}>
                            <Text style={styles.bg}>9</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={()=>Presses('*')}>
                        <View style={styles.btn2}>
                            <Text style={styles.bg2}>*</Text>
                        </View>
                    </Pressable>
                </View>

                <View style={styles.KeyPad_row}>
                    <Pressable onPress={()=>Presses('4')}>
                        <View style={styles.btn}>
                            <Text style={styles.bg}>4</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={()=>Presses('5')}>
                        <View style={styles.btn}>
                            <Text style={styles.bg}>5</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={()=>Presses('6')}>
                        <View style={styles.btn}>
                            <Text style={styles.bg}>6</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={()=>Presses('-')}>
                        <View style={styles.btn2}>
                            <Text style={styles.bg2}>-</Text>
                        </View>
                    </Pressable>
                </View>

                <View style={styles.KeyPad_row}>
                    <Pressable onPress={()=>Presses('1')}>
                        <View style={styles.btn}>
                            <Text style={styles.bg}>1</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={()=>Presses('2')}>
                        <View style={styles.btn}>
                            <Text style={styles.bg}>2</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={()=>Presses('3')}>
                        <View style={styles.btn}>
                            <Text style={styles.bg}>3</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={()=>Presses('+')}>
                        <View style={styles.btn2}>
                            <Text style={styles.bg2}>+</Text>
                        </View>
                    </Pressable>
                </View>

                <View style={styles.KeyPad_row}>
                    <Pressable onPress={()=>Presses('.')}>
                        <View style={styles.btn}>
                            <Text style={styles.bg}>.</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={()=>Presses('0')}>
                        <View style={styles.btn}>
                            <Text style={styles.bg}>0</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={()=>Presses('back')}>
                        <View style={styles.btn1}>
                            <Text style={styles.bg1}>&lt;</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={()=>Presses('=')}>
                        <View style={styles.btn2}>
                            <Text style={styles.bg2}>=</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    HomeStyle:{
        marginTop:50,
        display:'flex',
        height:'100%',
        width:'100%',
        backgroundColor:'white',
        flexDirection:'column',
        alignItems:'center',

    },
    ScrollStyle:{
        elevation:10,
        width:"95%",
        backgroundColor:'white',
        display:'flex',
        marginBottom:10,
        padding:10,
        borderRadius:10
    },
    textStyle:{
        fontSize:50,
        textAlign:'right',

    },
    KeyPadStyle:{
        width:'100%',
        height:'65%',
        display:'flex',

    },
    KeyPad_row:{
        flexDirection:'row',
        display:'flex',
        backgroundColor:'white',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10,
    },
    btn:{
        width: 70,
        height: 70,
        backgroundColor:'white',
        elevation:10,
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        
    },
    bg:{
        backgroundColor:'white',
        color:'black',
        fontSize:30,
    },
    btn1:{
        width: 70,
        height: 70,
        backgroundColor:'#ceced6',
        borderRadius:90,
        elevation:10,
        alignItems:'center',
        justifyContent:'center',
        overflow:'hidden',

    },
    bg1:{
        backgroundColor:'#ceced6',
        fontSize:30,
        color:'black',
        fontWeight:'bold',

    },
    btn2:{
        width: 70,
        height: 70,
        backgroundColor: '#4B5EFC',
        borderRadius: 90,
        elevation: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',

    },
    bg2:{
        backgroundColor:'#4B5EFC',
        color:'white',
        fontWeight:'bold',
        fontSize:30,
    }
});
export default HomeScreen;