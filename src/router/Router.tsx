import { FC, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../components/Pages/Login";
import { Mypage } from "../components/Pages/Mypage";
import { MypageAccount } from "../components/Pages/MypageAccount";
import { MypagePassword } from "../components/Pages/MypagePassword";
import { NotFound } from "../components/Pages/NotFound";

/**
 * layoutを指定する場合
 * <Route path="company" element={<DefaultLayout><Mypage /></DefaultLayout>}></Route>
 */
export const Router: FC = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mypage" element={<Mypage />}>
          <Route path="account" element={<MypageAccount />} />
          <Route path="password" element={<MypagePassword />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
});
