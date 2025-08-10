import React, { useContext } from "react";

export const TodoContext = React.createContext({
  todos: [
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
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
