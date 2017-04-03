import React, {Component} from "react";
import {View, StyleSheet, Text, TouchableOpacity, Image} from "react-native";
import Cart     from "./Cart/Cart.js";
import Contact  from "./Contact/Contact.js";
import Home     from "./Home/Home.js";
import Search   from "./Search/Search.js";
import TabNavigator from 'react-native-tab-navigator';

export default class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      selectedTab:"home"
    }
  }

  render(){
    return(
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerLeft}
            onPress={()=>{this.props.openMenu()}}
          >
            <Image style={styles.logo} source={require("../../Images/Menu.png")} />
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <Image style={styles.logo} source={require("../../Images/Logo.jpg")} />
          </View>
        </View>
        <View style={styles.content}>
          <TabNavigator>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'home'}
              title="Home"
              onPress={() => this.setState({ selectedTab: 'home' })}>
              <Home />
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'cart'}
              title="Cart"
              onPress={() => this.setState({ selectedTab: 'cart' })}>
              <Cart />
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'search'}
              title="Search"
              onPress={() => this.setState({ selectedTab: 'search' })}>
              <Search />
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'contact'}
              title="contact"
              onPress={() => this.setState({ selectedTab: 'contact' })}>
              <Contact />
            </TabNavigator.Item>
          </TabNavigator>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  wrapper:{flex:1},
  header:{flex:1, flexDirection:"row"},
  content:{flex:10},
  headerLeft:{flex:1, justifyContent:"center", alignItems:"center", backgroundColor:"black"},
  headerRight:{flex:6, justifyContent:"center", alignItems:"center"},
  logo:{flex:1, alignSelf: 'stretch',height: undefined, width: undefined},
});
