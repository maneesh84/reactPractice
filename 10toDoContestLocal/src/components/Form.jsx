import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
  const [todomsg, setTodomsg] = useState("");
  const { addTodo } = useTodo();
  handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ id: Date.now(), whatTodo: todomsg, State: false });
    setTodomsg("");
  };

  return (
    <form className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        value={todomsg}
        onChange={(e) => {
          setTodomsg(e.target.value);
        }}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        onClick={handleSubmit}
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
