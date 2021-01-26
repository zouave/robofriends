import React, { Component } from 'react';


class ErrorBoundry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	ComponenetDidCatch(error, info) {
		this.setState({ hasError: true })
	}

	render() {
		if (this.state.hasError) {
			return <h1>Oops. Something went wrong!</h1>
		}
		console.log(this.props, 'props');
		return this.props.children
	}
}

export default ErrorBoundry;