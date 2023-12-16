import { useSuspenseQuery } from "@tanstack/react-query";

import { microCMSClient } from "@/lib/microCMSClient";

export type Greeting = {
  message: string;
};

const getGreeting = async () => {
  return await microCMSClient.getObject<Greeting>({
    endpoint: "greeting",
    queries: { fields: ["message"] },
  });
};

export const useGetGreeting = () => {
  return useSuspenseQuery<Greeting>({
    queryKey: ["getGreeting"],
    queryFn: () => getGreeting(),
  });
};
