type PostProps = {
  params: {
    id: string;
  };
};

export default async function Post({ params }: PostProps) {
  return (
    <main>
      <h1>{params.id}</h1>
    </main>
  );
}
