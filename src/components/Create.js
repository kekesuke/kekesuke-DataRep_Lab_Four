import React from 'react';

export class Create extends React.Component {
    constructor() {
        super();
        //we need to bind the event handlers on constructor so we can use them among other events.
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        //Initializing local state by assigning an object to this.state
        this.state = {
            Title: '',
            Year: '',
            Poster: '',
        }
    }
    //method to check if the information is stored using and alert 
    onSubmit(e) {
        e.preventDefault();
        alert("Movie:" + this.state.Title +" " +"Year: " + this.state.Year +" "+ this.state.Poster);

    }
    //method to change the Title information for the object in the this.state  
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }
    //method to change the Year information for the object in the this.state 
    onChangeYear(e){
        this.setState({
            Year: e.target.value
        });
    }
    //method to change the Poster information for the object in the this.state 
    onChangePoster(e){
        this.setState({
            Poster: e.target.value
        });
    }
    render() {
        return (//divs/form/labels/input field to get the information and to be formated
            <div className='App'>             
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Add Movie Title</label>
                        <input type='text'
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeTitle}>
                        </input>
                    </div>
                    <div className='form-group'>
                        <label>Add Movie Year</label>
                        <input type='text'
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeYear}>
                        </input>
                    </div>
                    <div className='form-group'>
                        <label>Add Movie Poster</label>
                        <input type='text'
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangePoster}>
                        </input>
                    </div>
                    <div className='form-group'>
                        <input type='submit' value='Add Movie' className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        )
    }
}