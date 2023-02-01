import { useEffect, useState } from "react";

export const FetchApi = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};
