import React, { Component } from 'react';
import { View, Text, FlatList} from 'react-native';
import { connect } from 'react-redux';
import Word from './word';
import Filter from './filter';
import Header from './header'
import Form from './form';
class Main extends Component {
  getWordList(){
    const {myFilter,myWords}=this.props;
    if(myFilter==='SHOW_ALL') return myWords;
    if(myFilter==='MEMORIZED') return myWords.filter(e=>e.memorized);
    if(myFilter==='NEED_PRACTICE') return myWords.filter(e=>!e.memorized);
    return myWords;
  }
  render() {
    return (
      <View style={{ backgroundColor: 'yellow', flex: 1, alignSelf: 'stretch',justifyContent:'center'}}>
        <Header/>
        <View style={{flex:10}}>
          {this.props.myIsAdding ? <Form/> : null}
          <FlatList
            data={this.getWordList()}
            renderItem={({item}) => <Word myWord={item} />}
            keyExtractor={item => item.id}
          />
        </View>
        <Filter/>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    myFilter: state.filterStatus,
    myWords: state.arrWords,
    myIsAdding:state.isAdding
  }
}
export default connect(mapStateToProps)(Main);
