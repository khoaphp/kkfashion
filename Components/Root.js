import React, {Component} from "react";
import {View, Navigator} from "react-native";
import Info     from "./Info/Info.js";
import Login    from "./Login/Login.js";
import Main     from "./Main/Main.js";
import Register from "./Register/Register.js";
import ShoppingHistory from "./ShoppingHistory/ShoppingHistory.js";

var e;

export default class Root extends Component{
  constructor(props){
    super(props);
    e = this;
  }
  renderScene(route, navigator){
    switch(route.name){
      case "info"     : return( <Info /> ); break;
      case "login"    : return( <Login clickBack={()=>{navigator.pop()}} /> ); break;
      case "main"     : return( <Main openMenu={()=>{e.props.openMenu2()}} /> ); break;
      case "register" : return( <Register /> ); break;
      case "shoppinghistory" : return( <ShoppingHistory /> ); break;
    }
  }
  GOTO(){
    e.refs.nav.push({name:"login"});
  }
  render(){
    return(
      <Navigator ref="nav"  initialRoute={{name:"main"}}
                  renderScene={this.renderScene}
      />
    );
  }
}
