import React, { Component } from 'react';
import { GetAllData } from '../api/fetchers';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';

class Test extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        var dataen = GetAllData()
        //console.log(" ELHRGOIEHRGOIH", data)
        this.setState({data: dataen})
    }



    state = {  }
    render() { 

        return ( 
            <View>
                {console.log(this.state.data, "\n tjohei")}
            </View>
            
         );
    }
}

const mapStateToProps = (state) => { //give us accsess to the data in store
    return {
      data: state.data.data
    }
  }

 
export default connect(mapStateToProps)(Test);