import React, { Component } from "react"
import styles from "../../css/items.module.css"
import Discovery from "./Discovery"
import Title from "../Title"

export default class DiscoveryList extends Component {
  state = {
    discoveries: [],
    sortedDiscoveries: [],
  }

  componentDidMount() {
    this.setState({
      discoveries: this.props.discoveries.edges,
      sortedDiscoveries: this.props.discoveries.edges,
    })
  }

  render() {
    return (
      <section className={styles.discoveries}>
        <Title title="our" subtitle="discoveries" />
        <div className={styles.center}>
          {this.state.sortedDiscoveries.map(({ node }) => {
            return <Discovery discovery={node} key={node.contentful_id} />
          })}
        </div>
      </section>
    )
  }
}
