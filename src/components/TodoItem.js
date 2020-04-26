import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
       return {
           textDecoration: this.props.todo.completed ? 'line-through' : 'none',
           background: '#f4f4f4',
           padding: '10px',
           borderBottom: '1px #ccc dotted'
       }
    }
   
    render (){
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {''}
                    {title}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    border:'none',
    padding:'5px 10px',
    borderRadius: '50%',
    cursor:'pointer',
    marginLeft: '20px'
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;
