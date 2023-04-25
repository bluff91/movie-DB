import Movies from '../components/Movies'
import SearchForm from '../components/SearchForm'

function Home() {
  return (
    <main>
      <div className="section">
        <SearchForm />
        <Movies />
      </div>
    </main>
  )
}
export default Home
