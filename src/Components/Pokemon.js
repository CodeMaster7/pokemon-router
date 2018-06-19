import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

export default class Pokemon extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: {}
    }
  }

  componentDidMount() {
    console.log('CDM');
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({pokemon: response.data})
      })
  }

  render() {
    let img = ''
    if(this.state.pokemon.sprites) {
      img = this.state.pokemon.sprites.front_default;
    }
    return(
      <div>
        <img src={img} style={{width: '400px', height: '400px'}} alt=""/>
        <h1>{this.state.pokemon.name}</h1>
        <button><Link to="/">Search Again</Link></button>
      </div>
    )
  }
}