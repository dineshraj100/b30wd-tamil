import "./App.css";
import { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <h2 id="header">Movie Review</h2>
      <Newmovie/>
      {/* {movie.map(({ name, poster,summary,cast,director,music,year,rating }) => (
        <Name name={name} poster={poster} summary={summary} cast={cast} director={director} music={music} year={year} rating={rating} />
      ))} */}
      <br></br>
    </div>
  );
}
function Name({ name, poster,summary,cast,director,music,year,rating }) {
  const styles={
    color: rating > 8.0 ? "green":"red"
  }
  return (
    <div className="name">
      <br></br>
      <img src={poster} width="300" />
      <ul>Movie name: {name}</ul>
      <ul>Year of Release: {year}</ul>
      <ul>Summary: {summary}</ul>
      <ul>Cast: {cast}</ul>
      <ul>Director: {director}</ul>
      <ul>Music By:{music}</ul>
      <ul >Rating (in imdb): <span style={styles}>{rating}/10</span></ul>
      <Counter/>
      <hr></hr>
    </div>
  );
}
function Newmovie(){
  const [name, setName]= useState("");
  const [poster, setPoster]= useState("");
  const [year, setYear]= useState("");
  const [summary, setSummary]= useState("");
  const [cast, setCast]= useState("");
  const [director,setDirector]= useState("");
  const [music, setMusic]= useState("");
  const [rating,setRating]= useState("");
  const movie=[
    {
        name: name,
        poster: poster,
        summary: summary,
        cast: cast,
        director: director,
        music: music,
        year: year,
        rating:rating
    }
  ];
  return(
    <div className="movietemplate">
      <input onChange={(event)=> setName(event.target.value)} placeholder="Enter the Movie Name"/><br></br>
      <input onChange={(event)=> setPoster(event.target.value)} placeholder="Enter the Poster link"/><br></br>
      <input onChange={(event)=> setYear(event.target.value)} placeholder="Enter the Year of release"/><br></br>
      <input onChange={(event)=> setSummary(event.target.value)} placeholder="Enter the Summary of movie"/><br></br>
      <input onChange={(event)=> setCast(event.target.value)} placeholder="Enter the Cast of Movie"/><br></br>
      <input onChange={(event)=> setDirector(event.target.value)} placeholder="Enter the Director of movie"/><br></br>
      <input onChange={(event)=> setMusic(event.target.value)} placeholder="Enter the name of music director"/><br></br>
      <input onChange={(event)=> setRating(event.target.value)} placeholder="Enter the rating of movie out of 10"/><br></br>
      <button onClick={(name,poster,year,summary,cast, director,music,rating)=> <Newmovie/>}>Add Movie</button>
    </div>
  )
}

function Counter(){
  const[like, setLike] = useState(0);
  const[dislike, setDislike]= useState(0);
  return(
    <div>
      <button onClick={()=> setLike(like+1)}>👍🏻 {like}</button>
      <span>................................................................</span>
      <button onClick={()=> setDislike(dislike+1)}>👎🏻 {dislike}</button>
      <br></br>
    </div> 
  );
}

// movie.push(name,poster,year,summary,cast, director,music,rating)