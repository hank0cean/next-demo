import { useCallback, useState } from "react";

export default function useModal() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onOpenModal = useCallback(() => {
    setIsOpenModal(true);
  }, [setIsOpenModal]);

  const onCloseModal = useCallback(() => {
    setIsOpenModal(false);
  }, [setIsOpenModal]);

  return {
    isOpenModal,
    onCloseModal,
    onOpenModal,
  };
}
