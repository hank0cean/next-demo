import i18n from "$/utils/i18n";
import { forwardRef } from "react";

import {
  Container,
  Content,
  Error,
  Helper,
  IconWrapper,
  Label,
  SearchIconWrapper,
  StyledInput,
} from "./styles";
import type { InputProps } from "./types";

export default forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    autoComplete,
    className,
    hideError,
    error,
    icon,
    id,
    label,
    name,
    value,
    onBlur,
    onChange,
    onFocus,
    onKeyUp,
    disabled,
    pattern,
    placeholder,
    required,
    helpMessage,
    readOnly,
    type = "text",
  }: InputProps,
  ref
): JSX.Element {
  return (
    <Container className={className} $hideError={!!hideError}>
      {!!label ? (
        <Label as="label" htmlFor={name} $weight="medium">
          {label}
        </Label>
      ) : null}
      <Content>
        <StyledInput
          $hasError={!!error}
          id={id}
          name={name}
          {...(value !== undefined && { value })}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          onKeyUp={onKeyUp}
          pattern={pattern}
          placeholder={
            placeholder
              ? placeholder
              : type === "search"
              ? i18n.label.searchPlaceholder
              : undefined
          }
          ref={ref}
          required={required}
          type={type}
          autoComplete={autoComplete}
          readOnly={readOnly}
          disabled={disabled}
        />
        {type === "search" ? (
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        ) : null}
        {error ? <Error role="alert">{error.message}</Error> : null}
        {icon ? <IconWrapper $hasError={!!error}>{icon}</IconWrapper> : null}
        {error && !icon ? (
          <IconWrapper $hasError={!!error}>
            <InfoIcon />
          </IconWrapper>
        ) : null}
      </Content>
      {helpMessage ? <Helper role="alert">{helpMessage}</Helper> : null}
    </Container>
  );
});
