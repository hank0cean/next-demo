import { HTMLInputTypeAttribute, HTMLProps, ReactNode } from "react";
import type { FieldError } from "react-hook-form";

export type InputProps = {
  autoComplete?: string;
  className?: string;
  hideError?: boolean;
  error?: FieldError;
  helpMessage?: string;
  id: string;
  label?: string;
  message?: string;
  name: string;
  value?: string | number;
  onBlur?: HTMLProps<HTMLInputElement>["onBlur"];
  onChange?: HTMLProps<HTMLInputElement>["onChange"];
  onFocus?: HTMLProps<HTMLInputElement>["onFocus"];
  onKeyUp?: HTMLProps<HTMLInputElement>["onKeyUp"];
  pattern?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  type?: HTMLInputTypeAttribute;
  icon?: ReactNode;
};

export type StylesProps = {
  $hasError: boolean;
  type?: InputProps["type"];
};

export type ContainerProps = {
  $hideError: boolean;
};
