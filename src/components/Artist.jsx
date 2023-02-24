const Artist = (artistInfo) => {
  return `
      <div class="col-sm-auto col-md-auto text-center mb-5">
        <a href="/album_page.html?id=${artistInfo.album.id}">
          <img class="img-fluid" src=${
            artistInfo.album.cover_medium // creating the album image anchor
          } alt="1" /> 
        </a>
        <p>
          <a href="#">
            Track: "${
              artistInfo.title.length < 16
                ? `${artistInfo.title}`
                : `${artistInfo.title.substring(0, 16)}...` // setting the track title, if it's longer than 16 chars cuts the rest
            }"
          </a><br>
          <a href="/album_page.html?id=${artistInfo.album.id}">
            Album: "${
              artistInfo.album.title.length < 16
                ? `${artistInfo.album.title}`
                : `${artistInfo.album.title.substring(0, 16)}...` // setting the track title, if it's longer than 16 chars cuts the rest
            }"
          </a>
        </p>
      </div>`;
};

export default Artist;
