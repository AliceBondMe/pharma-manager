import { css } from "@emotion/react";

export const inputStyle = (width: string) => css`
  width: ${width};
  border-radius: 60px;
  border: 1px solid var(--input-borders);
  padding: 12px 18px;

  &::placeholder {
    color: var(--input-placeholder);
    font-size: 12px;
  }

  &:focus-within {
    border: 1px solid var(--accent);
  }

  &.error {
    border: 1px solid var(--error);
  }
`
export const errorMessageStyle = css`
  margin-left: 12px;
  font-size: 10px;
  color: var(--error);
`