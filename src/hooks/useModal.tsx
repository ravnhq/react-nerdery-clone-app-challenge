import { useState } from "react";

const useModal = (): { modal: boolean; handleModal: () => void } => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };
  return { modal, handleModal };
};

export default useModal;
