import axios from "axios"

const createURL = (input) => {
    const API_URL = "http://it2810-10.idi.ntnu.no:3001/api/"
    if(input == undefined){
        return API_URL +"getData"
    }
    if(typeof input == 'string'){
        return API_URL + "search/" +  input
    }
    if(typeof input == 'number'){
        return API_URL + "fiveMostPopular"
    }
}

export const GetData = async (input) => {
    const url = createURL(input)
    return await axios.get(url).catch((err) => {console.log("Error from axios: ", err)})
}



/*
const UpdatePopulatiry =(destinationID, newPopularity) => {
    Axios.post(API_URL + "updateData", {
        id: destinationID,
        update: { popularity: newPopularity },
    })
}
*/