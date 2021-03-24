import React, { Component  } from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';

import "./goTop.css"

class GoTop extends Component {
  constructor(props) {
      super(props)
      this.isTopSent = "もう あがれないよ";
      this.isNotTopSent = "あがるかい？";
      this.state = {
        text : this.isTopSent
      };
      this._isMounted = false
  }

  componentDidMount() {
      this._isMounted = true
      window.addEventListener('scroll', event => this.checkIsTop(), true);
  }

  componentWillUnmount() {
      this._isMounted = false
      window.removeEventListener('scroll', event => this.checkIsTop());
  }

  async checkIsTop() {
    var isTop = Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop) === 0;

    var changedText = isTop ? this.isTopSent : this.isNotTopSent;

    this._isMounted && this.setState({
      text : changedText
    });
  }

  render() {
      return (
        <button onClick={() => scrollTo('#global')} id="go-top-button">
          {this.state.text}
        </button>
      )
  }
}

export default GoTop
