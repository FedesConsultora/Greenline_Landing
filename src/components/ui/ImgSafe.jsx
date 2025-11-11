export default function ImgSafe({ src, ...rest }) {
  if (!src) return null;            // ⬅️ No renderiza si no hay src
  return <img src={src} {...rest} />;
}
