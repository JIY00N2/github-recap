import { GET_REPOSITORY } from "@/gql/queries/getRepository";
import { getClient } from "@/lib/ApolloClient";

export default async function HomePage() {
  const { data } = await getClient().query({
    query: GET_REPOSITORY,
    variables: {
      username: "JIY00N2",
      repository: "yoon-log",
    },
  });

  return <div>{JSON.stringify(data)}</div>;
}
