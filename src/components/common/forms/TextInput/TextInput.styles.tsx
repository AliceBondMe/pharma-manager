import { css } from "@emotion/react";

export const inputStyle = (width: string) => css`
  width: ${width};
  border-radius: 60px;
  border: 1px solid var(--input-borders);
  padding: 12px 18px;
  flex-shrink: 0;

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
export const labelStyle = css`
  display: block;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  margin-bottom: 8px;
  margin-left: 18px;
`