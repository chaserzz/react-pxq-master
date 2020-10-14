import { createGlobalStyle  } from 'styled-components'
export const Globalstyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  font-family:Helvetica Neue,Helvetica,STHeiTi,sans-serif;
  -webkit-font-smooth:antialiased;
  box-sizing:border-box;
  font-weight:400;
}
html {
    font-size: calc(100vw /20);
}
body{
  background-color:#f5f5f5;
}
input{
  border:none;
  outline:none;
  ::focus{
    border:none;
  }
}
a{
  text-decoration:none;
  outline:none;
  :focus{
    border: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    outline: none；
  }
}
button{
  outline:none;
  border:none;
}
li{
  list-style:none;
}
`