import React from "react";
import { TodosContext } from "./TodosContext";

class TodosProvider extends React.Component {
    state = {
        todos: []
    };
    addTodo = (event, todoText) => {
        event.preventDefault();
        this.setState(prevState => ({
            todos: [...prevState.todos, { text: todoText, id: Date.now() }]
        }));
    };

    removeTodo = id =>
        this.setState(prevState => ({ todos: prevState.todos.filter(todo => todo.id !== id) }));

    render() {
        const { todos } = this.state;
        const { children } = this.props;
        return (
            <TodosContext.Provider
                value={{
                    todos: todos,
                    addTodo: this.addTodo,
                    removeTodo: this.removeTodo
                }}
            >
                {children}
            </TodosContext.Provider>
        );
    }
}

export default TodosProvider;
