import { FC, memo } from "react";
import { Outlet } from "react-router-dom";

export const Mypage: FC = memo(() => {
  return (
    <>
      <p>Mypage Contents</p>
      <Outlet />
    </>
  );
});
