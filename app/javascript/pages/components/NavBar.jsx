import { Link, usePage } from '@inertiajs/react'
import GeskiLogo from "../../assets/geski.png"

function NavBar() {
  const { props } = usePage()
  const currentUser = props.current_user

  const handleSignOut = (e) => {
    e.preventDefault()
    Inertia.delete('/sign_out')
  }

  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand"><img src={GeskiLogo} alt="Geski Logo" width="75" className="d-inline-block align-text-top" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link" aria-current="page">About</Link>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              {currentUser ? (
                <>
                  <li className="nav-item">
                    <Link href="/" className="nav-link" aria-current="page">Account</Link>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={handleSignOut}
                      className="nav-link"
                      type='button'
                    >
                      Sign Out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link href="/sign_up" className="nav-link" aria-current="page">Sign Up</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/sign_in" className="nav-link" aria-current="page">Sign In</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default NavBar;