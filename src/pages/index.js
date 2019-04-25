import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./index.module.css"
import FontAwesome from "react-fontawesome"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className={styles.grid}>
          <div>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div className={styles.listItem} key={node.fields.slug}>
                  <h3 style={{ margin: "0.5rem" }}>
                    <Link className={styles.link} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                  <div className={styles.keywordList}>
                    <FontAwesome name="key" />
                    {node.frontmatter.keywords.map(word => {
                      return (
                        <span key={word} className={styles.keywordItem}>
                          {word}
                        </span>
                      )
                    })}
                  </div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || null,
                    }}
                  />
                </div>
              )
            })}
          </div>
          <Bio />
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            keywords
          }
        }
      }
    }
  }
`
