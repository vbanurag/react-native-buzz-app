import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions
} from 'react-native';


export default class BuzzInput extends React.Component {

  
    render() {
      return (
        <View style={styles.statusBox}>
                <View style={styles.statusText}>
                    <TextInput 
                        style={styles.statusTextInput}
                        placeholder='Spread the buzz'
                        multiline={true} 
                        underlineColorAndroid={'transparent'}/>
                </View>  
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.buzzButton}>
                                <Text style={styles.buzzButtonText}> Buzz </Text>
                    </TouchableOpacity>
                </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    statusBox: {
        flexGrow:1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        top: 1
    },
    statusText: {
        paddingHorizontal: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    statusTextInput: {
        borderRadius: 25,
        height: 100,
        width: Dimensions.get('window').width - 50,
        backgroundColor: '#ffffff',
    },
    buttonView: {
        paddingHorizontal: 15,
        alignItems:'flex-end',
        justifyContent: 'flex-end',
    },
    buzzButtonText: {
        fontSize: 17,
        fontWeight: '500',
        color: '#7f0000',
    },
    buzzButton: {
        width:100,
        backgroundColor: '#c77800',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13,
        alignItems: 'center'
    }
  });
  