import React, {PropTypes} from 'react'
import CSSModules from 'react-css-modules'
import styles from './List.css'

class List extends React.Component {
  componentWillMout () {
  }
  render () {
    return (
      <div styleName='list'>
        {this.props.TitleView}
        <div styleName='list-container'>
          <ul>{this.props.list}</ul>
          {this.props.ListActionView}
        </div>
      </div>
    )
  }
}

List.propTypes = {
  TitleView: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired
}

export default CSSModules(List, styles)
