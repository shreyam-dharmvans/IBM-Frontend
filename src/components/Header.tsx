import './Header.css'

function Header() {
  return (
    <>
      <nav className="navbar my-style navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="./no-poverty.jpg" alt="No Poverty" height="40" className="me-2" />
          </a>

          <div className="justify-content-end">
            <a href="/new" className="btn btn-outline-primary me-2" role="button">Add Event</a>
            <a href="/allPosts" className="btn btn-outline-secondary" role="button">View Events</a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
