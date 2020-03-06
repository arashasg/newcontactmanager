import React, { Component } from 'react'
import axios from 'axios'

export default class Test extends Component {
    state={
        
    }


    render() {
        return (
            <div>
                {this.state.id}
            </div>
        )
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.data)
        .then(data =>{
            this.setState({id:data.title})
            console.log(data.title)
        } )
    }
}
