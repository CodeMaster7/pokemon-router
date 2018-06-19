import React, {Component} from 'react';

import {Link} from 'react-router-dom';

export default class Home extends Component {
  constructor() {
    super()

    this.state = {
      input: ''
    }
  }

  handleChange(input) {
    this.setState({input: input})
  }

  render() {
    console.log(this.state);
    return(
      <div>
        <h1>POKEMON! GUNNA GET THEM EACH!</h1>
        <input type="text" value={this.state.input} onChange={(e) => this.handleChange(e.target.value)}/>
        <Link to={`/pokemon/${this.state.input}`}>See Pokemon</Link>
      </div>
    )
  }
}