export default function UserPage({ params }: { params: { id: string } }) {
  const id = params.id;
  return <div>{id}</div>;
}
