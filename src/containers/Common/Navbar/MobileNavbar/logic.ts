"use client";

import { useState } from "react";

export function useMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const onClickMenu = () => setIsMenuOpen((prev) => !prev);

  return {
    onClickMenu,
    isMenuOpen,
  };
}
