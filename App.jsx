import React from 'react';
import Second from "./Second.jsx";
import Login from "./Login.jsx";
import Buttonn from "./Buttonn.jsx";
import Third from './Third.jsx';

function App() {
  return (
    <>
      <Login/>
      <Buttonn text="Google" src="/google.png"/>
      <Buttonn text="Github" src="/github.png"/>
      <Second/>
      <Third/>
    </>
  );
}

export default App;
