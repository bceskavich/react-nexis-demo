class TodoItem extends React.Component {
  render() {
    return <li>{this.props.text}</li>;
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        'Teach this tutorial',
        'Answer questions'
      ],
      newTodo: ''
    }
  }

  render() {
    return (
      <div>
        <h1 className='title'>NEXIS-X React Todo App</h1>

        <input
          type='text'
          value={this.state.newTodo}
          onChange={this.onTodoInput.bind(this)}
        />
        <button onClick={this.addNewTodo.bind(this)}>Add Todo</button>

        <ul>
        {
          this.state.todos.map((item, index) => {
            return <TodoItem text={item} />;
          })
        }
        </ul>
      </div>
    );
  }

  onTodoInput(event) {
    this.setState({ newTodo: event.target.value });
  }

  addNewTodo() {
    this.setState({
      todos: this.state.todos.concat([this.state.newTodo]),
      newTodo: ''
    });
  }
}

React.render(<TodoApp />, document.getElementById('app'));
