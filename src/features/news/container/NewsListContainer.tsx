import { useGetGreeting } from "@/features/news/api/getGreeting";
import { useGetNews } from "@/features/news/api/getNews";
import { NewsList } from "@/features/news/presenter/NewsList";

export const NewsListContainer = () => {
  const getGreetingResult = useGetGreeting();
  const getNewsResult = useGetNews();

  return (
    <>
      <NewsList
        greeting={getGreetingResult.data}
        newsList={getNewsResult.data}
      />
    </>
  );
};
