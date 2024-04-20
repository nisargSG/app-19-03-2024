import React, { Component } from 'react';

class ErrorBounry extends React.Component {


    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    //called when child throws error
    componentDidCatch(error, errorInfo) {
        this.setState({hasError:true})
    }

    render() {

        if(this.state.hasError){
            return <h1>Failed to fetch....</h1>
        }

        return this.props.children;


    }

}

export default ErrorBounry