import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.handleCardPreview = this.handleCardPreview.bind(this);
    this.handleBottonDisabled = this.handleBottonDisabled.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'nomal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  handleCardPreview({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.handleBottonDisabled());
  }

  handleBottonDisabled() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    let desativado = false;
    const totalMaximo = 210;
    const min = 0;
    const max = 90;
    const atrr1 = parseInt(cardAttr1, 10);
    const atrr2 = parseInt(cardAttr2, 10);
    const atrr3 = parseInt(cardAttr3, 10);
    if (atrr1 > max || atrr2 > max || atrr3 > max) desativado = true;
    if (atrr1 < min || atrr2 < min || atrr3 < min) desativado = true;
    if ((atrr1 + atrr2 + atrr3) > totalMaximo) desativado = true;
    if (!cardName || !cardDescription || !cardRare || !cardImage) desativado = true;

    this.setState({
      isSaveButtonDisabled: desativado,
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo!!</h1>
        <div className="flex">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.handleCardPreview }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
      </div>
    );
  }
}

export default App;
