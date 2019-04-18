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
        <nav className={styles.nav}>
          <h1 className={styles.title}>
            <Link to={`/`}>{title}</Link>
          </h1>
        </nav>
      )
    } else {
      header = (
        <nav className={styles.nav}>
          <h3 className={styles.title}>
            <Link to={`/`}>{title}</Link>
          </h3>
        </nav>
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
