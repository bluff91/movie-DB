import { Link } from 'react-router-dom'
import { API_ENDPOINT, useAppContext } from '../../context'
import useFetch from '../hooks/useFetch'

function Movies() {
  const { searchTerm } = useAppContext()

  const url = `${API_ENDPOINT}${searchTerm}`
  const imgPlaceholder =
    'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

  const {
    loading,
    error,
    data: { Search: data },
  } = useFetch(url)

  if (loading) {
    return <h2 className="loading">Loading...</h2>
  }
  if (error.status) {
    return <h2 className="error">{error.msg}</h2>
  }
  if (!data) {
    return <h2>No movies to show</h2>
  }

  return (
    <section className="movies">
      {data &&
        data.map((movie) => {
          const { Title, imdbID, Year, Poster } = movie
          return (
            <Link className="movie" key={imdbID} to={`/movies/${imdbID}`}>
              <article>
                <img
                  src={Poster === 'N/A' ? imgPlaceholder : Poster}
                  alt="a poster"
                />
                <div className="movie-info">
                  <h4 className="title">{Title}</h4>
                  <p>{Year}</p>
                </div>
              </article>
            </Link>
          )
        })}
    </section>
  )
}
export default Movies
