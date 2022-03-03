import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";
function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}
const Tour = ({ post }) => {
  return (
    <section>
      {post?.gallery?.map((galleryImg) => {
        return (
          <img
            key={galleryImg._key}
            src={urlFor(galleryImg)
              .width(320)
              .height(200)
              .fit("max")
              .auto("format")}
          />
        );
      })}
    </section>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "tour-card" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const post = await client.fetch(
    `
    *[_type == "tour-card" && slug.current == $slug][0]
  `,
    { slug }
  );
  return {
    props: {
      post,
    },
  };
}

export default Tour;
