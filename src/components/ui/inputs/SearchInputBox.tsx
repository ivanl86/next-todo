"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";
import { useRef } from "react";

interface SearchInputBoxProps {}

const SearchInputBox = ({}: SearchInputBoxProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const onSearch = () => {
    if (!inputRef.current) {
      return;
    }

    const searchTerm = inputRef.current.value;

    inputRef.current.value = "";
    router.push(`/search/${searchTerm}`);
  };

  return (
    <>
      <Input
        ref={inputRef}
        type="text"
        placeholder="Search tasks..."
        onKeyUp={(e) => e.key === "Enter" && onSearch()}
        className="w-full max-w-60"
      />
      <MagnifyingGlassIcon
        className="w-5 cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hidden sm:inline hover:w-6 hover:opacity-85"
        onClick={onSearch}
      />
    </>
  );
};

export default SearchInputBox;
