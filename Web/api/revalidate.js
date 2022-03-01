const Token =
  "sk0a9ZLIdjbJqh3Z97m7QRENG1FopTYnWitCQ8SrnUY1rOWWpP6Z4njduTEYSwdpx615PkjUWAij6QjylL67jZrLRlmRQ74Pabu3y0LsYUP6AYOywVeWZEyZk6QoYasLZjCkviM9OMPrq2vJ2SHSxtyFEN9ikvsnGQcLLK3rnVuRDibK37Qf";
export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== Token) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    await res.unstable_revalidate("/path-to-revalidate");
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
