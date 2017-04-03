import React, {Component} from "react";
import {View} from "react-native";
import Drawer from 'react-native-drawer';
import Root from "./Root.js";
import MenuLeft from "./MenuLeft/MenuLeft.js";

export default class HomeScene extends Component{
  constructor(props){
    super(props);
  }
  closeControlPanel = () => {
    this._drawer.close()
  }
  openControlPanel = () => {
    this._drawer.open()
  }
  render () {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={<MenuLeft
          gotoNew={()=>{
            this.refs.root.GOTO();
            this.closeControlPanel();
          }} />}
        tapToClose={true}
        openDrawerOffset={0.2}
        >
        <Root ref="root" openMenu2={()=>{this.openControlPanel()}} />
      </Drawer>
    )
  }
}
