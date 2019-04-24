import React,{Component} from 'react'
import {View,TextInput,TouchableOpacity,StyleSheet,Text} from 'react-native'
import {connect} from 'react-redux'
class Form extends Component{
  constructor(props){
    super(props);
    this.state={
      en:'',
      vn:''
    }
    this.onAdd=this.onAdd.bind(this);
  }
  onAdd(){
    const {en,vn}=this.state;
    this.props.dispatch({
      type:'ADD_WORD',
      en,
      vn
    });
    this.props.dispatch({
      type:'TOGGLE_IS_ADDING'
    });
  }
  render(){
    return(
      <View>
        <TextInput
          style={styles.TextInput}
          value={this.state.en}
          onChangeText={text=>this.setState({en:text})}
          placeholder="English word"
        />
        <TextInput
          style={styles.TextInput}
          value={this.state.vn}
          onChangeText={text=>this.setState({vn:text})}
          placeholder="Meaning"
        />
        <TouchableOpacity onPress={this.onAdd}>
          <Text style={styles.Text}>Add</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
export default connect()(Form);
const styles=StyleSheet.create({
  TextInput:{
    height:50,
    backgroundColor:'#E4F6D4',
    margin:10,
    paddingHorizontal:10
  },
  Text:{
    textAlign:'center'
  }
})
