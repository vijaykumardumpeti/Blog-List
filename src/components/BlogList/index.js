import {Component} from 'react'
import BlogItem from '../BlogItem'

export default class BlogList extends Component {
  render() {
    const {blogsList} = this.props
    return (
      <ul className="bloglist-unorderedlist-container">
        {blogsList.map(eachObject => (
          <BlogItem key={eachObject.id} eachObject={eachObject} />
        ))}
      </ul>
    )
  }
}
