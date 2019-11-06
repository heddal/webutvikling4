import Axios from "axios"


const API_URL = "http://it2810-10.idi.ntnu.no:3001/api/"

export function GetAllData() {
    console.log("we're in")
    fetch(API_URL + "getData")
        .then((data) => data.json())
        .then((res) => {
            if(res.data){console.log("Should return data"); return res.data}
            else{console.log("Empty")};
        })
}

export const GetDataFromSearch = (search) => {
    fetch(API_URL + "search/" + search)
        .then((data) => data.json())
        .then((res) => {return res.data})
}


export const GetDataFromId = (destinationID) => {
    fetch(API_URL + "getDataFrom/" + destinationID)
        .then((data) => data.json())
        .then((res) => {return res.data})
}


export const UpdatePopulatiry = (destinationID, newPopularity) => {
    Axios.post(API_URL + "updateData", {
        id: destinationID,
        update: { popularity: newPopularity },
    })
}
