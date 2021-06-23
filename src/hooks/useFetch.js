import { useEffect } from "react";
import { useState } from "react";

function useFetch(url, key) {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then(data => setList(data));
  }, [setList]);

  return list;
}

export default useFetch;
