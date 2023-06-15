import shortUUID from "short-uuid";
import React, { FC, useContext, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalClose,
  ModalContent,
  Input,
  ModalAction,
  ModalButton,
} from "./styles";
import { UserContext } from "../../../context/UserContext";
import { Wishlist } from "../../shared/types/types";
import { Modal as ModalProps } from "./type";
import { useWishlistContext } from "../../../context/WishlistContext";
const WishListModal: FC<ModalProps> = ({
  modal,
  handleModal,
  currentPlace,
}) => {
  /*TODO: useusercontext should expose a validate user */
  const { user } = useContext(UserContext);
  const { addWishlist } = useWishlistContext();
  const initialWishListState: Wishlist = {
    id: "",
    userId: "",
    name: "",
    list: [],
  };
  const [wishlist, setWishlist] = useState<Wishlist>(initialWishListState);
  const handleWishlist = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWishlist({ ...wishlist, name: e.currentTarget.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = shortUUID.generate();
    try {
      if (currentPlace) {
        if (user) {
          addWishlist(id, wishlist, user.id, currentPlace);
          handleModal();
        }
      }
    } catch (error) {
      console.log("error to add wishlist");
    }
  };
  return (
    <Modal modal={modal}>
      <ModalBody modal={modal}>
        <ModalHeader>
          <ModalClose onClick={handleModal} />
          <h1>Create wishlist</h1>
        </ModalHeader>
        <form>
          <ModalContent>
            <Input>
              <input
                type="text"
                name="wishlist"
                id="wishlist"
                value={wishlist.name}
                onChange={handleWishlist}
              />
              <label htmlFor="wishlist">Name</label>
            </Input>
          </ModalContent>

          <ModalAction>
            <ModalButton secondary={true}>Clear</ModalButton>
            <ModalButton
              onClick={handleSubmit}
              type="submit"
              disabled={wishlist.name === ""}
            >
              Aceptar
            </ModalButton>
          </ModalAction>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default WishListModal;
