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
        <div>
          {this.props.data.types.map((power, index) => (
            <div className="power-style" key={index}>
              {power}
            </div>
          ))}
        </div>
      </li>
    );
  }
}
export default Pokemon;
