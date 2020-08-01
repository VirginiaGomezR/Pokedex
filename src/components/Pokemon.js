import React from 'react';

class Pokemon extends React.Component {
  render() {
    return (
      <li className="list-styles">
        <h2 className="title-pokemon">{this.props.data.name}</h2>
        <img
          className="picture-style"
          src={this.props.data.url}
          alt={this.props.data.name}
        />
        <ul className="power-list-style">
          {this.props.data.types.map((power, id) => (
            <li className="power-style" key={id}>
              {power}
            </li>
          ))}
        </ul>
      </li>
    );
  }
}
export default Pokemon;
