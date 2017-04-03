import React, {Component} from "react";
import {View, StatusBar} from "react-native";
import HomeScene from "./HomeScene.js";

export default class App extends Component{
  render(){
    return(
    <View style={{flex:1}}>
      <StatusBar hidden={true} />
      <HomeScene></HomeScene>
    </View>
    );
  }
}
