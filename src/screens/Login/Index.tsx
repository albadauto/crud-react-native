import {  Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import { IUser } from '../../interfaces/User.interface'
import { api } from '../../api'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
    const [userData, setUserData] = useState<IUser>({} as IUser)
    async function handleSubmit(): Promise<void>{
        try{
            let response = await api.post("/verifyLogin", userData);
        
            await AsyncStorage.setItem("token", response.data.token.token)
        }catch(err){
            console.log("Error:", err);
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.containerLogin}>
                <Text style={styles.title}>Login no sistema</Text>
                <TextInput style={styles.formInput} placeholder='email' value={userData.email} onChangeText={(text) => setUserData({...userData, email: text})}/>
                <TextInput style={styles.formInput} placeholder='Senha' secureTextEntry={true} value={userData.password} onChangeText={(text) => setUserData({...userData, password: text})}/>
                <Button title="Login" color={"#F24F00"}  onPress={handleSubmit}/>
            </View>

        </View>
    )
}

