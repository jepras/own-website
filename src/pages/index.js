import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Frontpage from "../components/Frontpage"

export default ({ data }) => {
  return (
    <Layout>
      
      {/* Jumbo, about & projects */}
      <Frontpage />

      {/* Blog Element */}
      <div>
        <h3>
          Latest thinking
        </h3>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>{node.frontmatter.title}{" "}
                <span> — {node.frontmatter.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

/* Blog query */
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`