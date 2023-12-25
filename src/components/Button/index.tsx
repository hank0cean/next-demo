import React, { ForwardedRef, forwardRef } from "react";
import RouterLink from "next/link";

import { ButtonProps } from "./types";

export default forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
    {
      className,
      children,
      onClick,
      label,
      disabled,
      type,
      dataTour,
      href,
    }: ButtonProps,
    ref
  ): JSX.Element {
    if (href) {
      return (
        <RouterLink href={href} passHref>
          <a
            className={className}
            onClick={onClick}
            type={type}
            data-tour={dataTour}
            ref={ref as ForwardedRef<HTMLAnchorElement>}
          >
            {label}
            {children}
          </a>
        </RouterLink>
      );
    }

    return (
      <button
        // ref={ref as ForwardedRef<HTMLAnchorElement>}
        className={className}
        onClick={onClick}
        disabled={disabled}
        type={type}
        data-tour={dataTour}
      >
        {label}
        {children}
      </button>
    );
  }
);
