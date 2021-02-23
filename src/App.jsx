import React, { Component } from 'react'
import { ColorDisplay } from './components/ColorDisplay'
import { ColorSelector } from './components/ColorSelector'

export class App extends Component {
  state = {
    hue: Math.floor(Math.random() * 360),
    saturation: Math.floor(Math.random() * 100),
    lightness: Math.floor(Math.random() * 100),
    alpha: 1,
  }
  changeHSL = (event, hslPicker) => {
    switch (hslPicker) {
      case 1:
        this.setState({ hue: event.target.value })
        break
      case 2:
        this.setState({ saturation: event.target.value })
        break
      case 3:
        this.setState({ lightness: event.target.value })
        break
      case 4:
        this.setState({ alpha: event.target.value })
      default:
        break
    }
  }

  randomize = () => {
    this.setState({
      hue: Math.floor(Math.random() * 360),
      saturation: Math.floor(Math.random() * 100),
      lightness: Math.floor(Math.random() * 100),
    })
  }

  render() {
    const { hue, saturation, lightness, alpha } = this.state

    return (
      <div>
        <header>
          <h1>Color Picker</h1>
        </header>
        <main>
          <ColorDisplay
            hue={hue}
            saturation={saturation}
            lightness={lightness}
            alpha={alpha}
          />
          <ColorSelector
            hue={hue}
            saturation={saturation}
            lightness={lightness}
            alpha={alpha}
            changeHSL={this.changeHSL}
          />
        </main>
        <footer>
          <button onClick={this.randomize}> Color Randomizer</button>
          <h2>Created by Jerid Fenderson</h2>
        </footer>
      </div>
    )
  }
}
