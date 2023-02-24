const Album = ({ songInfo }) => {
  return (
    <div class="col-sm-auto col-md-auto text-center mb-5">
      <a href="/album_page.html?id=${songInfo.album.id}">
        <img
          class="img-fluid"
          src={
            songInfo.album.cover_medium // creating the album image anchor
          }
          alt="1"
        />
      </a>
      <p>
        <a href="#">
          Track: "
          {
            songInfo.title.length < 16
              ? songInfo.title
              : songInfo.title.substring(0, 16) + "..." // setting the track title, if it's longer than 16 chars cuts the rest
          }
          "
        </a>
        <a href="/album_page.html?id=${songInfo.album.id}">
          Album: "$
          {
            songInfo.album.title.length < 16
              ? songInfo.album.title
              : songInfo.album.title.substring(0, 16) + "..." // setting the track title, if it's longer than 16 chars cuts the rest
          }
          "
        </a>
      </p>
    </div>
  );
};

export default Album;
