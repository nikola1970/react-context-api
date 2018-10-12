import React from "react";
import { TodosContext } from "./TodosContext";

class List extends React.Component {
    render() {
        return (
            <TodosContext.Consumer>
                {({ removeTodo, todos }) => (
                    <ul>
                        {todos.map(todo => (
                            <li key={todo.id} onClick={() => removeTodo(todo.id)}>
                                {todo.text}
                            </li>
                        ))}
                    </ul>
                )}
            </TodosContext.Consumer>
        );
    }
}

export default List;
