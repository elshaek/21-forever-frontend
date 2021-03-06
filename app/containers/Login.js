import React, { Component } from 'react';
import { StyleSheet, AlertIOS } from 'react-native';
import { Container, Title, Item, Input, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: 'Enter your email',
      password: 'Enter your password'
    }

    this.loginUser = this.loginUser.bind(this)
  }


  loginUser(){
    this.props.authenticateUser(this.state.email, this.state.password)
  }

  render() {
  return (
    <Container style={styles.container}>
      <Item>
        <Input
          placeholder="email"
          placeholderTextColor='#949799'
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(email) => this.setState({email})}
          />
        </Item>
        <Item>
          <Input
            placeholder="password"
            placeholderTextColor='#949799'
            returnKeyType="go"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(password) => this.setState({password})}
            ref={(input) => this.passwordInput = input}
            onSubmitEditing={this.loginUser}
          />
         </Item>
        <Button block info style={styles.hasmargin} onPress={this.loginUser}>
          <Text style={styles.buttontext}>LOG IN</Text>
        </Button>
    </Container>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    width:200,
    padding: 3,
    margin: 10
  },
  hasmargin: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    backgroundColor: '#ffdf45'
  },
  buttontext: {
    color: '#000000'
  }
});
