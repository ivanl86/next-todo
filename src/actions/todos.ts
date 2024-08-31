"use server";

import db from "@/db/prisma";
import { Todo } from "@prisma/client";

interface SuccessResponse {
  status: "ok";
  todos: Todo[];
}

interface ErrorResponse {
  status: "error";
  error: Error;
}

const findAllTodos = async (
  userId: string
): Promise<SuccessResponse | ErrorResponse> => {
  try {
    const todos = await db.todo.findMany({
      where: {
        user_id: userId,
      },
    });
    return {
      todos: todos,
      status: "ok",
    };
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      error: error as Error,
    };
  }
};

const createTodo = async (
  userId: string,
  title: string,
  description: string
): Promise<SuccessResponse | ErrorResponse> => {
  try {
    const todo = await db.todo.create({
      data: {
        user_id: userId,
        title: title,
        description: description,
      },
    });
    return {
      todos: [todo],
      status: "ok",
    };
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      error: error as Error,
    };
  }
};

const updateTodo = async (
  todo: Pick<Todo, "id" | "user_id"> & Partial<Todo>
): Promise<SuccessResponse | ErrorResponse> => {
  try {
    const updatedTodo = await db.todo.update({
      where: {
        id: todo.id!,
        user_id: todo.user_id!,
      },
      data: {
        edited_at: new Date(),
        ...todo,
      },
    });
    return {
      status: "ok",
      todos: [updatedTodo],
    };
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      error: error as Error,
    };
  }
};

const upsertTodo = async (
  todo: Partial<Todo>
): Promise<SuccessResponse | ErrorResponse> => {
  console.log("ID:", todo.id);
  try {
    const updatedTodo = await db.todo.upsert({
      where: {
        id: todo.id!,
        user_id: todo.user_id!,
      },
      update: {
        ...todo,
      },
      create: {
        user_id: todo.user_id!,
        title: todo.title!,
        description: todo.description!,
      },
    });
    return {
      status: "ok",
      todos: [updatedTodo],
    };
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      error: error as Error,
    };
  }
};

const deleteTodo = async (
  todo: Pick<Todo, "id" | "user_id">
): Promise<SuccessResponse | ErrorResponse> => {
  try {
    const deletedTodo = await db.todo.delete({
      where: {
        id: todo.id!,
        user_id: todo.user_id!,
      },
    });
    return {
      status: "ok",
      todos: [deletedTodo],
    };
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      error: error as Error,
    };
  }
};

export { createTodo, findAllTodos, updateTodo, upsertTodo, deleteTodo };

export type { SuccessResponse, ErrorResponse };
