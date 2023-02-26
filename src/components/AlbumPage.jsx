import fetchAlbumById from "./fetchAlbumById";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

const AlbumPage = () => {
  const albumId = useParams("id");
  const [album, setAlbum] = useState(null);

  const retriveDataAlbum = async () => {
    const albumData = await fetchAlbumById(albumId);
    setAlbum(albumData);
  };

  useEffect(() => {
    retriveDataAlbum();
  }, []);

  return (
    <div className="row">
      {album && (
        <>
          <div className="col-md-3 pt-5 text-center" id="img-container">
            <Image className="img-fluid" src={album.cover} alt="1" />
            <div className="mt-4 text-center">
              <p className="album-title">${album.title}</p>
            </div>
            <div className="text-center">
              <p className="artist-name">${album.artist.name}</p>
            </div>
            <div className="mt-4 text-center">
              <button id="btnPlay" className="btn btn-success" type="button">
                Play
              </button>
            </div>
          </div>
          <div className="col-md-8 p-5">
            <div className="row">
              <div className="col-md-10 mb-5" id="trackList"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AlbumPage;
