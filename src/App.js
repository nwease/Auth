import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyAQRUxxALDLlEFnF-kSOfZHDQXHSVhrn2o",
      authDomain: "auth-acd75.firebaseapp.com",
      databaseURL: "https://auth-acd75.firebaseio.com",
      projectId: "auth-acd75",
      storageBucket: "auth-acd75.appspot.com",
      messagingSenderId: "964198763959"
    })
  }

  render(){
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App
