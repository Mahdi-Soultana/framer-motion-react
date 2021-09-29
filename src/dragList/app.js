import Card from "./components/card/Card";
import { IMAGES } from "./data/Images";
import CardCompenent from "./components/card";

function App(props) {
  return (
    <>
      {IMAGES.map((item) => {
        const Cards = item.urls.map((url) => (
          <Card
            url={url}
            key={Math.random() * new Date().getTime()}
            forground={item.forground}
          />
        ));
        return (
          <CardCompenent
            key={Math.random() * new Date().getTime()}
            bg={item.bg}
            title={{
              underLineC: item.underLineC || "black",
              color: item.titleC || "orange",
              text: item.title || "Helo",
            }}
          >
            {Cards}
          </CardCompenent>
        );
      })}
    </>
  );
}
export default App;
