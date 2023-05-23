
import { useEffect, useState } from 'react';
import axios from "axios"

const MovieList = () => {
    
       const [movies, setMovies] = useState([])
       

       async function getData() {
        const response = await axios.get('http://localhost:5000/movies'); 
        setMovies(response.data);
      }
    
      useEffect(() => {
        getData();
      }, [movies]);
    
     
        return(
            <table className="striped">
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Tipo</th>
                    <th>Episódios</th>
                    <th>Episódio atual</th>
                    <th>Visto por último</th>
                </tr>
                </thead>

                <tbody>
                {movies && movies.map((movie) =>  {
                    let type = movie.type === 0 ? 'Série' : 'Filme';
                    let formatDate = (movie.last_view).split('T', 1)

                    return(
                        <tr key={movie.id}>
                            <td>{movie.name}</td>
                            <td>{type}</td>
                            <td>{movie.total_ep}</td>
                            <td>{movie.atual_ep}</td>
                            <td>{formatDate}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
    )

            }

        






export default MovieList;
