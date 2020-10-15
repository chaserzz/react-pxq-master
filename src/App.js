import React from 'react'
import store from './store'
import {Provider} from 'react-redux'
import { HashRouter, Route, } from 'react-router-dom'
//全局样式引入
import {Globalstyle} from './style'

import Home from './page/home'
import Balance from './page/balance'
import HelpCenter from './page/helpCenter'
import Record from './page/record'
function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <Globalstyle />
          <HashRouter>
            <Route path='/home' component={Home} />
            <Route path='/balance' component={Balance} />
            <Route path='/help' component={HelpCenter} />
            <Route path='/record' component={Record} />
          </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
