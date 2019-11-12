import axios from "axios"

// Checks what the input is, and returns the correct fetch-URL
// based on the input. 
const createURL = (input, sorting) => {
    const API_URL = "http://it2810-10.idi.ntnu.no:3001/api/"
    if(input == ""){
        return API_URL +"getData/" + sorting
    }
    if(typeof input == 'string'){
        var hasNumber = /\d/;
        if(hasNumber.test(input)){
            return API_URL + "getFrom/" + input
        }
        return API_URL + "search/" +  input + "/" + sorting
    }
    if(typeof input == 'number'){
        return API_URL + "fiveMostPopular"
    }
}

// The only method that fetches data from database. 
// Creates proper URL and fetches the data with axios
export const GetData = async (input, sorting) => {
    var url = createURL(input, sorting)
    console.log(url)
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
