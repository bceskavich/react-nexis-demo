// Simple component to render each item in our TODO list
class TodoItem extends React.Component {
  // We'll use the state in this component to manage the class of our list item
  constructor(props) {
    super(props);
    this.state = {
      itemClass: 'regular'
    };
  }

  // Render the list item with the text in its body
  // Also include the changeEmphasis() method for when the user clicks
  render() {
    return (
      <li
        className={this.state.itemClass}
        onClick={this.changeEmphasis.bind(this)}
      >
        {this.props.text}
      </li>
    );
  }

  // Change the class back and forth on item click: bolded vs. regular
  changeEmphasis() {
    this.setState({
      itemClass: this.state.itemClass === 'regular' ? 'bolded' : 'regular'
    });
  }
}

// Root component of our Todo App
class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    /** Our initial state, which includes:
     *  A) Initial TODOs
     *  B) A spot for our new todo form
     */
    this.state = {
      todos: [
        'Build a React tutorial',
        'Teach people all the things!',
        'Go to Hack Upstate'
      ],
      newTodo: ''
    }
  }

  // Render all the things!
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
