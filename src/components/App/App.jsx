import { useEffect, useState } from "react";
import css from "./App.module.css";
import ArticleList from "../ArticleList/ArticleList";
import Loader from "../Loader/Loader";
import { fetchArticlesWithTopic } from "../../articles-api";
import SearchForm from "../SearchForm/SearchForm";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(0);
  const [topic, setTopic] = useState("");
  const [btnClicked, setBtnClicked] = useState(true);

  useEffect(() => {
    if (!topic) return;
    const fetchArticles = async () => {
      try {
        setLoading(true);

        const data = await fetchArticlesWithTopic(topic, page);

        setArticles((prev) => [...prev, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, [page, btnClicked]);

  const handleSearch = (newTopic) => {
    setArticles([]);
    setError(false);
    setPage(0);
    setTopic(newTopic);
    setBtnClicked((prev) => !prev);
  };

  return (
    <>
      <h1 className={css.title}>Latest articles</h1>
      <SearchForm onSearch={handleSearch} />
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
      {loading && <Loader />}
      {articles.length > 0 && !loading && (
        <button
          className={css.btnMore}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Load more
        </button>
      )}
    </>
  );
}
