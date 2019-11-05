import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, TouchableHighlight } from 'react-native';

class Card extends Component {
    
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
        return(
            <TouchableHighlight underlayColor = 'inherit' onPress = {() => Alert.alert("HEI")}>
            <View style = {styles.container}> 
                <View><Text> Bildet her </Text></View>
                <View><Text> Bynavn her </Text></View>
            </View>
            </TouchableHighlight>
        )
    }
}

export default Card;
