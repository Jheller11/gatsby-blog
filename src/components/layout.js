import React from "react"
import { Link } from "gatsby"
import styles from "./layout.module.css"

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
              fontFamily: "'Bitter', serif",
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
      <div className={styles.body}>
        <header>{header}</header>
        <main className={styles.main}>{children}</main>
        <footer>
          <hr />
          <div className={styles.linkContainer}>
            <a
              className={styles.footerLink}
              href="http://www.jeffreyaheller.com"
            >
              My Portfolio
            </a>{" "}
            |{" "}
            <a
              className={styles.footerLink}
              href="https://github.com/Jheller11"
            >
              Github
            </a>{" "}
            |{" "}
            <a
              className={styles.footerLink}
              href="https://www.linkedin.com/in/jeffreyaheller/"
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a
              className={styles.footerLink}
              href="mailto:heller.jeffrey@gmail.com"
            >
              heller.jeffrey@gmail.com
            </a>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
