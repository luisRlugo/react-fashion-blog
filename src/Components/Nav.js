export default function Nav(props) {
  return (
    <nav aria-label="Main Navigation" role="navigation">
      <ul>
        <li>
          <a href="#">{props.womens}</a>
        </li>
        <li>
          <a href="#">{props.mens}</a>
        </li>
        <li>
          <a href="#">{props.onTheStreet}</a>
        </li>
        <li>
          <a href="#">{props.theCatwalk}</a>
        </li>
        <li>
          <a href="#">{props.adWatch}</a>
        </li>
        <li>
          <a href="#">{props.about}</a>
        </li>
        <li>
          <a href="#">{props.tips}</a>
        </li>
      </ul>
    </nav>
  );
}
