import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form action="" className="formCard">
        <label htmlFor="nome">
          Nome
          <br />
          <input id="nome" data-testid="name-input" type="text" />
        </label>

        <label htmlFor="descricao">
          Descrição
          <br />
          <textarea id="descricao" data-testid="description-input" />
        </label>

        <label htmlFor="atributo1">
          {'Attr01: '}
          <input data-testid="attr1-input" id="atributo1" type="number" />
        </label>

        <label htmlFor="atributo2">
          Attr02:
          <input data-testid="attr2-input" id="atributo2" type="number" />
        </label>

        <label htmlFor="atributo3">
          Attr03:
          <input data-testid="attr3-input" id="atributo3" type="number" />
        </label>

        <label htmlFor="imgCard">
          Imagem:
          <input data-testid="image-input" id="imgCard" type="text" />
        </label>

        <label htmlFor="raridade">
          Raridade:
          <select data-testid="rare-input" id="raridade">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="superTrunfo">
          <input data-testid="trunfo-input" name="superTrunfo" type="checkbox" />
          Super Trunfo
        </label>

        <button data-testid="save-button" type="submit">Salvar</button>
      </form>
    );
  }
}
export default Form;
