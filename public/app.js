import React from 'react'
import { render } from 'react-dom' 
import Counter from "./Counter"
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import counterApp from './reducers'
import AnotherComponent from './AnotherComponent'

import { Router, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


let store = createStore(counterApp);

render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				  <Route exact path='/' component={Counter}/>
				  <Route path='/test' component={AnotherComponent}/> 
			</Switch>
		</BrowserRouter>	
	</Provider>	
	,
	document.getElementById("app")
)