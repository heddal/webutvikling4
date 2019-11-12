import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, TouchableHighlight, Image, FlatList, TouchableHighlightBase } from 'react-native';
import { connect } from 'react-redux';
import { GetData, UpdatePopulatiry } from '../../api/fetchers'
import { ScrollView } from 'react-native-gesture-handler';

class Card extends Component {
    state ={
        data: [],
        currentSerachWord: "all",
        currentPage: ""
    }

    componentWillMount(){
        this.setData(5)
    }

    setData(input) {
        GetData(input).then((res) => this.setState({data: res.data.data}))
    }

    /*checkPage(){
        console.log("PAGEN: ", this.props.page)
        //console.log(this.props.page === "Explore")
        if(this.props.page === "Home"){
            this.setData(5)}
        if(this.props.page === "Explore"){
            //console.log("INNE I DEN GRENIA ;))) ", this.props.word)
            if(this.props.word === "all"){
                if(this.props.continent === 'all'){
                    //console.log("Henter alt")
                    this.setData("")
                }else{
                    this.setData(this.props.continent)}
            }else if(this.props.continent === 'all'){
                //console.log("Henter etter søkeord: ", this.props.word)
                this.setData(this.props.word)
            }else{this.setData(this.props.continent + "/" + this.props.word)}
        } }*/
        
    

    
    
    render(){
        const styles = StyleSheet.create({
            container: {
                borderRadius: 7,
                shadowOffset: {
                    width: 0.5, height: 0.5
                },
                shadowColor: '#AAAAAA',
                shadowOpacity: 1,
                backgroundColor: 'white',
                margin: 10,
                padding: 10,
                alignItems: "center",
                height: 250
            },
            Image: {
                width: 300,
                height: 200,
                resizeMode: 'contain',
                alignSelf: "center"
            },
            name: {
                textTransform: "capitalize"
            }
        })

        const { data } = this.state
        
        return (
            <FlatList contentContainerStyle={{
                width: 350
            }}
            data = {data}
            renderItem = { ({ item }) => (<TouchableHighlight key={item._id} underlayColor = 'white' onPress = {() => Alert.alert( item.description )}>
            <View style = {styles.container}>
                <View><Image style={styles.Image} source={{uri: item.img}}/></View>
                <View><Text style = {styles.name}> {item.name} </Text></View>
            </View>
        </TouchableHighlight>)}
        
            initialNumToRender = {5}
            maxToRenderPerBatch = {10}
            windowSize = {5}
            />
        )} 
    }


const mapStateToProps = (state) => { //give us accsess to the data in store

    return {
      page: state.page.page,
      word: state.filter.searchWord,
      continent: state.filter.continent
    }
  };

export default connect(mapStateToProps)(Card);
