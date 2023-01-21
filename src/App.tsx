import { FC, useEffect } from "react";
import { fetchArticles } from "./redux/articles/articlesAsync";
import { useAppDispatch } from "./redux/hooks";

const App: FC = () => {
  const dispatch = useAppDispatch();
 
  useEffect(() => {
    dispatch(fetchArticles());
  }, []);
  
  return <>Check</>;
};

export default App;
