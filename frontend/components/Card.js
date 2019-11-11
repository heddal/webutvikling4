import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, TouchableHighlight, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { GetData, UpdatePopulatiry } from '../api/fetchers'
import { ScrollView } from 'react-native-gesture-handler';


class Card extends Component {
    state ={
        data: [],
    }

    componentWillMount(){
        this.checkPage()
    }

    setData(input) {
        GetData(input).then((res) => this.setState({data: res.data.data}))
    }

    checkPage(){
        if(this.props.page === "Home"){
            this.setData(5)
        if(this.props.page === "Explore"){
            if(this.props.word === "all"){
                if(this.props.continent === 'all'){
                    this.setData()
                }else{
                    this.setData(this.props.continent)}
            }else if(this.props.continent === 'all'){
                this.setData(this.props.word)
            }else{this.setData(this.props.continent + "/" + this.props.word)}
        }
        }
    }

    
    
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
                height: 250,
            },
            Image: {
                width: 300,
                height: 200,
                resizeMode: 'contain',
                alignSelf: "center"
            }
        })
        const { data } = this.state
        console.log(data)
        const dataCards = data.map(dat => {
            return (
                <TouchableHighlight key={dat._id} underlayColor = 'white' onPress = {() => Alert.alert("HEI")}>
                    <View style = {styles.container}>
                        <View><Image style={styles.Image} source={{uri: dat.img}}/></View>
                        <View><Text> {dat.name} </Text></View>
                    </View>
                </TouchableHighlight>
            );
        })
        return(
            <ScrollView>
                {dataCards}
            </ScrollView>
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
