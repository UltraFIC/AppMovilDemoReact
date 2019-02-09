import React , {Component} from 'react';
import {View,StyleSheet,Text} from 'react-native';


export default class App extends Component
{

    constructor(props)
    {
        super(props);
        //estructura para definicion de objetos
        this.state= 
        {
            date:null
        };
    }

    render()
    {
        return(
            <View  style={styles.container}>
                <Text>Hola Mundo</Text>
            </View>
        )
    }
}

//Flexbox es para crear estilos 
const styles = StyleSheet.create
(
    {
        container:
        {
            flex:1,
            backgroundColor: '#fff'
        }
    }
);