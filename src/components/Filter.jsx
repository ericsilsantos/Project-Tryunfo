import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  constructor() {
    super();

    this.state = {
      disabledFilter: false,
    };
    this.handleDisableFilter = this.handleDisableFilter.bind(this);
  }

  handleDisableFilter({ target }) {
    const { checked } = target;
    let bool = false;
    if (checked) bool = true;

    this.setState({
      disabledFilter: bool,
    });
  }

  render() {
    const {
      handleFilterName,
      handleFilterRare,
    } = this.props;
    const { disabledFilter } = this.state;
    return (
      <section>
        <p>Filtro por nome</p>
        <input
          data-testid="name-filter"
          type="text"
          disabled={ disabledFilter }
          onChange={ handleFilterName }
        />
        <p>Filtro por Raridade</p>
        <select
          disabled={ disabledFilter }
          data-testid="rare-filter"
          onChange={ handleFilterRare }
        >
          <option value="">Todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <label data-testid="trunfo-filter" htmlFor="super">
          <br />
          <input
            id="super"
            type="checkbox"
            onClick={ this.handleDisableFilter }
          />
          Super Trunfo
        </label>
      </section>
    );
  }
}

Filter.propTypes = {
  // disabledFilter: PropTypes.string.isRequired,
  handleFilterName: PropTypes.func.isRequired,
  handleFilterRare: PropTypes.func.isRequired,
};

export default Filter;
