import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const inicialState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
};

class App extends React.Component {
  constructor() {
    super();

    this.handleCardPreview = this.handleCardPreview.bind(this);
    this.handleBottonDisabled = this.handleBottonDisabled.bind(this);
    this.handleBottonSave = this.handleBottonSave.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      allCards: [],
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

  handleBottonSave(event) {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      hasTrunfo,
      allCards,
    } = this.state;

    const card = {
      name: cardName,
      description: cardDescription,
      attr1: cardAttr1,
      attr2: cardAttr2,
      attr3: cardAttr3,
      image: cardImage,
      rare: cardRare,
      trunfo: hasTrunfo,
    };

    this.setState(inicialState, () => {
      this.setState({
        allCards: [...allCards, card],
      });
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
            onSaveButtonClick={ this.handleBottonSave }
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
        {/* <div>
          {allCards.map((card) => {
            <Card
              cardName={ card.name }
              cardDescription={ card.description }
              cardAttr1={ card.attr1 }
              cardAttr2={ card.atrr2 }
              cardAttr3={ card.attr3 }
              cardImage={ card.image }
              cardRare={ card.rare }
              cardTrunfo={ card.trunfo }
            />;
          })}
        </div> */}
      </div>
    );
  }
}

export default App;
