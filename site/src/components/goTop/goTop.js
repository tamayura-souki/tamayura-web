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
  }

  componentDidMount() {
      window.addEventListener('scroll', event => this.checkIsTop(), true);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', event => this.checkIsTop());
  }

  checkIsTop() {
    var isTop = Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop) == 0;

    var changedText = isTop ? this.isTopSent : this.isNotTopSent;

    this.setState({
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
