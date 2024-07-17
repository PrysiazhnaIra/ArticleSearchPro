import { useEffect, useState } from "react";
import css from "./App.module.css";
import axios from "axios";
import ArticleList from "../ArticleList/ArticleList";
import { Audio } from "react-loader-spinner";
import { fetchArticlesWithTopic } from "../../articles-api";
import SearchForm from "../SearchForm/SearchForm";

export default function App() {
  // 4. Оголошуємо стан
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   // 1. Оголошуємо асинхронну функцію
  //   async function fetchArticles() {
  //     try {
  //       setLoading(true);
  //       //3. Http request
  //       const data = await fetchArticlesWithTopic("react");
  //       console.log(data);
  //       // 5. Записуємо дані в стан
  //       setArticles(data);
  //     } catch (error) {
  //       // Тут будемо обробляти помилку
  //       // Встановлюємо стан error в true
  //       setError(true);
  //     } finally {
  //       // Встановлюємо індикатор в false після запиту
  //       setLoading(false);
  //     }
  //   }
  //   // 2. Викликаємо її одразу після оголошення
  //   fetchArticles();
  // }, []);

  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className={css.title}>Latest articles</h1>
      <SearchForm onSearch={handleSearch} />
      {loading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      )}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
    </>
  );
}
