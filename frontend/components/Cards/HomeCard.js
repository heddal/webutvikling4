import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { GetData, UpdatePopulatiry } from '../../api/fetchers'
import { ScrollView } from 'react-native-gesture-handler';
import MaterialDialog from '../DetailedCard'

class Card extends Component {
    state ={
        data: [],
        dataElement: "",
        visible: false,
        favouriteItems: []
    }

    componentWillMount(){
        this.setData(5)
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


    addFavourite(destinationID, name){
        //this.setState({visible: false})
        //Alert.alert(name, "added to favourites")
        this.setState({visible: false})
        setTimeout(()=>{Alert.alert(name + " was added to favourites")}, 1000)
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
                    paddingBottom: 65
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
                //updateCellsBatchingPeriod = {10}
                />
                 <MaterialDialog
                    title={dataElement.name}
                    scrolled
                    visible={this.state.visible}
                    onOk={() => {console.log("Favourite was pressed"); this.addFavourite(dataElement._id, dataElement.name)}}
                    onCancel={() => {console.log("Cancel was pressed"); this.setState({visible: false})}}
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
      sort: state.sort.sortType
    }
};


const mapDispatchToProps = (dispatch) => {
return {
    showDestination: (destinationID) => dispatch(showDestination(destinationID)),
}
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
