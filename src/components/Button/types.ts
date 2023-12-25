export type ButtonProps = {
  className?: string;
  onClick: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
  label?: string;
  dataTour?: string;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  loading?: boolean;
  loadingText?: string;
  loadingIcon?: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "warning"
    | "success";
  size?: "small" | "medium" | "large";
  href?: string;
  target?: string;
  rel?: string;
};
