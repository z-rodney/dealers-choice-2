import React from "react"
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import ProductsList from './ProductsList'
import AddEditProduct from './AddEditProduct'

const App = () => {
	return (
		<Router>
			<Header/>
			<div>
				<Route path='/' exact component={Home}/>
				<Route path='/products' exact component={ProductsList} />
				<Route path='/add' exact component={AddEditProduct}/>
				<Route path='/products/:id' exact component={AddEditProduct}/>
			</div>
		</Router>
	)
}


export default App
