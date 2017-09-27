import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';
import Footer from './Footer';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/TodoFilter';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed,
};

class MainSection extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: SHOW_ALL };
    this.handleClearCompleted = this.handleClearCompleted.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClearCompleted() {
    this.props.actions.clearCompleted();
  }

  handleShow(filter) {
    this.setState({ filter });
  }

  renderToggleAll(completedCounter) {
    const { todos, actions } = this.props;
    if (todos.length > 0) {
      return (
        <input
          className="toggle-all"
          type="checkbox"
          checked={completedCounter === todos.length}
          onChange={actions.completeAll}
        />
      );
    }
    return null;
  }

  renderFooter(completedCounter) {
    const { todos } = this.props;
    const { filter } = this.state;
    const activeCounter = todos.length - completedCounter;

    if (todos.length) {
      return (
        <Footer
          completedCounter={completedCounter}
          activeCounter={activeCounter}
          filter={filter}
          onClearCompleted={this.handleClearCompleted}
          onShow={this.handleShow}
        />
      );
    }
    return null;
  }

  render() {
    const { todos, actions } = this.props;
    const { filter } = this.state;

    const filteredTodos = todos.filter(TODO_FILTERS[filter]);
    const completedCounter = todos.reduce(
      (count, todo) => (todo.completed ? count + 1 : count),
      0);

    return (
      <section className="main">
        {this.renderToggleAll(completedCounter)}
        <ul className="todo-list">
          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions} />,
          )}
        </ul>
        {this.renderFooter(completedCounter)}
      </section>
    );
  }
}

MainSection.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  actions: PropTypes.shape({
    addTodo: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    completeAll: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
  }).isRequired,
};
