import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      yazi: 0,
      tura: 0,
      flipping: false,
      counter: 0,
      currentNumber: 0
    };
  }
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.

    setTimeout(() => {
      let number = Math.random();
      //console.log(number);
      number > 0.5
        ? this.setState({ tura: this.state.tura + 1 })
        : this.setState({ yazi: this.state.yazi + 1 });
      this.setState({ currentNumber: number });
      this.setState({ counter: this.state.counter + 1 });
      this.setState({ flipping: false })
    }
    , 1000);

  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.currentNumber < 0.5 ? "yazi" : null} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.counter} </strong>
          atıştan
          <strong> {this.state.tura} </strong>ü tura
          <strong> {this.state.yazi} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
