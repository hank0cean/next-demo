import { ButtonProps } from "@/components/Button/types";
import { ReactNode } from "react";

export type EntryLayoutActions = {
  label: ButtonProps["label"];
  href: ButtonProps["href"];
};

export type EntryLayoutProps = {
  children: ReactNode;
  actions?: EntryLayoutActions[];
  className?: string;
};
