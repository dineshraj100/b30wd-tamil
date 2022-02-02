import "./App.css";
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
export default function App() {
  const movie=[
    {
    name: "Thuppakki",
    poster: "https://www.themoviedb.org/t/p/original/qkvz7dJ0isbxUTM20Vce6rho0wG.jpg",
    summary: "Jagdish is an army captain, who comes to his home in Mumbai to spend some time with his family, along with getting his marriage fixed with a girl, whom he earlier dislikes and later likes. However, during all this, a bomb explosion in a bus makes him to search and nab down the terrorist, after which he founds out the plan of the terrorist and his gang, and with his entire Army team, manages to thwart the plans of the gang. But this leads to an even bigger battle, as the leader of the terrorist gang arrives in Mumbai, in order to find and kill Jagdish. What will happen now? Will Jagdish be able to win the battle or not? Some more questions like this form the rest of the story as well as the crux of the film's plot.",
    cast: "Vijay, Kajal Agarwal, Vidyut Jammwal",
    director: "A.R.Murugadoss",
    music: "Harris Jayaraj",
    year: "2012",
    rating: 8.1
    },
    {
      name: "Pushpa: The Rise - Part 1",
      poster: "https://static.toiimg.com/photo/88334935/88334935.jpg?v=3",
      summary: "Pushpa a labor works for small sum but dreams of living a life of king. But he is always let down by his step brothers for being an illegitimate child of their father. He gets chance to work in dense forest of red sanders where red sanders are smuggled to other countries. The labors are always under the scanner of DSP Govindappa but Pushpa dares to go against everyone creating hurdles for DSP. Pushpa manages to save a smuggling consignment worth crores under the eye of DSP and becomes known to Reddy Brothers. (Konda Reddy, Jakka Reddy and Jolly Reddy) known to do smuggling of red sanders. Pushpa manages to smuggle red sanders often with his tricks by bluffing DSP and his team and becomes close side of Konda Reddy. Pushpa changes his lifestyle and decides to marry Srivelli but his step brothers disclose his mother's relationship with their father thus calling of the marriage. Pushpa who now decides not to stop in reaching heights and finds that Mangalam Sinu, a syndicate member is giving Reddy's gang much lesser share than they deserve and asks Konda Reddy to hike profit. Konda Reddy asks Pushpa to take thing sin his hands as his involvement will lead to war between the two gangs.A fearless Pushpa decides to take control of things leading to disagreements between two gangs.",
      cast: "Allu Arjun, Fahadh Faasil, Rashmika Mandanna",
      director: "Sukumar",
      music: "Devi Sri Prasad",
      year: "2021",
      rating: 7.9
      },
      {
        name: "Mankatha",
        poster: "https://i.pinimg.com/564x/5c/ce/44/5cce446b9de4e3a035eb1b8bd469a3da.jpg",
        summary: "Mankatha is a racy and adrenaline-rushing story of a Maharashtra police officer Vinayak Mahadevan (Ajith) who is suspended for helping a smuggler to escape from police encounter. He starts leading life in his own way. He falls for Sanjana (Trisha), daughter of an influential local goon Arumuga Chettiyar (Jayaprakash) in Mumbai. A tough cop Prithvi (Arjun) takes charge to end betting scandal in IPL cricket in Mumbai. Arumuga uses his links with dons in Mumbai tries to route through his old theatre, a cash of over Rs 500 crore to be used in betting. Sumanth (Vaibhav), a goon working for Arumuga Chettiyarplans to take away the booty with the help of his friends Ganesh (Ashwin), Mahanth (Mahanth), who owns a bar in Mumbai and Prem (Premji), a IIT graduate. Vinayak joins the race. he promises to help them and divide it between them. Trouble starts after they take away the cash. Both Arumugha Chettiyar and police are now on their heels. Meanwhile, Mahanth and Prem escape with the cash. It all upto Vinayak now. The battle shifts between him and Prithvi.",
        cast: "Ajith Kumar, Arjun Sarja, Trisha Krishnan",
        director: "Venkat Prabhu",
        music: "Yuvan Shankar Raja",
        year: "2011",
        rating: 7.6
        },
        {
          name: "The Hangover",
          poster: "https://www.ubuy.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzF6UmNRVXZwcUwuX0FDX1NMMTUwMF8uanBn.jpg",
          summary: "If everything goes according to plan, in less than forty-eight hours, husband-to-be, Doug, will walk down the aisle with his sweetheart, Tracy. Bent on throwing the bachelor party to end all bachelor parties, Doug's bosom friends and groomsmen, schoolteacher, Phil, and Stu, the dentist, head to dazzling Las Vegas on a borrowed 1965 Mercedes-Benz 220SE convertible. However, instead of spending a wild night drinking and gambling, the boys, along with Tracy's socially inept brother, Alan, wake up in a trashed, $4,200-a-night suite at Caesars Palace, having no recollection of what has happened the night before. Now, as if that weren't enough, an incisor is missing, there is a terrifying Bengal tiger in the bathroom, and Doug has vanished into thin air. But, the clock is ticking, and it seems that Doug and Tracy's union is just not going to happen. Will those two manage to tie the knot after all?",
          cast: "Zach Galifianakis, Bradley Cooper, Justin Bartha",
          director: "Todd Phillips",
          music: "Christophe Beck",
          year: "2009",
          rating: 7.7
          },
          {
            name: "The Avengers",
            poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
            summary: "S.H.I.E.L.D. has located the mysterious Tesseract device and the Army's super soldier Captain America. The Tesseract is actually a gateway to an entirely new world called Asgard. A mysterious being known as Loki arrives on earth and immediately assumes that he can rule all human beings. But that irks S.H.I.E.L.D. director Nick Fury the wrong way. As Loki escapes with the Tesseract, Nick Fury believes this is an act of war against Earth. His only hope is to assemble an actual team of super heroes. Dr. Bruce Banner, who turns into an enormous green rage monster known as the Hulk. Tony Stark and his venerable Iron Man armor. Captain America, the Stark Enterprises created super soldier. Thor, the god of thunder, protector of Earth and his home planet of Asgard, and Loki's brother. Master assassins Hawkeye and Natasha Romanoff. Together they will become a team to take on an attack that will call them to become the greatest of all time.",
            cast: "Robert Downey Jr. , Chris Evans, Scarlett Johansson",
            director: "Joss Whedon",
            music: "Alan Silvestri",
            year: "2012",
            rating: 8.0,
            }
];

  const [name, setName]= useState("");
  const [poster, setPoster]= useState("");
  const [year, setYear]= useState("");
  const [summary, setSummary]= useState("");
  const [cast, setCast]= useState("");
  const [director,setDirector]= useState("");
  const [music, setMusic]= useState("");
  const [rating,setRating]= useState("");
  const [movielist, setMovielist]=useState(movie);
  return (
    <div className="App">
      <h2 id="header">Movie Review</h2>
    <div className="movie_form">
    <TextField label="Enter the Movie Name" variant="outlined" onChange={(event)=> setName(event.target.value)} />
    <TextField label="Enter the Poster link" variant="outlined" onChange={(event)=> setPoster(event.target.value)} />
    <TextField label="Enter the Year of release" variant="outlined" onChange={(event)=> setYear(event.target.value)} />
    <TextField label="Enter the Summary of movie" variant="outlined" onChange={(event)=> setSummary(event.target.value)} />
    <TextField label="Enter the Cast of Movie" variant="outlined" onChange={(event)=> setCast(event.target.value)} />
    <TextField label="Enter the Director of movie" variant="outlined" onChange={(event)=> setDirector(event.target.value)} />
    <TextField label="Enter the name of music director" variant="outlined" onChange={(event)=> setMusic(event.target.value)} />
    <TextField label="Enter the rating of movie out of 10" variant="outlined" onChange={(event)=> setRating(event.target.value)} />
      <Button variant="contained" onClick={()=> 
      {const newMovie={
        name: name,
        poster: poster,
        summary: summary,
        cast: cast,
        director: director,
        music: music,
        year: year,
        rating: rating
        }
      setMovielist([...movielist, newMovie]); }}>Add Movie</Button>
    </div>
    <div className="Moviereview">{movielist.map(({ name, poster,summary,cast,director,music,year,rating }) => (
        <Name name={name} poster={poster} summary={summary} cast={cast} director={director} music={music} year={year} rating={rating} />
      ))}</div>
    </div>
  );
}
function Name({ name, poster,summary,cast,director,music,year,rating }) {
  return (
    <div className="name">
      <br></br>
      <img src={poster} width="300" />
      <ul>Movie name: <span>{name}</span></ul>
      <ul>Year of Release: <span>{year}</span></ul>
      <ul>Summary: <span>{summary}</span></ul>
      <ul>Cast: <span>{cast}</span></ul>
      <ul>Director: <span>{director}</span></ul>
      <ul>Music By:<span>{music}</span></ul>
      <ul >Rating (in imdb): <span>{rating}/10</span></ul>
      <Counter/>
      <hr></hr>
    </div>
  );
}
function Counter(){
  const[like, setLike] = useState(0);
  const[dislike, setDislike]= useState(0);
  return(
    <div className="likes">
      <Button variant="contained" color="error" onClick={()=> setLike(like+1)}>👍🏻 {like}</Button>
      <Button variant="contained" color="error" onClick={()=> setDislike(dislike+1)}>👎🏻 {dislike}</Button>
    </div> 
  );
}