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

  // Виконується при зміні page або topic
  useEffect(() => {
    if (!topic) return; // Не виконуємо запит, якщо тема порожня
    // Функція для отримання статей з сервера
    const fetchArticles = async () => {
      try {
        setLoading(true);

        // Виконуємо запит на отримання статей з поточною темою та сторінкою
        const data = await fetchArticlesWithTopic(topic, page);

        setArticles((prev) => [...prev, ...data]); // Додаємо нові статті до поточного списку
      } catch (error) {
        setError(true); // Помилка запиту
      } finally {
        setLoading(false); // Завершення завантаження
      }
    };
    // Викликаємо функцію для отримання статей при зміні сторінки або теми
    fetchArticles();
  }, [page, btnClicked]);

  const handleSearch = (newTopic) => {
    setArticles([]); // Очищаємо статті
    setError(false); // Скидаємо помилку
    setPage(0); // Скидаємо сторінку
    setTopic(newTopic); // Встановлюємо нову тему
    setBtnClicked((prev) => !prev);
  };

  return (
    <>
      <h1 className={css.title}>Latest articles</h1>
      <SearchForm onSearch={handleSearch} />
      {loading && <Loader />}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
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
