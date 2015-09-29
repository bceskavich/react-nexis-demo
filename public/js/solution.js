// Simple component to render each item in our TODO list
class TodoItem extends React.Component {
  render() {
    return <li>{this.props.text}</li>
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    /** Our initial state, which includes:
     *  A) Initial TODOs
     *  B) A spot for our new todo form
     */
    this.state = {
      todos: [
        'Build this tutorial',
        'Teach people all the things!'
      ],
      newTodo: ''
    }
  }

  render() {
    return (
      <div>
        <h1 className='title'>NEXIS-X React Demo</h1>

        <input
          type='text'
          value={this.state.newTodo}
          onChange={this.setNewTodoText.bind(this)}
        />
        <button onClick={this.addNewTodo.bind(this)}>Add Todo</button>

        <ul>
          {
            this.state.todos.map((todo, index) => {
              return <TodoItem key={index} text={todo} />;
            })
          }
        </ul>
      </div>
    );
  }

  // Simply updates state with the new todo text each time the user types
  setNewTodoText(event) {
    this.setState({ newTodo: event.target.value });
  }

  // Adds our new todo text to the array of todos, and resets the new todo text
  // React takes care of the rest (i.e. rendering)!
  addNewTodo() {
    this.setState({
      todos: this.state.todos.concat([this.state.newTodo]),
      newTodo: ''
    });
  }
}

// Calls our root component and renders it into the browser
React.render(<TodoApp />, document.getElementById('app'));
