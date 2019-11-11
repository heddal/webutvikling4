import axios from "axios"

// Checks what the input is, and returns the correct fetch-URL
// based on the input. 
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

// The only method that fetches data from database. 
// Creates proper URL and fetches the data with axios
export const GetData = async (input) => {
    const url = createURL(input)
    return await axios.get(url).catch((err) => {console.log("Error from axios: ", err)})
}

// Update function for when a card is clicked 
// Updates the populatiry of that destination
export const UpdatePopulatiry =(destinationID, newPopularity) => {
    axios.post("http://it2810-10.idi.ntnu.no:3001/api/updateData", {
        id: destinationID,
        update: { popularity: newPopularity },
    })
}
