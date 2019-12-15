import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  *:focus{
    outline:0;
  }

  html, body, #root{
    height:100%;
  }

  body{
    -webkit-font-smoothing: antialiased;
    background: radial-gradient(circle, rgba(15,15,15,1) 0%, rgba(35,39,44,1) 100%);
  }

  body, input, button{
    font:14px 'Roboto', sans-serif;
  }

  a{
    text-decoration:none;
  }

  ul{
    list-style:none;
  }

  button{
    cursor:pointer;
  }

  .Toastify__toast
  {
    border-radius:4px !important;
  }

  .Toastify__close-button{
    margin-right:0;
    margin-top:-5px;
  }

  .Toastify__toast--error
  {
    background:#BF253F !important;
  }

  .Toastify__toast--success
  {
    background:#28A869 !important;
  }

`;
