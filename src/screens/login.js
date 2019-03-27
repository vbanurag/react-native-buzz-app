import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import Logo from '../components/logo'
import Form from '../components/form'
import {Actions} from 'react-native-router-flux';


export default class Login extends React.Component {

  signUp () {
    Actions.signup()
  }
  
    render() {
      return (
        <View style={styles.container}>
          <KeyboardAvoidingView behavior='padding'>
          <Logo/>
          <Form type={'Login'}/>
          <View style={styles.signUpTextCont}>
            <Text style={styles.signUpText}>Don't have an account yet ? </Text>
            <TouchableOpacity onPress={this.signUp}>
              <Text style={styles.signUpButton}>SignUp</Text>
            </TouchableOpacity>
          </View>
          </KeyboardAvoidingView>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffa000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    signUpTextCont: {
      flexDirection: 'row',
      flexGrow: 1,
      justifyContent: 'center',
      alignItems:'flex-end',
      paddingVertical: 15
    },
    signUpText: {
      color: '#9b0000',
      fontSize: 16
    },
    signUpButton: {
      fontSize: 17,
      fontWeight: '500',
      color: '#7f0000'
    }
  });
  