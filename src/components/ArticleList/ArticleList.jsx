import css from "./ArticleList.module.css";
import axios from "axios";

export default function ArticleList({ items }) {
  return (
    <ul className={css.list}>
      {items.map(({ objectID, url, title }) => (
        <li className={css.item} key={objectID}>
          <a
            className="css.link"
            href={url}
            target="_blank"
            rel="noreferrer noopener"
          >
            <h2 className={css.title}>{title}</h2>
          </a>
        </li>
      ))}
    </ul>
  );
}
