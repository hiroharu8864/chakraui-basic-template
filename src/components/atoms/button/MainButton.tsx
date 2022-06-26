import { FC, memo, ReactNode } from "react";
import styled from "styled-components";

const SButton = styled.button`
  background-color: #cc6633;
  color: #ffffff;
  padding: 8px 40px;
  border: none;
  border-radius: 1000px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

type Props = {
  children: ReactNode;
};

export const MainButton: FC<Props> = memo((Props) => {
  const { children } = Props;

  return <SButton>{children}</SButton>;
});
