import client from "../../client";

const Tour = ({ tours }) => {
  console.log(tours);
  return (
    <article>
      <h1>{tours?.title}</h1>
    </article>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "tour-card" && defined(tours.current)][].tours.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const tours = await client.fetch(
    `
    *[_type == "tour-card" && tours.current == $slug][0]
  `,
    { slug }
  );
  return {
    props: {
      tours,
    },
  };
}

export default Tour;
