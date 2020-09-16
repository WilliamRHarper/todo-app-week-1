import React, {Component} from 'react';
import { render } from '@testing-library/react';

class TodoApp extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        isClicked: false,
        text: '',
        todos: [],
      }
    }

    componentDidUpdate() {
      console.log(this.state.todos)
    }
  
    handleClick = () => {
      this.setState({
        todos: [...this.state.todos, this.state.text],
        text: '',
        })
 
    }

    handleChange = (evt) => {
      this.setState({
          text: evt.target.value,
        })
        console.log(this.state.text);
    }

    handleDelete = (evt, todo) => {
      const filteredTodos = this.state.todos.filter((t) => t !== todo);

      this.setState({
        todos: filteredTodos,
      });
    }
  
    render() {
      return (
        <div classname='App'>
          <input type="text" onChange={this.handleChange} value={this.state.text}></input>
          <button onClick={this.handleClick}>Click me</button>
          <ul>
            {this.state.todos.map((todo, index)  => (
              <li key= {index}>
                <span>{todo}</span>
                <button onClick={(evt) => this.handleDelete(evt, todo)}>X</button>
              </li>
            ))}
          </ul>
        </div>
      )
    }
  }
  
  export default TodoApp;
