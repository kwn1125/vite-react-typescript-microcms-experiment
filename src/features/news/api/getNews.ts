import { useSuspenseQuery } from "@tanstack/react-query";
import { MicroCMSListResponse } from "microcms-js-sdk";

import { microCMSClient } from "@/lib/microCMSClient";

export type News = {
  date: string;
  title: string;
};

const getNews = async () => {
  return await microCMSClient.getList<News>({
    endpoint: "news",
    queries: { fields: ["id", "date", "title"] },
  });
};

export const useGetNews = () => {
  return useSuspenseQuery<MicroCMSListResponse<News>>({
    queryKey: ["getNews"],
    queryFn: () => getNews(),
  });
};
