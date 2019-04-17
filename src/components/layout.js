import React from "react"
import { Link } from "gatsby"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          <hr />
          <div>
            Contact:
            <a href="http://www.jeffreyaheller.com">Portfolio</a> |{" "}
            <a href="https://github.com/Jheller11">Github</a> |{" "}
            <a href="https://www.linkedin.com/in/jeffreyaheller/">LinkedIn</a> |{" "}
            <a href="mailto:heller.jeffrey@gmail.com">
              heller.jeffrey@gmail.com
            </a>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
