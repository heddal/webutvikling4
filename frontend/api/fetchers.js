import axios from "axios"

const createURL = (input) => {
    const API_URL = "http://it2810-10.idi.ntnu.no:3001/api/"
    console.log("INPUT: ", input)
    if(input == ""){
        console.log(API_URL)
        return API_URL +"getData"
    }
    if(typeof input == 'string'){
        return API_URL + "search/" +  input
    }
    if(typeof input == 'number'){
        return API_URL + "fiveMostPopular"
    }

    console.log("hentet ingenting")
}

export const GetData = async (input) => {
    const url = createURL(input)
    console.log("URL: ", url)
    return await axios.get(url).catch((err) => {console.log("Error from axios: ", err)})
}


export const UpdatePopulatiry =(destinationID, newPopularity) => {
    axios.post("http://it2810-10.idi.ntnu.no:3001/api/updateData", {
        id: destinationID,
        update: { popularity: newPopularity },
    })
}
