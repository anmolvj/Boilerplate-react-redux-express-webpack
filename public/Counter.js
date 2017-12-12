import React, { propTypes } from 'react'
import { connect } from 'react-redux'
import { CounterActions } from './actions'


class App extends React.Component{
	constructor(props){
		super(props);
	}

	render() {
		return(
			<div>
				<h1>Hello React-Redux-Express</h1>
				<h2>Counter: {this.props.counter}</h2>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		testClick: () => dispatch(CounterActions("Add"))
	}
}

const mapStateToProps = (state) => {
	return state;
}

const DefautApp = connect(
	mapStateToProps,
	mapDispatchToProps

)(App)

export default DefautApp;