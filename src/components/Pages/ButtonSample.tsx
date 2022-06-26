import { FC, memo } from "react";
import { MainButton } from "../atoms/button/MainButton";

export const ButtonSample: FC = memo(() => {
  return (
    <>
      <div>
        <p>Button Sample Page</p>
        <MainButton>Sample Button</MainButton>
      </div>
    </>
  );
});
