import React from "react"
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'
//import ErrorPage from './ErrorPage'
import Header from './Header'
import Home from './Home'
import ProductsList from './ProductsList'

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
					<Route path='/' exact component={Home}/>
					<Route path='/products' component={ProductsList} />
					<Route path='/products/add' />
					<Route path='/products/:id'/>
			</div>
			</Router>
		)
	}
}

export default connect(null, null)(_App)
