import Nav from "./Nav";
export default function Header() {
  return (
    <header>
      <h1>Sartre's List</h1>
      <h2>Better-Dress People</h2>
      <Nav
        womens="Women's"
        mens="Men's"
        onTheStreet="On the Street"
        theCatwalk="The Catwalk"
        adWatch="AdWatch"
        about="About"
      />
    </header>
  );
}
