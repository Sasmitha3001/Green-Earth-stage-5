import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import db from '../config'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import { ListItem } from 'react-native-elements';

export default class SuggestionScreen1 extends Component{
  constructor(){
    super()
    this.state={
      allIdeas:[]
    }
  }
  getAllIdeas=()=>{
    var allIdeas=[]
    db.collection('best_out_waste').onSnapshot(snapshot=>{
      snapshot.docs.map(doc=>{var document=doc.data();
      allIdeas.push(document);
    this.setState({
      allIdeas:allIdeas
    })})
    })
  }
  componentDidMount(){
    this.getAllIdeas()
    console.log(this.state.allIdeas)
  }
  keyExtractor=(item,index)=>{index.toString()}

  renderItem=(i,item)=>{
    return(
   
      <View>
      {console.log(item)}
      {/* <ListItem
      key={i}
      title={item.title}
      subtitle={item.idea}
      titleStyle={{fontSize:25,fontWeight:'bold'}}
      bottomDivider
      /> */}
      <Text style={{fontWeight:'bold'}}>{item.title}</Text>
      <Text style={{color:'grey'}}>{item.idea}</Text>
      <View style={{ borderBottomColor: 'black', borderBottomWidth: 1,}} />
      </View>
    )
  }


    render(){
      return (
      this.state.allIdeas.length===0?(
        <SafeAreaProvider>
      <View>
        <Text>List of all best out of waste ideas</Text>
      </View>
      </SafeAreaProvider>
      )
      :(
        <SafeAreaProvider>
      <View>
        {/* <FlatList
        keyExtractor={this.keyExtractor}
        data={this.state.allIdeas}
        renderItem={this.renderItem}
        /> */} <Text>All ideas</Text>
        {console.log(this.state.allIdeas)}
      </View>
      </SafeAreaProvider>
      )
      
        )
    }
   
  }
  
  