import { useEffect, useState } from "react";
import Album from "./Album";
import fetchAlbums from "./fetchAlbumByQuery";
import SideBar from "./SideBar";

const Home = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [rockAlbums, setRockAlbum] = useState([]);
  const [popAlbums, setPopAlbums] = useState([]);
  const [hiphopAlbums, setHipHopAlbums] = useState([]);

  const [helloMessage, setHelloMessage] = useState("");

  const retriveData = async () => {
    let rock = await fetchAlbums("rock");
    setRockAlbum(rock.slice(0, 4));

    let pop = await fetchAlbums("pop");
    setPopAlbums(pop.slice(0, 4));

    let hiphop = await fetchAlbums("hiphop");
    setHipHopAlbums(hiphop.slice(0, 4));
  };

  const retriveSearchData = async () => {
    let data = await fetchAlbums(query.toLowerCase());
    setResults(data);
  };

  const setDayTime = () => {
    let date = new Date();
    let hour = date.getHours();
    let message = "Good ";
    switch (true) {
      case hour < 8:
        message += "night";
        console.log();
        break;
      case hour < 12:
        message += "morning";
        break;
      case hour < 18:
        message += "afternoon";
        break;
      case hour < 24:
        message += "evening";
        break;
      default:
        console.log("error in setDayTime()", hour);
    }
    setHelloMessage(message);
  };

  useEffect(() => {
    retriveData();
    setDayTime();
  }, []);

  useEffect(() => {
    if (query) {
      retriveSearchData();
    }
  }, [query]);

  return (
    <>
      <SideBar setValue={setQuery} />

      <div className="col-12 col-md-9 offset-md-3 mainPage">
        <div className="row">
          <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </div>
        </div>
        <div className="row">
          <h2 className="text-light mt-4">{helloMessage}</h2>
        </div>
        {results.length > 0 && (
          <div className="row">
            <div className="col-10">
              <div id="searchResults">
                <h2>Search Results</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                  {results.map((song) => (
                    <Album key={song.id} songInfo={song} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-10">
            <div id="rock">
              <h2>Rock Classics</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="rockSection"
              >
                {rockAlbums?.map((song) => (
                  <Album key={song.id} songInfo={song} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <div id="pop">
              <h2>Pop Culture</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="popSection"
              >
                {popAlbums?.map((song) => (
                  <Album key={song.id} songInfo={song} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <div id="hiphop">
              <h2>#HipHop</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="hipHopSection"
              >
                {hiphopAlbums?.map((song) => (
                  <Album key={song.id} songInfo={song} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
