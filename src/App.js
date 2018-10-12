import React, { Component } from "react";
import TodosProvider from "./TodosProvider";
import Input from "./Input";
import List from "./List";

class App extends Component {
    render() {
        return (
            <div className="App">
                <TodosProvider>
                    <Input />
                    <List />
                </TodosProvider>
            </div>
        );
    }
}

export default App;
