import React, { Component } from 'react'

export class ColorDisplay extends Component {
  render() {
    return (
      <figure>
        <div
          className="box"
          style={{
            backgroundColor: `hsla(${this.props.hue},
                 ${this.props.saturation}%,
                 ${this.props.lightness}%,
                 ${this.props.alpha})`,
          }}
        >
          <h2
            style={{
              color: `hsl(${this.props.hue},
               ${this.props.saturation}%,
               ${this.props.lightness}%)`,
            }}
          >
            Sometimes the things that you're searching for has been in front of
            you the whole time.
          </h2>
        </div>
      </figure>
    )
  }
}
