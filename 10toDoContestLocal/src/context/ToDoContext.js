import React, { useContext } from "react";

export const ToDoContext = React.createContext({
  Todos: [
    {
      id: 1,
      whatTodo: "Do Work",
      State: false,
    },
  ],

  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, todo) => {},
  toggleTodo: (id) => {},
});

export const useTodo = () => {
  return useContext(ToDoContext);
};

export const TodoProvider = ToDoContext.Provider;
