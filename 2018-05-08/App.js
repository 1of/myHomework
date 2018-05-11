import React, { Component } from 'react';
import './App.css';


class IncDecNumber extends Component {

  constructor(props) {
        super(props);
        this.state = {count: 0};
        this.IncCount = () =>  {
          this.setState({count: this.state.count+1});
        };
        this.DecCount = () =>  {
          this.setState({count: this.state.count-1});
        };
     }

render() {
  return <div>
              <p>Создайте компонент, который содержит две кнопки и место для вывода числа.
                  При клике на одну из кнопок – число в поле должно уменьшаться на единицу, при клике на другу кнопку – увеличиваться на единицу.
                  Изначально число имеет значение 0.</p>
              <button onClick={this.DecCount}> - </button>
              <span>{this.state.count}</span>
              <button onClick={this.IncCount}> + </button>
         </div>
}
}

class ChangingTextColor extends Component {

  constructor(props) {
        super(props);
        this.state = {color: props.color};
        this.changeColorRed = this.changeColorRed.bind(this);
        this.changeColorBlue = this.changeColorBlue.bind(this);
        this.changeColorBlack = this.changeColorBlack.bind(this);
     }
    changeColorRed = () =>  { this.setState( {color: "red"} ); }
    changeColorBlue = ()  => { this.setState( {color: "blue"} ); }
    changeColorBlack = ()  => { this.setState( {color: "black"} ); }

    static get defaultProps() {
            return {color: "black"};
 }

render() {
  return <div>
              <p>Создайте компонент, который выводит произвольную строку текста и три кнопки.
              При клике по кнопкам должен меняться цвет текста {this.props.id}
              </p>
              <span style={this.state}>Текст</span>
              <button onClick={this.changeColorRed}> Красный </button>
              <button onClick={this.changeColorBlue}> Синий </button>
              <button onClick={this.changeColorBlack}>Сброс </button>
         </div>
}
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <IncDecNumber />
        <ChangingTextColor />
        </header>
        <p className="App-intro">
          =)
        </p>
      </div>

    );
  }
}





export default App;
