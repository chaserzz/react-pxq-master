import React from 'react'
import Home from './page/home'
import Balance from './page/balance'
import HelpCenter from './page/helpCenter'
//全局样式引入
import {Globalstyle} from './style'
import { HashRouter, Route, } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Globalstyle />
      <HashRouter>
        <Route path='/home' component={Home} />
        <Route path='/balance' component={Balance} />
        <Route path='/help' component={HelpCenter} />
      </HashRouter>
    </div>
  );
}

export default App;
