import React, {Component} from "react";
import {View, StyleSheet, Text, Image,ListView, Dimensions, ScrollView, TouchableOpacity} from "react-native";
import Swiper from 'react-native-swiper';

export default class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      w:Dimensions.get('window').width,
      h:Dimensions.get('window').height,
      dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
    }
  }
  render(){
    return(
      <ScrollView>
        <View style={{height:this.state.w/2.5}}>
          <Swiper

            showsButtons={true}
            autoplay={true}
            height={this.state.w/2.5}
            >
            <Image style={{width:this.state.w, height:this.state.w/2.5}} source={require("../../../Images/1.jpg")} />
            <Image style={{width:this.state.w, height:this.state.w/2.5}} source={require("../../../Images/2.jpg")} />
            <Image style={{width:this.state.w, height:this.state.w/2.5}} source={require("../../../Images/3.jpg")} />
          </Swiper>
        </View>
        <View style={{height:this.state.w/2.5, flexDirection:"row"}}>
          <TouchableOpacity>
            <Image style={{
                width:this.state.w/3, height:this.state.w/2.5,
                justifyContent:"center"
              }} source={require("../../../Images/dam1.jpg")}
            >
              <Text style={styles.img}>
                ĐẦM CÔNG SỞ
              </Text>
            </Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={{
                width:this.state.w/3, height:this.state.w/2.5,
                justifyContent:"center"
              }} source={require("../../../Images/dam2.jpg")}
            >
              <Text style={styles.img}>
                ĐẦM DẠ HỘI
              </Text>
            </Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={{
                width:this.state.w/3, height:this.state.w/2.5,
                justifyContent:"center"
              }} source={require("../../../Images/dam3.jpg")}
            >
              <Text style={styles.img}>
                VÁY CHỐNG NẮNG
              </Text>
            </Image>
          </TouchableOpacity>
        </View>
        <View style={{height:this.state.h/20, backgroundColor:"black", justifyContent:"center"}}>
          <Text style={{color:"white", paddingLeft:7}}>MẪU MỚI RA MẮT</Text>
        </View>
        <View style={styles.content}>
          <ListView
            contentContainerStyle={styles.list}
            dataSource={this.state.dataSource}
            renderRow={(rowData)=>
              <View style={{width:this.state.w/2, borderWidth:1}}>
                <Image
                  style={{width:this.state.w/2.2, height:this.state.w/2.2*1.3}}
                  source={{uri:"http://kkfashion.vn/wp-content/uploads/images/356_520/VCN06/vay-chong-nang-vcn06-05.jpg"}} />

                <Text>{rowData}</Text>
              </View>
            }
          >
          </ListView>
        </View>
      </ScrollView>
    );
  }

  componentDidMount(){
    var mang=["1","2","3", "4", "5", "6", "7", "8", "9"];
    this.setState({
      dataSource:this.state.dataSource.cloneWithRows(mang)
    });
  }
}

var styles=StyleSheet.create({
  wrapper:{flex:1},

  content:{},
  bar:{flex:0.2, backgroundColor:"gray", justifyContent:"center"},
  img:{backgroundColor: 'rgba(52, 52, 52, 0.8)', color:"white", textAlign:"center", padding:5, fontSize:10},

  list:{flexDirection:"row", flexWrap:"wrap", alignItems: 'flex-start'}

});
