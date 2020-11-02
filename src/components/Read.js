import React from 'react';
import { Movies } from './Movies';
import axios from 'axios';

export class Read extends React.Component {

    state = {
        movies: []

    };
   //every time a component change a promise is send to a website that return data either succesfull or unsuccsesfull
    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
            .then((response) => {
                this.setState({ movies: response.data.Search })//setStates doing UI updates it calles the render method. 
            })
            .catch((error) => { // if its unfulfilled its gonna generate an error in the console
                console.log(error)
            });
    }

    render() {
        return (
            <div>
                <h3>Hello from my read component</h3>
                <Movies movies={this.state.movies}></Movies>
            </div>
        )
    }
}