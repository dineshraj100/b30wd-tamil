import "./App.css";

export default function App() {
  const name = [
    {
      name: "Dineshraj",
      image:
        "https://w0.peakpx.com/wallpaper/670/410/HD-wallpaper-light-yagami-art-facial-expression-anime-deathnote-anime-deathnote-deathnote-l-kira.jpg"
    },

    {
      name: "Joker",
      image:
        "https://www.lovesove.com/wp-content/uploads/2021/06/Batman-Joker-Dp-Lovesove.jpg"
    },

    {
      name: "Yoriichi Tsugikuni",
      image:
        "https://i.pinimg.com/564x/4f/bc/34/4fbc34afb99c85e548cd18022fcb272e.jpg"
    }
  ];
  return (
    <div className="App">
      {name.map(({ name, image }) => (
        <Name name={name} image={image} />
      ))}
    </div>
  );
}
function Name({ name, image }) {
  return (
    <div className="name">
      <br></br>
      <img src={image} width="300" />
      <h2> Hello sir!! This is {name} Here!!!😀</h2>
    </div>
  );
}
