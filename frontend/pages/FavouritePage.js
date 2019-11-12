import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { _retrieveFavourite, GetData } from '../api/fetchers'

class FavouritePage extends Component {
    state = {  
        favourite: "",
        dataElement: ""
    }

    componentDidMount(){
        _retrieveFavourite().then((res) => {this.setState({favourite: res})});
        setTimeout(()=>GetData(this.state.favourite, "").then((res) => this.setState({dataElement: res.data.data})), 20)
        //GetData(this.state.favourite, "").then((res) => this.setState({dataElement: res.data.data}))
    }



    render() { 
        const { dataElement } = this.state

        const styles = StyleSheet.create({
            image:{
                width: 400,
                height: 300,
                resizeMode: 'contain',
                alignSelf: "center",
            },
            container: { 
                flexDirection: "column",
                alignItems: "center",
                paddingTop: 50,
                flex: 1,
                backgroundColor: 'aliceblue'
            },
        })
        return ( 
            <View style={styles.container}>
                <Text style={{fontSize: 28, textAlign: "center", padding: 8}}>Your favourite destination</Text>
                <Text style={{fontSize: 20, textAlign: "center", padding: 8}}>{dataElement.name}</Text>
                <Text style={{fontSize: 16, textAlign: "center", padding: 8}}>{dataElement.country}/{dataElement.continent}</Text>
                <Image style={styles.image} source={{uri: dataElement.img}}></Image>
                <Text style={{fontSize: 16, textAlign: "center", padding: 8}}>{dataElement.description}</Text>
                <Text style={{fontSize: 12, textAlign: "center", padding: 8}}>The description collected is from {dataElement.source}</Text>


            </View>
         );
    }
}

export default FavouritePage;