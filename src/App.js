import Header from "./Components/Header";
import Article from "./Components/Article";
import Footer from "./Components/Footer";
import image1 from "./Components/Pics/blog-image-1.jpg";
import image2 from "./Components/Pics/blog-image-2.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <main>
          <Article
            time="11/12/20"
            title="On the Streets in Brooklyn"
            imgSrc={image1}
            imgAlt="women in red dress on the sidewalk leading to a blue wall"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          dolor provident enim fuga, laudantium porro exercitationem tempore
          voluptatem impedit aliquam amet placeat est consectetur quis sapiente
          eos quisquam obcaecati debitis. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Autem, suscipit! At sapiente nemo
          laborum. Quam distinctio cumque debitis consequatur quae consectetur
          mollitia voluptate eius, vel modi sit quas consequuntur accusantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          dolor provident enim fuga, laudantium porro exercitationem tempore
          voluptatem impedit aliquam amet placeat est consectetur quis sapiente
          eos quisquam obcaecati debitis. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Autem, suscipit! At sapiente nemo
          laborum. Quam distinctio cumque debitis consequatur quae consectetur
          mollitia voluptate eius, vel modi sit quas consequuntur accusantium?"
          />
          <Article
            time="11/11/20"
            title="Vintage in Vogue"
            imgSrc={image2}
            imgAlt="three individuals, one women, one man and another women"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          dolor provident enim fuga, laudantium porro exercitationem tempore
          voluptatem impedit aliquam amet placeat est consectetur quis sapiente
          eos quisquam obcaecati debitis. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Autem, suscipit! At sapiente nemo
          laborum. Quam distinctio cumque debitis consequatur quae consectetur
          mollitia voluptate eius, vel modi sit quas consequuntur accusantium?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          dolor provident enim fuga, laudantium porro exercitationem tempore
          voluptatem impedit aliquam amet placeat est consectetur quis sapiente
          eos quisquam obcaecati debitis. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Autem, suscipit! At sapiente nemo
          laborum. Quam distinctio cumque debitis consequatur quae consectetur
          mollitia voluptate eius, vel modi sit quas consequuntur accusantium?"
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
