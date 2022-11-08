import styled from "styled-components";

const StyledFavItem = styled.span`
    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    a {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-items: center;
        padding: 10px;
    }
    span {
        font-weight: 600;
        font-size: 14px;
        text-align: center;
        padding-top: 4px;
        color: ${({ theme }) => theme.textColorBase || "#222222"};
    }
`;

const FavItem = (props) => {
    return (
        <StyledFavItem>
            <a href={props.vercelLink}>
                <img src={`http://github.com/${props.github}.png`} />
                <span>@{props.github}</span>
            </a>
        </StyledFavItem>
    );
};

export default FavItem;