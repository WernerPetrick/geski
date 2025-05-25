import GeskiLogo from "../../assets/geski.png"

function NavBar() {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src={GeskiLogo} alt="Geski Logo" width="75" className="d-inline-block align-text-top" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item"><a href="#" className="nav-link">Sign Up</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Sign In</a></li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default NavBar;