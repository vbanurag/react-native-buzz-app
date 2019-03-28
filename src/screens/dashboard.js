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
import BuzzInput from '../components/buzzInput'


export default class Dashboard extends React.Component {

  
    render() {
      return (
        <View style={styles.container}>
          <KeyboardAvoidingView behavior='padding'>
            <BuzzInput/>
          </KeyboardAvoidingView>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff8e1',
      justifyContent: 'space-evenly',
      alignItems:'stretch'
    }
  });
  