import React, { Component } from 'react';
import {GetAllData, GetDataFromSearch} from '../../backend/fetchers'
import {View, Text} from 'react-native';

class Test extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        this.getDataFromDb()
    }

    getDataFromDb = () => {
        this.setState({data: GetAllData()})
    } 

    state = {  }
    render() { 

        return ( 
            <View>
                <Text>{console.log(this.state.data, "\n tjohei")}</Text>
            </View>
            
         );
    }
}

 
export default Test;