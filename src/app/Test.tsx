"use client";

import { GET_REPOSITORY } from "@/gql/queries/getRepository";
import { useSuspenseQuery } from "@apollo/client";

// client component에서 data fetching 해올때
export default function Test() {
  const { data } = useSuspenseQuery(GET_REPOSITORY, {
    variables: {
      username: "JIY00N2",
      repository: "yoon-log",
    },
  });

  return <div>{JSON.stringify(data)}</div>;
}
