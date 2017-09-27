import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/';

function App({ todos, actions }) {
  return (
    <div>
      <Header addTodo={actions.addTodo} />
      <MainSection actions={actions} todos={todos} />
    </div>
  );
}

App.propTypes = {
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

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
