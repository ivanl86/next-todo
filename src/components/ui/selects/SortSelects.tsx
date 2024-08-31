import { OrderOptions, SortOptions } from "@/types/sorting";
import { Select, SelectItem } from "@nextui-org/select";
import { Dispatch, SetStateAction } from "react";

interface SortSelectsProps {
  isDisabled?: boolean;
  selects: Record<string, string>;
  setSelects: Dispatch<
    SetStateAction<{
      sort: SortOptions;
      order: OrderOptions;
    }>
  >;
}

const SortSelects = ({ isDisabled, selects, setSelects }: SortSelectsProps) => {
  const onSortSelect = (newSortKey: SortOptions) => {
    if (!newSortKey || newSortKey === selects.sort) {
      return;
    }

    const orderKey = selects.order;
    let newOrderKey = selects.order;

    if (newSortKey === "title") {
      newOrderKey = "A-Z";
    } else if (orderKey === "A-Z" || orderKey === "Z-A") {
      newOrderKey = "newest";
    }

    setSelects({ sort: newSortKey, order: newOrderKey as OrderOptions });
  };
  const onOrderSelect = (newOrderKey: OrderOptions) => {
    const orderKey = selects.order;

    if (!newOrderKey || newOrderKey === orderKey) {
      return;
    }

    const sortKey = selects.sort;
    let newSortKey = selects.sort;

    if (newOrderKey === "A-Z" || newOrderKey === "Z-A") {
      newSortKey = "title";
    } else if (sortKey === "title") {
      newSortKey = "edited-at";
    }

    setSelects({ sort: newSortKey as SortOptions, order: newOrderKey });
  };

  return (
    <div className="flex flex-col min-[320px]:flex-row items-center w-full min-[320px]:w-[17rem] gap-3">
      <Select
        size="sm"
        label="Sort by"
        isDisabled={isDisabled}
        defaultSelectedKeys={[selects.sort]}
        selectedKeys={[selects.sort]}
        onSelectionChange={(k) =>
          onSortSelect(k.currentKey as "title" | "created-at" | "edited-at")
        }
        className="max-w-[9rem]"
      >
        <SelectItem key="title" className="text-gray-600">
          Title
        </SelectItem>
        <SelectItem key="created-at" className="text-gray-600">
          Date created
        </SelectItem>
        <SelectItem key="edited-at" className="text-gray-600">
          Date edited
        </SelectItem>
      </Select>

      <Select
        size="sm"
        label="Order by"
        isDisabled={isDisabled}
        defaultSelectedKeys={[selects.order]}
        selectedKeys={[selects.order]}
        onChange={(e) =>
          onOrderSelect(e.target.value as "newest" | "oldest" | "A-Z" | "Z-A")
        }
        className="max-w-[7rem]"
      >
        <SelectItem key="newest" className="text-gray-600">
          Newest
        </SelectItem>
        <SelectItem key="oldest" className="text-gray-600">
          Oldest
        </SelectItem>
        <SelectItem key="A-Z" className="text-gray-600">
          A-Z
        </SelectItem>
        <SelectItem key="Z-A" className="text-gray-600">
          Z-A
        </SelectItem>
      </Select>
    </div>
  );
};

export default SortSelects;
