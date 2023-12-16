import { useGetGreeting } from "@/features/news/api/getGreeting";
import { useGetNews } from "@/features/news/api/getNews";
import { NewsListPresenter } from "@/features/news/presenter/NewsListPresenter";

export const NewsListContainer = () => {
  const getGreetingResult = useGetGreeting();
  const getNewsResult = useGetNews();

  return (
    <>
      <NewsListPresenter
        greeting={getGreetingResult.data}
        newsList={getNewsResult.data}
      />
    </>
  );
};
