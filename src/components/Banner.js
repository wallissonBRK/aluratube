import styled from "styled-components";

const StyledBanner = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 200px;
    background-image: url(${props => props.imgSrc});
    background-position: center;
`;

const Banner = (props) => {
    return <StyledBanner imgSrc={props.imgSrc}></StyledBanner>;
};

export default Banner;