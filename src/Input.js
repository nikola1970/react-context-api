import React from "react";
import { TodosContext } from "./TodosContext";

class Input extends React.Component {
    state = {
        todoText: ""
    };
    handleChange = ({ target }) => {
        this.setState(() => ({ [target.name]: target.value }));
    };
    render() {
        const { todoText } = this.state;
        return (
            <TodosContext.Consumer>
                {({ addTodo }) => (
                    <form onSubmit={event => addTodo(event, todoText)}>
                        <input type="text" name="todoText" onChange={this.handleChange} />
                        <button>Add</button>
                    </form>
                )}
            </TodosContext.Consumer>
        );
    }
}

export default Input;
