import React, { Component } from 'react'

export class ColorSelector extends Component {
  render() {
    return (
      <figcaption>
        <ul>
          <li>
            <h3>Hue</h3>
            <input
              type="range"
              className="slider"
              min="0"
              max="360"
              value={this.props.hue}
              onInput={event => this.props.changeHSL(event, 1)}
              style={{
                backgroundColor: `hsl(${this.props.hue},
                       100%,
                       50%)`,
              }}
            />
            <input
              type="text"
              className="textBox"
              value={this.props.hue}
              onInput={event => this.props.changeHSL(event, 1)}
            />
            <p>&#176;</p>
          </li>
          <li>
            <h3>Saturation</h3>
            <input
              type="range"
              className="slider"
              min="0"
              max="100"
              value={this.props.saturation}
              onInput={event => this.props.changeHSL(event, 2)}
              style={{
                backgroundColor: `hsl(${this.props.hue},
                       ${this.props.saturation}%,
                       50%)`,
              }}
            />
            <input
              type="text"
              className="textBox"
              value={this.props.saturation}
              onInput={event => this.props.changeHSL(event, 2)}
            />
            <p>&#37;</p>
          </li>
          <li>
            <h3>Lightness</h3>
            <input
              type="range"
              className="slider"
              min="0"
              max="100"
              value={this.props.lightness}
              onInput={event => this.props.changeHSL(event, 3)}
              style={{
                backgroundColor: `hsl(${this.props.hue},
                       0%,
                       ${this.props.lightness}%)`,
              }}
            />
            <input
              type="text"
              className="textBox"
              value={this.props.lightness}
              onInput={event => this.props.changeHSL(event, 3)}
            />
            <p>&#37;</p>
          </li>
          <li>
            <h3>Alpha</h3>
            <input
              type="range"
              className="slider"
              min="0"
              max="1"
              step="0.01"
              value={this.props.alpha}
              onInput={event => this.props.changeHSL(event, 4)}
              style={{
                backgroundColor: `hsla(${this.props.hue},
                       100%,
                       50%,
                       ${this.props.alpha})`,
              }}
            />
            <input
              type="text"
              className="textBox"
              value={this.props.alpha}
              onInput={event => this.props.changeHSL(event, 4)}
            />
          </li>
        </ul>
      </figcaption>
    )
  }
}
