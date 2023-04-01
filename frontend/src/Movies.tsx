import { useState } from 'react';
import data from './MovieData.json';

const movieData = data.MovieData;

function MovieList() {
  const [listOMovies, setListOMovies] = useState(movieData);

  const addMovie = () => {
    setListOMovies([
      ...movieData,
      {
        Category: 'Action/Adventure',
        Title: 'Batman Forever',
        Year: 1995,
        Director: 'Joel Schumacher',
        Rating: 'PG-13',
      },
    ]);
  };

  return (
    <>
      <div className="p-3">
        <h3>Joel Hilton's Movie Collection</h3>
        <div>
          <table className="table table-bordered table-striped">
            <thead className="table-light">
              <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Category</th>
                <th>Edited</th>
              </tr>
            </thead>
            <tbody>
              {listOMovies.map((m, index) => (
                <tr className={index % 2 === 0 ? 'table-light' : ''}>
                  <td>{m.Title}</td>
                  <td>{m.Year}</td>
                  <td>{m.Director}</td>
                  <td>{m.Rating}</td>
                  <td>{m.Category}</td>
                  <td>{m.Edited}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="btn btn-primary" onClick={addMovie}>
          Add Movie
        </button>
      </div>
    </>
  );
}

export default MovieList;
