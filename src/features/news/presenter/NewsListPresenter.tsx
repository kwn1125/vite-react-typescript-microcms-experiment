import { format, parseISO } from "date-fns";
import { MicroCMSListResponse } from "microcms-js-sdk";

import { Greeting } from "@/features/news/api/getGreeting";
import { News } from "@/features/news/api/getNews";

type Props = {
  greeting: Greeting;
  newsList: MicroCMSListResponse<News>;
};

export const NewsListPresenter = ({ greeting, newsList }: Props) => {
  return (
    <>
      <h1>{greeting.message}</h1>
      <ul>
        {newsList.contents.map((news) => (
          <li key={news.id}>
            <p>{format(parseISO(news.date), "yyyy/MM/dd HH:mm")}</p>
            <p>{news.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
