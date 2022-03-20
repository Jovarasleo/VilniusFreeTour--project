import client from "../client";
function dynamicPage({ dynamicPage, pageSlug }) {
  console.log(dynamicPage, pageSlug);
  return (
    <div>
      <div>
        <h3>{pageSlug?.title}</h3>
        <p>{pageSlug?.description}</p>
      </div>
    </div>
  );
}
export default dynamicPage;

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "dynamic-page" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const query1 = `*[_type == "dynamic-page"]`;
  const dynamicPage = await client.fetch(query1);
  const pageSlug = await client.fetch(
    `
    *[_type == "dynamic-page" && slug.current == $slug][0]
  `,
    { slug }
  );
  if (!pageSlug) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      pageSlug,
      dynamicPage,
    },
    revalidate: 5,
  };
}
