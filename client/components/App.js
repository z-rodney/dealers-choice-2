import React from "react"
import { connect } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import ErrorPage from './ErrorPage'

//import any sub-components

class _App extends React.Component {
	//constructor to initialize state
	//any lifecycle methods
	//any custom methods
	//render
	render() {
		return (
			<Router>
			<div>
				<ErrorPage/>
			</div>
			</Router>
		)
	}
}

export default connect()(_App)
