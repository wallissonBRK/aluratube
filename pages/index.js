import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import Banner from "../src/components/Banner";
import FavList from "../src/components/FavList";


function HomePage() {
  const estilosDaHomePage = { 
    //backgroundColor: "red" 
  };

  //console.log(config.playlists);

  return (
    <>
      <CSSReset />
      <div style={estilosDaHomePage}>
        <Menu />
        <Banner imgSrc={config.bannerUrl} />
        <Header />
        <Timeline playlists={config.playlists} />
        <FavList favorites={config.favorites}></FavList>
      </div>
    </>
  );
}

export default HomePage

// function Menu() {
//   return (
//     <div>
//       Menu
//     </div>
//   )
// }

const StyledHeader = styled.div`
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    .user-info{
      margin-top: 10px;
      display: flex;
      align-items: center;
      width: 100%;
      padding: 16px 32px;
      gap: 16px;
    }
`;
function Header(props) {
  return (
    <StyledHeader>
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>
            {config.name}
          </h2>
          <p>
            {config.job}
          </p>
        </div>
      </section>
    </StyledHeader>
  )
}

function Timeline(props) {
  //console.log("dentro do componente", props.playlists);
  const playlistNames = Object.keys(props.playlists);

  // Statement
  // Retorno por expressão

  return (
    /*
    <div>
    {playlistNames.map(function(playlistName) {
        return playlistName;
    })}
    </div>
    */
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        console.log(playlistName);
        console.log(videos);
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>
                      {video.title}
                    </span>
                  </a>
                )
              })}
            </div>
          </section>

        )
      })}
    </StyledTimeline>
  )
}