import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }
    handlerChange = (event) => {
        this.setState({
            content: event.target.value
        }) 
    }
    handlerSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    render(){
        return (
            <div>
                <form onSubmit = { this.handlerSubmit }>
                    <label>Add new todo:</label>
                    <input type="text" onChange ={ this.handlerChange } value= { this.state.content } />
                </form>
            </div>
        )
    }
}

export default AddTodo