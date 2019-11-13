import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { _retrieveFavourite, GetData } from '../api/fetchers'
import { connect } from 'react-redux';
import { setFavourite } from '../actions/setFavouriteAction'

class FavouritePage extends Component {
    state = {  
        favourite: "",
        dataElement: ""
    }

    componentDidMount(){
        _retrieveFavourite().then((res) => { this.props.setFavourite(res) })
        this.checkFavorite()
        //GetData(this.state.favourite, "").then((res) => this.setState({dataElement: res.data.data}))
    }

    checkFavorite(){

        _retrieveFavourite().then((res) => {this.setState({favourite: res})});
        setTimeout(()=>GetData(this.state.favourite, "").then((res) => this.setState({dataElement: res.data.data})), 20)
        
    }



    render() { 

        if (this.state.favourite !== this.props.fav && this.props.fav !== undefined && this.props.fav !== "") {
            this.checkFavorite()
        }

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

       /* console.log(this.state.favourite)
        console.log("Burde det funke? ")
        console.log(this.props.fav)
        console.log(this.props.fav === undefined)*/

        if (this.props.fav === "" || this.props.fav === undefined){

            return(
            <View style = {styles.container}>
                <Text style = {{fontSize: 20}}> You have not chosen a favourite destination yet! </Text>
                <Text style = {{fontSize: 14}} > Browse our app to find to find your dream destination. </Text>
            </View>)
            
        } else { 
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
    }}
}

const mapStateToProps = (state) => { //give us accsess to the data in store
    return {
      fav: state.favourite.favourite
    }
  };

const mapDispatchToProps = (dispatch) => {
    return {
        setFavourite: (fav) => dispatch(setFavourite(fav))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouritePage);