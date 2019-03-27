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
import { Actions } from 'react-native-router-flux';



export default class SignUp extends React.Component {

    signIn () {
        Actions.login()
    }
  
    render() {
      return (
        <View style={styles.container}>
          <KeyboardAvoidingView behavior='padding'>
          <Logo/>
          <Form type={'SignUp'}/>
          <View style={styles.signInTextCont}>
            <Text style={styles.signInText}>Already have an account ? </Text>
            <TouchableOpacity onPress={this.signIn}>
              <Text style={styles.signInButton}>SignIn</Text>
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
    signInTextCont: {
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems:'flex-end',
        paddingVertical: 15
      },
      signInText: {
        color: '#9b0000',
        fontSize: 16
      },
      signInButton: {
        fontSize: 17,
        fontWeight: '500',
        color: '#7f0000'
      }
  });
  