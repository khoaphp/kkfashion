import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";

export default class MenuLeft extends Component{
  render(){
    return(
      <View>
        <TouchableOpacity onPress={()=>{this.props.gotoNew()}}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
