import styled from "styled-components";
import FavItem from "../components/FavItem";

const StyledFavList = styled.div`
  padding: 16px;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  section {
    width: 100%;
    padding: 16px;
    div {
      display: flex;
      overflow-x: auto;
    }
  }
`;

const FavList = (props) => {
  return (
    <StyledFavList>
      <section>
        <h2>AluraTubes Favoritos</h2>
        <div>
          {props.favorites.map((favorite) => {
            return (
              <FavItem
                key={favorite.id}
                vercelLink={favorite.vercelLink}
                github={favorite.github}
              />
            );
          })}
        </div>
      </section>
    </StyledFavList>
  );
};

export default FavList;