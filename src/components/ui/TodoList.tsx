"use client";

import { createTodo } from "@/actions/todos";
import React, { useState } from "react";
import { useTodos } from "@/providers/TodosProvider";
import CheckboxGroup from "./checkboxes/CheckboxGroup";
import Menubar from "./menubar/Menubar";
import AddNewTodoModal from "./modal/AddNewTodoModal";
import SortSelects from "./selects/SortSelects";
import { getOrder } from "@/utils/sort";
import TodoCard from "./cards/TodoCard";
import EmptyList from "./EmptyList";
import TodoListSkeleton from "./skeletons/TodoListSkeleton";
import NavbarContent from "./navbar/components/NavbarContent";
import NavbarItem from "./navbar/components/NavbarItem";
import { OrderOptions, SortOptions } from "@/types/sorting";

type TodoListProps = {
  userId: string | undefined;
  isArchived?: boolean;
  searchTerm?: string;
};

const TodoList = ({
  userId = "",
  isArchived = false,
  searchTerm,
}: TodoListProps) => {
  const { todos, setTodos } = useTodos();
  const [checkboxes, setCheckboxes] = useState<Record<string, boolean>>({
    isCompleteSelected: true,
    isNotCompleteSelected: true,
  });
  const [selects, setSelects] = useState<{
    sort: SortOptions;
    order: OrderOptions;
  }>({
    sort: "edited-at",
    order: "newest",
  });

  const onSubmit = async (formData: FormData) => {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    const res = await createTodo(userId, title, description);

    if (res.status === "error") {
      console.error(res.error);
      return;
    }

    setTodos([...todos, res.todos[0]]);
  };

  if (!todos) {
    return <TodoListSkeleton count={6} />;
  }

  let filteredTodos = searchTerm
    ? todos.filter((todo) => {
        return (
          todo.title
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase()) ||
          todo.description.includes(searchTerm)
        );
      })
    : todos.filter((todo) => {
        return isArchived ? todo.is_archived : !todo.is_archived;
      });

  filteredTodos = filteredTodos.filter((todo) => {
    if (checkboxes.isCompleteSelected && checkboxes.isNotCompleteSelected) {
      return true;
    } else if (checkboxes.isCompleteSelected) {
      return todo.is_completed;
    } else if (checkboxes.isNotCompleteSelected) {
      return !todo.is_completed;
    } else {
      return false;
    }
  });

  return (
    <>
      <Menubar>
        <NavbarContent justify="start">
          <NavbarItem>
            <SortSelects
              isDisabled={!userId}
              selects={selects}
              setSelects={setSelects}
            />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent>
          <NavbarItem>
            <AddNewTodoModal isDisabled={!userId} onSubmit={onSubmit} />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <CheckboxGroup
              isDisabled={!userId}
              checkboxes={checkboxes}
              setCheckboxes={setCheckboxes}
            />
          </NavbarItem>
        </NavbarContent>
      </Menubar>

      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
        {userId ? (
          filteredTodos.length ? (
            filteredTodos
              .sort(
                getOrder(
                  selects.sort as "title" | "created-at" | "edited-at",
                  selects.order as "newest" | "oldest" | "A-Z" | "Z-A"
                )
              )
              .map((todo) => (
                <TodoCard key={todo.id} todo={todo} setTodos={setTodos} />
              ))
          ) : (
            <section className="col-span-full row-start-8 items-center justify-center text-center">
              <EmptyList prompt={isArchived ? "No archived tasks" : ""} />
            </section>
          )
        ) : (
          <section className="col-span-full row-start-8 items-center justify-center text-center">
            <EmptyList prompt="Sign in to see your tasks" />
          </section>
        )}
      </section>
    </>
  );
};

export default TodoList;
