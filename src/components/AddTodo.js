import React, { Component } from 'react';

export class AddTodo extends Component {
    state = {
        title: ""
    }   

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: "" });
    }

    // Why do we do it like this? It is so that you don't have to create an onchange handler for every single property, in case more are added
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                type="text" 
                name="title" 
                placeholder="Enter new todo..."
                value={this.state.title}
                style={{ flex: '10', padding: '5px' }}
                onChange={this.onChange}></input>
                <button className="btn" type="submit" style={{flex: '1'}}>Add</button>
            </form>
        );
    }
}