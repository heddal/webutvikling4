import Axios from "axios"



const API_URL = "http://it2810-10.idi.ntnu.no:3001/api/"

export const GetAllData = () => {
    console.log("we're in")
    fetch(API_URL + "getData")
        .then((data) => data.json())
        .then((res) => {console.log("Dette er dataen: \n", res.data);return res.data})
}
/*
const GetDataFromSearch = (search) => {
    fetch(API_URL + "search/" + search)
        .then((data) => data.json())
        .then((res) => {this.props.setData(res.data)})
        .then(console.log("Satt data i redux"))
}


const GetDataFromId = (destinationID) => {
    fetch(API_URL + "getDataFrom/" + destinationID)
        .then((data) => data.json())
        .then((res) => {this.props.setData(res.data)})
        .then(console.log("Satt data i redux"))
}

/*
const UpdatePopulatiry =(destinationID, newPopularity) => {
    Axios.post(API_URL + "updateData", {
        id: destinationID,
        update: { popularity: newPopularity },
    })
}


const mapDispatchToProps = (dispatch) => {
    return {
      setData: (data) => dispatch(setData(data)),
      showDestination: (destinationID) => dispatch(showDestination(destinationID)),
    }
  };

//export default connect(null, mapDispatchToProps)({GetAllData, GetDataFromSearch, GetDataFromId, UpdatePopulatiry})
//export default connect(null, mapDispatchToProps)(GetAllData)
*/