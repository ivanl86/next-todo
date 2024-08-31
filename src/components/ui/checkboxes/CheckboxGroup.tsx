import { Checkbox } from "@nextui-org/checkbox";
import { Dispatch, SetStateAction } from "react";

type CheckboxGroupProps = {
  isDisabled?: boolean;
  checkboxes: Record<string, boolean>;
  setCheckboxes: Dispatch<SetStateAction<Record<string, boolean>>>;
};

const CheckboxGroup = ({
  isDisabled = false,
  checkboxes,
  setCheckboxes,
}: CheckboxGroupProps) => {
  const onCompleteSelect = () => {
    setCheckboxes({
      ...checkboxes,
      isCompleteSelected: !checkboxes.isCompleteSelected,
    });
  };

  const onNotCompleteSelect = () => {
    setCheckboxes({
      ...checkboxes,
      isNotCompleteSelected: !checkboxes.isNotCompleteSelected,
    });
  };

  return (
    <div className="flex flex-col">
      <Checkbox
        isDisabled={isDisabled}
        isSelected={checkboxes.isCompleteSelected}
        onValueChange={onCompleteSelect}
        value={"Completed"}
        color="success"
        size="sm"
      >
        <p className="text-gray-600">Completed</p>
      </Checkbox>

      <Checkbox
        isDisabled={isDisabled}
        isSelected={checkboxes.isNotCompleteSelected}
        onValueChange={onNotCompleteSelect}
        value={"Not Completed"}
        size="sm"
      >
        <p className="text-gray-600">Not Completed</p>
      </Checkbox>
    </div>
  );
};

export default CheckboxGroup;
