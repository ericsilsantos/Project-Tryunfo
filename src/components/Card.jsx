import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
    } = this.props;
    return (
      <div className="card">
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="name-card">
          {`Nome: ${cardName}`}
        </p>
        <p data-testid="description-card">
          {`Descrição: ${cardDescription}`}
        </p>
        <p data-testid="attr1-card">
          {`Atributo 1: ${cardAttr1}`}
        </p>
        <p data-testid="attr2-card">
          {`Atributo 2: ${cardAttr2}`}
        </p>
        <p data-testid="attr3-card">
          {`Atributo 3: ${cardAttr3}`}
        </p>
        <p data-testid="rare-card">
          {`Raridade: ${cardRare}`}
        </p>
        {cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : ''}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};

Card.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
};

export default Card;
