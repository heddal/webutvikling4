import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, FlatList, Alert } from 'react-native';
import { connect } from 'react-redux';
import { GetData, UpdatePopulatiry, _retrieveFavourite, _storeFavourite, _removeFavourite } from '../../api/fetchers'
import { ScrollView } from 'react-native-gesture-handler';
import MaterialDialog from './DetailedCard';
import { showDestination } from '../../actions/DestinationAction'


class Card extends Component {
    state ={
        data: [],
        dataElement: "",
        visible: false,
        favourite: "",
        label: "SAVE AS FAVOURITE"
    }

    componentWillMount(){
        this.setData(5)
        _retrieveFavourite().then((res) => this.setState({favourite: res}))
    }

    setData(input) {
        GetData(input, this.props.sort).then((res) => this.setState({data: res.data.data}))
    }

    openDetailedCard(destinationID, popularity){
        GetData(destinationID, "").then((res) => this.setState({dataElement: res.data.data}))
        this.setState({visible: true})
        this.props.showDestination(destinationID);
        newPop = popularity + 1
        UpdatePopulatiry(destinationID, newPop);
    }


    addFavourite(destinationID, name, okLabel){
        this.setState({visible: false})
        if(okLabel == "SAVE AS FAVOURITE"){
            setTimeout(()=>{Alert.alert(name + " was set as favourite location")}, 1000)
            _storeFavourite(destinationID).then((res) => this.setState({favourite: res}))
            
        }
        else if(okLabel == "REMOVE AS FAVOURITE"){
            setTimeout(()=>{Alert.alert(name + " was removed as favourite location")}, 1000)
            _removeFavourite().then(() => this.setState({favourite: ""}))
        }
        
    }

    isFavourite(destinationID){
        if(destinationID == this.state.favourite){
            return "REMOVE AS FAVOURITE"
        }
        return "SAVE AS FAVOURITE"
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
            },
            scrollViewContainer: {
                paddingTop: 8,

            },
            row: {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
            },
            text: {
                paddingTop: 8,
            }
            
        })

        const { data } = this.state
        const { dataElement } = this.state
        return (
            <View>
                <FlatList contentContainerStyle={{
                    width: 350,
                    paddingBottom: 80
                }}
                data = {data}
                renderItem = { ({ item }) => (
                <TouchableHighlight key={item._id} underlayColor = 'white' onPress = {() => this.openDetailedCard(item._id, item.popularity)}>
                    <View style = {styles.container}>
                        <View><Image style={styles.Image} source={{uri: item.img}}/></View>
                        <View><Text style = {styles.name}> {item.name} </Text></View>
                    </View>
                </TouchableHighlight>)}
            
                initialNumToRender = {5}
                maxToRenderPerBatch = {10}
                windowSize = {5}
                keyExtractor={(item, index) => index.toString()}
                />
                
                 <MaterialDialog
                    title={dataElement.name}
                    scrolled
                    visible={this.state.visible}
                    okLabel = {this.isFavourite(dataElement._id)}
                    onOk={() => {this.addFavourite(dataElement._id, dataElement.name, this.isFavourite(dataElement._id))}}
                    onCancel={() => {this.setState({visible: false})}}
                >
                    
                    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                        <View style={styles.row}>
                            <Image style={styles.Image} source={{uri: dataElement.img}}/>
                            <Text style={styles.text}>{dataElement.description}</Text>
                        </View>
                    </ScrollView>
                </MaterialDialog>
        </View> 
        )} } 


const mapStateToProps = (state) => { //give us accsess to the data in store

    return {
      page: state.page.page,
      word: state.filter.searchWord,
      continent: state.filter.continent,
      destinationID: state.destination.destinationID,
      sort: state.sort.sortType,
    }
};


const mapDispatchToProps = (dispatch) => {
return {
    showDestination: (destinationID) => dispatch(showDestination(destinationID)),
}
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
