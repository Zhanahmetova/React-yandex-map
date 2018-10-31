import styled, { keyframes } from "styled-components";

const Wrap = styled.div`
  padding: 1em;
  text-align: center;
  margin: auto;
  max-width: 480px;
  > div {
    margin: 0 auto 1em;
    & input,
    & button {
      outline: none;
      padding: 5px 10px;
    }
  }
`;
const MapWrap = styled.div`
  width: 100%;
  position: relative;
  & > div {
    width: 100% !important;
    height: 86vh !important;
  }
  & > div > ymaps,
  & > div > ymaps > ymaps {
    height: 100% !important;
  }
`;

const InY = keyframes`
  from{
    transform: translateY(100%);
  }

  to{
    transform: translateY(0);
  }
`;

const Card = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: ${47 / 16}rem !important;
  background: #fff;
  padding: 1rem;
  box-sizing: border-box;
  animation: ${InY} 0.3s;
`;

const Search = styled.span`
  position: absolute;
  display: block;
  width: 80%;
  padding: 0.7rem;
  top: 3rem;
  border-radius: 30px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1;
  box-shadow: 2px 4px 6px 0 rgba(0, 0, 0, 0.1);
  text-align: right;
  background: url("/assets/icons/search.svg") no-repeat 5% 50% / 23px #fff;
  > input {
    width: 90%;
    border: none;
    outline: none;
    text-align: left;
  }
`;
const MapContent = styled.div`
  top: 0;
  border: 1px solid #000;
  padding: 1em;
  width: 366px;
  text-align: left;
  ${props =>
    props.active
      ? "opacity:1; transition: opacity .5s"
      : "opacity:0; transition: opacity .5s;"};
`;
// const Search = styled.div`
//   position: relative;
//   padding: 1em;
// `;
const List = styled.div`
  position: relative;
  margin: 1em;
  text-align: left;
  display: inline-block;
  > h5 {
    margin: 0.5em;
  }
  > div > h6 {
    margin: 0.5em 0;
    line-height: 1.3;
    font-size: ${13 / 16}em;
    font-weight: 500;
  }
`;
export { Wrap, MapContent, List, MapWrap, Card, Search };
