import { FC, memo, useEffect } from "react";

import { useAllCommentsAxios } from "../../hooks/useAllCommentsAxios";

export const MypageComment: FC = memo(() => {
  const { getComments, comments } = useAllCommentsAxios();
  useEffect(() => getComments(), [getComments]);

  return (
    <>
      <h1>一覧表示テスト</h1>
      {comments.map((comment) => (
        <p key={comment.id}>
          {comment.id}
          <br />
          {comment.name}
          <br />
          {comment.body}
        </p>
      ))}
    </>
  );
});
