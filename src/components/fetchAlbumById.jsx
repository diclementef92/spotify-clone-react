const fetchAlbumById = async (value) => {
  let headers = new Headers({
    // sets the headers
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
  });
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/album/" + value,
      {
        method: "GET",
        headers,
      }
    ); // gets the information
    if (response.ok) {
      let result = await response.json(); // transforms the response to json
      return result.data;
    } else {
      console.log("error");
    }
  } catch (err) {
    console.log(err);
  }
};
export default fetchAlbumById;
