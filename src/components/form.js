import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';


export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      reTypePassword: ''
    }
  }

  onChange = (e,type) => {
    let {eventCount, target, text} = e.nativeEvent
    if( type === 'email') {
      this.setState({
        email: text
      })
    } else if(type === 'password') {
      this.setState({
        password: text
      })
    }

    if( type === 'RePassword') {
      this.setState({
        reTypePassword: text
      })
      let check = RegExp(this.state.password)
      console.log(check.test(text))
    }

  }

  onSubmit = (e) => {
    console.log( this.state)
  }

    render() {
      const { type } = this.props
      return (
        <View style={styles.container}>
                <TextInput style={styles.inputBox}
                name='email'
                underlineColorAndroid='rgba(0,0,0,0)'
                value={this.state.email}
                keyboardType='email-address'
                onChange={(e)=> this.onChange(e, 'email')}
                placeholder='Email'/>
                <TextInput style={styles.inputBox}
                name='password'
                underlineColorAndroid='rgba(0,0,0,0)'
                value={this.state.password}
                onChange={(e)=> this.onChange(e, 'password')}
                secureTextEntry={true}
                placeholder='Password'/>
                {
                  type !== 'Login' ?
                  <TextInput style={styles.inputBox}
                    name='password'
                    underlineColorAndroid='rgba(0,0,0,0)'
                    value={this.state.reTypePassword}
                    onChange={(e)=> this.onChange(e, 'RePassword')}
                    secureTextEntry={true}
                    placeholder='Re Type Password'/> : null
                }
                <TouchableOpacity style = {styles.button}>
                    <Text onPress={this.onSubmit} style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputBox: {
      width: 300,
      height: 50,
      backgroundColor:'#c77800',
      color:'#ffffff',
      borderRadius: 25,
      paddingHorizontal: 15,
      fontSize:16,
      marginVertical: 10
    },
    button: {
      width:200,
      backgroundColor: '#c77800',
      borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
    },
    buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    }
  });
  