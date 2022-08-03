import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 20,
        
    },
    status:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10
    },
    saldo:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    total:{
        color: '#00aa0e',
        fontSize: 25,
        fontWeight: 'bold'
    },
    form:{
        backgroundColor: '#fff',
        marginTop: 20,
        padding: 30,
        borderRadius: 10
    },
    title:{
        alignSelf: 'center',
        fontSize: 17,
        fontWeight: 'bold'
    },
    input:{
        padding: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 10
    },
    buttonSubmit:{
        backgroundColor: '#F24F00'
    },
    formRetirarDinheiro:{
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection: 'row',
        paddingBottom: 20
    },
    textMais:{
        fontSize: 30,
    },
    buttonAdd:{
        backgroundColor: '#5afc68',
        padding: 10,
        borderRadius: 50
    },
    dinheiroRetirar:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonRemove:{
        backgroundColor: '#f74873',
        padding: 10,
        borderRadius: 50
    },
    textMenos:{
        fontSize: 30,
    }
})