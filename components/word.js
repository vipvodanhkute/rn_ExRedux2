import React, {Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
class Word extends Component{
  memorizedWord(){
    this.props.dispatch({
      type:'MEMORIZED',
      id:this.props.myWords.id
    })
  }
  render(){
    const {en,vn,memorized}=this.props.myWords;
    const textDecorationLine=memorized?'line-through':'none';
    const memorizedButtonText=memorized?'forger':'memorized';
    return(
      <View style={styles.container}>
        <Text style={{textDecorationLine}}>{en}</Text>
        <Text>{vn}</Text>
        <View style={styles.controller}>
            <TouchableOpacity style={styles.button} onPress={this.memorizedWord.bind(this)}>
              <Text>memorizedButtonText</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>show</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    backgroundColor:'#D2DEF6',
    padding:10,
    margin:10
  },
  controller:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  button:{
    backgroundColor:'#F5F5F5',
    padding:10
  }
})
export default connect()(Word);
