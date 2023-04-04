import Nav from "./Nav";
export default function Footer() {
  return (
    <footer>
      <Nav
        womens="Women's"
        mens="Men's"
        onTheStreet="On the Street"
        theCatwalk="The Catwalk"
        adWatch="AdWatch"
        about="About"
        tips="Tips"
      />
      <p>&copy; 2013 Valet Industries, inc</p>
    </footer>
  );
}
