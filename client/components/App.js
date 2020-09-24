import React from "react"
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'
//import ErrorPage from './ErrorPage'
import Header from './Header'
import Home from './Home'
import ProductsList from './ProductsList'
//import EditProduct from './EditProduct'
import AddProduct from './AddProduct'

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
					<Route path='/products' exact component={ProductsList} />
					<Route path='/add' exact component={AddProduct}/>
					<Route path='/products/:id' exact component={AddProduct}/>
			</div>
			</Router>
		)
	}
}

export default connect(null, null)(_App)
