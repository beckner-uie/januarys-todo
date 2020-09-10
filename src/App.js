import React from "react";
import "./App.scss";

import profileImg from "./images/january.jpg";
import Nav, { SideBar } from "./components/Nav";
import TodoItem from "./components/TodoItem";

class App extends React.Component {
  state = {
    profile: {
      user: "January O'Brien",
      profileImg: profileImg,
    },
    todoList: [
      {
        id: 1,
        title: "Pick up clothes from cleaners",
        
        completed: false,
      },
      {
        id: 2,
        title: "Order groceries for the week",
    
        completed: false,
      },
      {
        id: 3,
        title: "Clean out garage",
        completed: true,
      },
    ],
    newTodoDescription: "",
  };

  handleChangeNewTodo = (event) => {
    const value = event.target.value;
    this.setState({ newTodoDescription: value });
  };
  handleAddNewTodo = () => {
this.setState(state=> {
  return{
    todoList:[
      ...state.todoList, 
      {id:4, title:state.newTodoDescription,completed:false}
    ],
    newTodoDescription:"",

  };
});
  };

  render() {
    return (
      <>
        <Nav profile={this.state.profile} />
        <div style={styles.container}>
          <SideBar />
          <TodoItem todoList={this.state.todoList} />
          <div style={styles.newtask}>
            <input
              style={styles.input}
              onChange={this.handleChangeNewTodo}
              value={this.state.newTodoDescription}
              type="text"
            />
            <button style={styles.button}
            onClick={this.handleAddNewTodo}>Add new Task</button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
  },
  newtask: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "5%",
    padding: "10%",
  },
  button: {
    marginLeft: "36%",
    marginTop: "4%",
    width: "25%",
    padding: "4%",
    fontSize: "10px",
    fontWeight: "bolder",
    color: "#D8E1FF",
    backgroundColor: "#DBBADD",
    borderRadius: "50%",
  },
  input: {
    height: "100px",
    borderColor: "#D8E1FF",
    color: "#BE92A2",
  },
};
