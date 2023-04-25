import { useAppContext } from '../../context'
import { useRef, useEffect } from 'react'

function SearchForm() {
  const { setSearchTerm } = useAppContext()
  const searchRef = useRef()

  useEffect(() => {
    searchRef.current.focus()
  }, [])
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>Search Movies</h2>
      <input
        type="text"
        className="form-input"
        onChange={(e) => setSearchTerm(e.target.value)}
        ref={searchRef}
      />
    </form>
  )
}
export default SearchForm
