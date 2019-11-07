import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux';
import { GetData } from '../api/fetchers'

class Card extends Component {
    state ={
        data: [],
    }

    componentDidMount(){
        this.checkPage()
    }


    checkPage(){
        if(this.props.page === "Home"){
            var locations = GetData(5)
            locations.then((data) => {console.log(data);this.setState({data: data})})
            
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
                alignItems: "center"
            }
        })
        const { data } = this.state

        return(
            <View>
                {data.map(dat => {
                    <TouchableHighlight underlayColor = 'transparent' onPress = {() => Alert.alert("HEI")}>
                        <View style = {styles.container}> 
                            <View><Image source={{uri: dat.img}}/></View>
                            <View><Text> {dat.name} </Text></View>
                        </View>
                    </TouchableHighlight>
                })}
                
        
            </View>
            
        )}
}

const mapStateToProps = (state) => { //give us accsess to the data in store

    return {
      page: state.page.page,
    }
  };

export default connect(mapStateToProps)(Card);
