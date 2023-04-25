import useFetch from '../hooks/useFetch'
import { Link, useParams } from 'react-router-dom'

function SingleMovie() {
  const imgPlaceholder =
    'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

  const { id } = useParams()

  const url = `https://www.omdbapi.com/?apikey=${
    import.meta.env.VITE_API_KEY
  }&i=${id}`

  const { loading, error, data } = useFetch(url)

  if (loading) {
    return <h2 className="loading">Loading...</h2>
  }
  if (error.status) {
    return <h2 className="page-error">{error.msg}</h2>
  }

  const { Title, Year, Plot, Runtime, Poster, imdbRating } = data
  return (
    <section className="single-movie">
      <img src={Poster === 'N/A' ? imgPlaceholder : Poster} alt={Title} />
      <div className="single-movie-info">
        <p>{Title}</p>
        <p>{Plot}</p>
        <p>{Year}</p>
        <p>{`IMBD rating: ${imdbRating} | runtime: ${Runtime}`}</p>
        <Link to="/" className="btn">
          Back to Movies
        </Link>
      </div>
    </section>
  )
}
export default SingleMovie
