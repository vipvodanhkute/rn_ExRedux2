import React,{Component} from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
export default class Header extends Component{
  render(){
    return(
      <View style={styles.header}>
          <Text/>
          <Text>MY WORDS</Text>
          <TouchableOpacity>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
    )
  }
}
styles=StyleSheet.create({
  header:{
    flex:1,
    backgroundColor:'#D9D9D9',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'column',
    paddingHorizontal:20
  }
})
