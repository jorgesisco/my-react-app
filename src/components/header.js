import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 100) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img
              src={require('../images/logo-designcode.svg')}
              width="30"
            ></img>
          </Link>
          <Link to="/courses">Our Services</Link>
          <Link to="/downloads">Case Studies</Link>
          <Link to="/workshops ">Blog</Link>
          <Link to="/buy">
            <button>Book a free consultation</button>
          </Link>
        </div>
      </div>
    )
  }
}
export default Header
