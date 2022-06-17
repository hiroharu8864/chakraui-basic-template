import axios from "axios";
import { useCallback, useState } from "react";

import { Comment } from "../types/api/comment";

export const useAllCommentsAxios = () => {
  const [comments, setComments] = useState<Array<Comment>>([]);

  const getComments = useCallback(() => {
    axios
      .get<Array<Comment>>("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err.response));
  }, []);

  return { getComments, comments };
};
