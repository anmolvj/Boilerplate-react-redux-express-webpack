import React, { propTypes } from 'react'


class AnotherComponent extends React.Component{
	constructor(props){
		super(props);
	}

	render() {
		return(
			<div>
				<h2>This is AnotherComponent being rendered inside our single page app</h2>
			</div>
		)
	}
}


export default AnotherComponent;