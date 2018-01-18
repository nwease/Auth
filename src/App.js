import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import firebase from 'firebase'
import { Header, Button, Spinner, Card, CardSection } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  state = { loggedIn: null }

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyAQRUxxALDLlEFnF-kSOfZHDQXHSVhrn2o",
      authDomain: "auth-acd75.firebaseapp.com",
      databaseURL: "https://auth-acd75.firebaseio.com",
      projectId: "auth-acd75",
      storageBucket: "auth-acd75.appspot.com",
      messagingSenderId: "964198763959"
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        this.setState({ loggedIn: true })
      } else {
        this.setState({  loggedIn: false})
      }
    })
  }

  renderContent(){
    switch (this.state.loggedIn){
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          </Card>
        )
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large" />
    }
  }

  render(){
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainerStyle: {
    marginTop: 20
  }
})

export default App
