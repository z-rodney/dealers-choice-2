import React from "react"
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import Header from './Header'

//import any sub-components

class _App extends React.Component {
	//constructor to initialize state
	//any lifecycle methods
	//any custom methods
	//render
	render() {
		return (
			<Router>
			<Header/>
			<div>
					<ErrorPage />
					<Route path='/products' exact />
					<Route path='/products/add' exact />
					<Route path='/products/:id' exact/>
			</div>
			</Router>
		)
	}
}

export default connect()(_App)
