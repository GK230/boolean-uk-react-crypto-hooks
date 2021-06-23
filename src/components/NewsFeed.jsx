import { useEffect, useState } from "react";
import { STATUS_UPDATES } from "../constants";
import NewsCard from "./NewsCard";
import useFetch from "../hooks/useFetch"
export default function NewsFeed() {
  // const [newsList, setNewsList] = useState([]);

  // You can turn this into a custom hook////////////////////
  const url = STATUS_UPDATES
  const statusUpdates = useFetch(url, 'status_updates')



  // useEffect(
  //   () =>
  //     fetch(STATUS_UPDATES)
  //       .then((resp) => resp.json())
  //       .then(({ status_updates }) => setNewsList(status_updates)),
  //   [setNewsList]
  // );
  ///////////////////////////////////////////////////////////

  return (
    <ul className="newsfeed">
      {statusUpdates.map((newsItem) => (
        <li>
          <NewsCard newsItem={newsItem} />
        </li>
      ))}
    </ul>
  );
}
