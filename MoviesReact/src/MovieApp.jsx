import { useState } from "react";
export const MovieApp = () => {
  
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:`Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  };

  const [buscar, setBuscar] = useState("");
  const [listaPeliculas, setListaPeliculas] = useState([]);

  const fetchPeliculas = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${buscar}&include_adult=false&language=es&page=1`, options);
      const data = await response.json()
      setListaPeliculas(data.results)
      //console.log(data.results)
    } catch (error) {
      console.log("Error", error)
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetchPeliculas();
  };
  const handleOnchange = (e) => {
    setBuscar(e.target.value);
  };

  return (
    <>
      <div className="container">
        <h1 className="title">Movie App</h1>
      </div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar Pelicula"
          name="buscador"
          onChange={handleOnchange}
          value={buscar}
        />
        <button type="submit">Buscar</button>
      </form>
      <div className="movie-list">

        {listaPeliculas?.map((pelicula)=>(

            <div key={pelicula.id} className="movie-card"> 
            <h2> {pelicula.title} </h2>
           <img 
        src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
        alt={pelicula.title}
      />
            <p> {pelicula.overview} </p>
            </div>

      ))}
      </div>
    </>
  );
};
