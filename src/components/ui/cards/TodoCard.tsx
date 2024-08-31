import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { useDisclosure } from "@nextui-org/modal";
import { cn } from "@nextui-org/react";
import { Todo } from "@prisma/client";
import TodoCardModal from "../modal/TodoCardModal";
import { Dispatch, SetStateAction } from "react";
import {
  deleteTodo,
  ErrorResponse,
  SuccessResponse,
  updateTodo,
} from "@/actions/todos";
import TimeStamp from "./components/TimeStamp";
import ArchiveToggleButton from "./components/ArchiveToggleButton";
import DeleteButton from "./components/DeleteButton";
import CompleteToggleButton from "./components/CompleteToggleButton";
import EditButton from "./components/EditButton";

interface TodoCardProps {
  todo: Todo;
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

const TodoCard = ({ todo, setTodos }: TodoCardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const updateTodoCard = (res: SuccessResponse | ErrorResponse) => {
    if (res.status === "ok") {
      const updatedTodo = res.todos[0];
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === updatedTodo.id ? { ...updatedTodo } : { ...todo }
        )
      );
    }
  };

  const deleteTodoCard = (res: SuccessResponse | ErrorResponse) => {
    if (res.status === "ok") {
      const deletedTodo = res.todos[0];
      setTodos((prevTodos) =>
        prevTodos.filter((todo) => todo.id !== deletedTodo.id)
      );
    }
  };

  const onArchiveToggle = async () => {
    const res = await updateTodo({
      id: todo.id,
      user_id: todo.user_id,
      is_archived: !todo.is_archived,
    });

    updateTodoCard(res);
  };

  const onDelete = async () => {
    const res = await deleteTodo({
      id: todo.id,
      user_id: todo.user_id,
    });

    deleteTodoCard(res);
  };

  const onCompleteToggle = async () => {
    const res = await updateTodo({
      id: todo.id,
      user_id: todo.user_id,
      is_completed: !todo.is_completed,
    });

    updateTodoCard(res);
  };

  const onSubmit = async (formData: FormData) => {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    const res = await updateTodo({
      id: todo.id,
      user_id: todo.user_id,
      title,
      description,
    });

    updateTodoCard(res);
  };

  return (
    <>
      <Card isHoverable>
        <CardHeader
          className={cn(
            "max-w-fit text-xl text-gray-600 text-wrap",
            todo.is_completed && "line-through decoration-danger"
          )}
        >
          {todo.title}
        </CardHeader>

        <CardBody>
          <pre className="max-w-fit text-sm text-gray-600 text-wrap">
            {todo.description}
          </pre>
        </CardBody>

        <CardFooter className="flex max-[320px]:flex-col min-[320px]:justify-between text-center sm:text-left">
          <TimeStamp createdAt={todo.created_at} editedAt={todo.edited_at} />

          <div className="flex max-[160px]:flex-col gap-1">
            <ArchiveToggleButton
              isArchived={todo.is_archived}
              onArchiveToggle={onArchiveToggle}
            />

            <DeleteButton onDelete={onDelete} />

            <CompleteToggleButton
              hidden={todo.is_archived}
              isCompleted={todo.is_completed}
              onCompleteToggle={onCompleteToggle}
            />

            <EditButton hidden={todo.is_archived} onOpen={onOpen} />
          </div>
        </CardFooter>
      </Card>

      <TodoCardModal
        title={todo.title}
        description={todo.description}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default TodoCard;
