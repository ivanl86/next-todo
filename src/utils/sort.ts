import { Todo } from "@prisma/client";

const sortByMostRecentlyEdited = (prev: Todo, next: Todo) => {
  return next.edited_at.getTime() - prev.edited_at.getTime();
};

const sortByLeastRecentlyEdited = (prev: Todo, next: Todo) => {
  return prev.edited_at.getTime() - next.edited_at.getTime();
};

const sortByNewestToOldest = (prev: Todo, next: Todo) => {
  return next.created_at.getTime() - prev.created_at.getTime();
};

const sortByOldestToNewest = (prev: Todo, next: Todo) => {
  return prev.created_at.getTime() - next.created_at.getTime();
};

const sortByAlphabeticallyAsc = (prev: Todo, next: Todo) => {
  return prev.title.localeCompare(next.title);
};

const sortByAlphabeticallyDesc = (prev: Todo, next: Todo) => {
  return next.title.localeCompare(prev.title);
};

const getOrder = (
  sortBy: "title" | "created-at" | "edited-at",
  orderBy: "newest" | "oldest" | "A-Z" | "Z-A"
) => {
  let order = sortByMostRecentlyEdited;

  if (sortBy === "edited-at" && orderBy === "oldest") {
    order = sortByLeastRecentlyEdited;
  } else if (sortBy === "created-at") {
    order = orderBy === "newest" ? sortByNewestToOldest : sortByOldestToNewest;
  } else if (sortBy === "title") {
    order =
      orderBy === "A-Z" ? sortByAlphabeticallyAsc : sortByAlphabeticallyDesc;
  }

  return order;
};

export { getOrder };
