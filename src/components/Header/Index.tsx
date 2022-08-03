import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.objects}>
      <Text style={styles.title}>Crud em react</Text>
      <TouchableOpacity style={styles.buttonAccount}>
        <Ionicons name="people" size={35} color={'#000'}/>
      </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: statusBarHeight,
        paddingStart: 19,
        paddingEnd: 16,
        paddingBottom: 44,
        backgroundColor: '#F24F00'
    },
    title:{
      fontSize: 20,
      color: '#fff',
      fontWeight: 'bold'
    },
   objects:{
    justifyContent: 'space-between',
    flexDirection: 'row',
   },
   buttonAccount:{
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 44/2,
    borderColor: '#fff',
   }  
})