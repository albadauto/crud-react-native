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
        color: 'green',
        fontSize: 25,
        fontWeight: 'bold'
    },
    form:{
        backgroundColor: '#fff',
        marginTop: 20,
        padding: 30
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
    }
})