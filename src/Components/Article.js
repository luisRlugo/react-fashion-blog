export default function Article(props) {
  return (
    <article>
      <time>{props.time}</time>
      <h3>{props.title}</h3>
      <img src={props.imgSrc} alt={props.imgAlt} />
      <p>{props.content}</p>
      <a href="#">Continues...</a>
    </article>
  );
}
