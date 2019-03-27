import React from 'react';
import { StyleSheet, 
  Text, 
  View,
  StatusBar
} from 'react-native';
import Routes from './src/routes'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar>
          backgroundColor='#c67100'
          barStyle='light-content'
        </StatusBar>
        <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
