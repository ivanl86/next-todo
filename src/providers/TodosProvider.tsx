"use client";

import { Todo } from "@prisma/client";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

interface TodosContextProps {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

const TodosContext = createContext<TodosContextProps | undefined>(undefined);

interface TodosProviderProps extends PropsWithChildren {
  fetchedTodos: Todo[];
}

const TodosProvider = ({ children, fetchedTodos }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>(fetchedTodos);
  const memoTodos = useMemo(() => ({ todos, setTodos }), [todos]);

  return (
    <TodosContext.Provider value={memoTodos}>{children}</TodosContext.Provider>
  );
};

const useTodos = () => {
  const context = useContext(TodosContext);
  if (context === undefined) {
    throw new Error("useTodos must be used within a TodosProvider");
  }
  return context;
};

export { TodosProvider, useTodos };
