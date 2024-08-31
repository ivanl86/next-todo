import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import { Input, Textarea } from "@nextui-org/input";
import { useRef } from "react";
import ConfirmButton from "./components/ConfirmButton";
import CancelButton from "./components/CancelButton";

interface TodoCardModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onOpenChange: () => void;
  onSubmit: (formData: FormData) => void;
}

const TodoCardModal = ({
  title,
  description,
  isOpen,
  onOpenChange,
  onSubmit,
}: TodoCardModalProps) => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Edit</ModalHeader>
              <form
                ref={ref}
                action={(formData) => {
                  onSubmit(formData);
                  onClose();
                }}
              >
                <ModalBody>
                  <Input
                    defaultValue={title}
                    type="text"
                    name="title"
                    placeholder="Enter a title"
                    required
                  />

                  <Textarea
                    defaultValue={description}
                    name="description"
                    placeholder="Enter a description"
                    required
                  />
                </ModalBody>

                <ModalFooter>
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

export default TodoCardModal;
