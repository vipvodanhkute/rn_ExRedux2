import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity,StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Word from './word';
import Filter from './filter';
import Header from './header'
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
          <FlatList
            data={this.props.getWordList}
            renderItem={(item) => <Word myWord={item} />}
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
    myWords: state.arrWords
  }
}
export default connect(mapStateToProps)(Main);
