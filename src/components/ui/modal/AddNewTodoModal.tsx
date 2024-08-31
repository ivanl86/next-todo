import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Input, Textarea } from "@nextui-org/input";
import { useRef } from "react";
import ConfirmButton from "./components/ConfirmButton";
import CancelButton from "./components/CancelButton";
import ClearButton from "./components/ClearButton";

interface AddNewTodoModalProps {
  isDisabled?: boolean;
  onSubmit: (formData: FormData) => void;
}

const AddNewTodoModal = ({ isDisabled, onSubmit }: AddNewTodoModalProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const ref = useRef<HTMLFormElement>(null);

  const onClear = () => {
    ref.current?.reset();
  };

  return (
    <>
      <Button isDisabled={isDisabled} onPress={onOpen} color="primary" className="sm:w-36">
        Add a task
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        size="lg"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Add a task</ModalHeader>
              <form
                ref={ref}
                action={(formData) => {
                  onSubmit(formData);
                  onClose();
                }}
              >
                <ModalBody>
                  <Input
                    type="text"
                    name="title"
                    placeholder="Enter a title"
                    required
                  />

                  <Textarea
                    name="description"
                    placeholder="Enter a description"
                    minRows={12}
                    maxRows={12}
                    required
                  />
                </ModalBody>

                <ModalFooter className="flex flex-col min-[320px]:flex-row">
                  <ClearButton onClear={onClear} />

                  <CancelButton onClose={onClose} />

                  <ConfirmButton />
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddNewTodoModal;
