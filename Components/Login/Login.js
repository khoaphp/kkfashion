import React, {Component} from "react";
import {View, TouchableOpacity, Text} from "react-native";

export default class Login extends Component{
  render(){
    console.log("lognnnnnn");
    return(
      <View style={{flex:1, backgroundColor:"yellow"}}>
        <TouchableOpacity onPress={()=>{this.props.clickBack()}}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
