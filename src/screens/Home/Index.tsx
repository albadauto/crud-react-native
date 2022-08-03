import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import { ICarteira } from '../../interfaces/Carteira.interface'
import { api } from '../../api';
import { showMessage } from 'react-native-flash-message';
export default function Home() {
  const [carteiraData, setCarteiraData] = useState<ICarteira>({} as ICarteira);
  function handleOnSubmit(){
    api.post('/carteira', carteiraData).then(() => {
      showMessage({ message: 'Cadastrado com sucesesso', type: 'success'})
    }).catch(err => console.log(err))
  }
  return (
    <View style={styles.container}>
      <View style={styles.status}>
        <Text style={styles.saldo}>Saldo total:</Text>
        <Text style={styles.total}>R$ 9000.00</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.title}>Informações para registro de dinheiro</Text>

        <TextInput placeholder='Nome do usuário' style={styles.input} value={carteiraData.nome} onChangeText={(text) => setCarteiraData({...carteiraData, nome: text})}/>
        <TextInput placeholder='Saldo' style={styles.input} keyboardType="numeric" value={carteiraData.saldo} onChangeText={(text) => setCarteiraData({...carteiraData, saldo: text})}/>
        <TextInput placeholder='Informações da entrada' style={styles.input} value={carteiraData.descricao} onChangeText={(text) => setCarteiraData({...carteiraData, descricao: text})}/>
        <Button title="Enviar" color={"#F24F00"} onPress={handleOnSubmit}/>
      </View>
    </View>
  )
}

