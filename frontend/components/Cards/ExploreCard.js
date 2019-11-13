import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, TouchableHighlight, Image, FlatList, TouchableHighlightBase } from 'react-native';
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
        label: "SAVE AS FAVOURITE",
        currentSerachWord: "all"
    }

    componentWillMount(){
        this.checkSearchWord()
        _retrieveFavourite().then((res) => this.setState({favourite: res}))
    }

    setData(input) {
        GetData(input).then((res) => this.setState({data: res.data.data}))
    }

    checkSearchWord(){
        //console.log("INNE I DEN GRENIA ;))) ", this.props.word)
        if (this.props.word === "all"){
            if(this.props.continent === 'all'){
                //console.log("Henter alt")
                this.setData("")
            } else {
                    this.setData(this.props.continent)}
        } else if (this.props.continent === 'all'){
            //console.log("Henter etter søkeord: ", this.props.word)
            this.setData(this.props.word)
        } else {this.setData(this.props.continent + "/" + this.props.word)}

        console.log(this.state.data)
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
            }
        })
        const { data } = this.state
        const { dataElement } = this.state

        if (this.state.currentSerachWord.toLowerCase() !== this.props.word.toLowerCase()){
            this.setState({ currentSerachWord: this.props.word})
            this.checkSearchWord()
        }
        
        return (
            <View>
            <FlatList contentContainerStyle={{
                width: 350,
                paddingBottom: 85
            }}
            data = {data}
            renderItem = { ({ item }) => (<TouchableHighlight key={item._id} underlayColor = 'white' onPress = {() => this.openDetailedCard(item._id, item.popularity)}>
            <View style = {styles.container}>
                <View><Image style={styles.Image} source={{uri: item.img}}/></View>
                <View><Text style = {styles.name}> {item.name} </Text></View>
            </View>
        </TouchableHighlight>)}
        
            initialNumToRender = {5}
            maxToRenderPerBatch = {10}
            windowSize = {5}
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
        )} 
    }

const mapDispatchToProps = (dispatch) => {
    return {
        showDestination: (destinationID) => dispatch(showDestination(destinationID)),
    }
};


const mapStateToProps = (state) => { //give us accsess to the data in store

    return {
      page: state.page.page,
      word: state.filter.searchWord,
      continent: state.filter.continent
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(Card);