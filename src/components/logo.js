import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Image,
} from 'react-native';

export default class Logo extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <Image style={{width:90, height:90}} 
                source={require('../../assets/logo.png')} />
                <Text style={styles.logoText}>Welcome To The Buzz</Text>
            </View>
        )
    }  
} 

const styles = StyleSheet.create({
    container: {
      flexGrow: 1 ,
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    logoText: {
        fontSize: 16,
        color: '#fff8e1',
        marginVertical: 15
    }
  });
  