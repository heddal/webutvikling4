<<<<<<< HEAD
import axios from "axios";
=======
import Axios from "axios";
>>>>>>> 456ea9fab033cf4a499117c9068a2ab9a90e3ac8

const createURL = input => {
  const API_URL = "http://it2810-10.idi.ntnu.no:3001/api/";
  if (input == undefined) {
    return API_URL + "getData";
  }
  if (typeof input == "string") {
    return API_URL + "search/" + input;
  }
  if (typeof input == "number") {
    return API_URL + "fiveMostPopular";
  }
};

<<<<<<< HEAD
export const GetData = async input => {
  const url = createURL(input);
  return await axios.get(url).catch(err => {
    console.log("Error from axios: ", err);
  });
};

export const UpdatePopulatiry = (destinationID, newPopularity) => {
  axios.post("http://it2810-10.idi.ntnu.no:3001/api/updateData", {
    id: destinationID,
    update: { popularity: newPopularity }
  });
};
=======
export const GetData = input => {
  const url = createURL(input);
  console.log("Her er url: ", url);
  return Axios.get(url);
};

/*
const UpdatePopulatiry =(destinationID, newPopularity) => {
    Axios.post(API_URL + "updateData", {
        id: destinationID,
        update: { popularity: newPopularity },
    })
}
*/
>>>>>>> 456ea9fab033cf4a499117c9068a2ab9a90e3ac8
