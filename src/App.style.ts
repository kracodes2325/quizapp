import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/miles.jpg';

export const GlobalStyle = createGlobalStyle`
html{
    height: 100%;
}
body{
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}

*{
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #756848;
  }

  .score {
    color: #756848;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    background-image: linear-gradient(180deg, #fff, #308527);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #324527);
    font-size: 70px;
    text-align: center;
    font-family: 400;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background-image: linear-gradient(180deg, #fff, #308527);
    border: 2px solid #324527;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
