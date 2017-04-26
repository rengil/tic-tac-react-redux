import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setPlayersAction } from '../actions/Players';
import '../styles/players.less';

/**
 * Form that has the players name to be defined
*/
class PlayersContainer extends React.Component {

  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);


    this.state = {
      circle: '',
      nought: '',
      error: undefined
    };
  }

  onSave(e) {
    e.preventDefault();
    this.props.setPlayersAction(this.state.circle.trim(), this.state.nought.trim());
  }

  onChangeInput(e) {
    const inputName = e.target.name;
    const actualState = Object.assign({}, this.state);
    actualState[inputName] = e.target.value;
    this.setState(actualState);
  }

  render() {
    return (
      <div className='players-container'>
        {
          <p className={`errormessage ${this.props.error ? '-show' : ''}`}> {this.props.error}</p>
        }
        <label className='draw' htmlFor='circle'> Player Circle </label>
        <input
          className='player'
          id='circle'
          onChange={this.onChangeInput}
          name='circle'
          value={this.state.circle}
          type='text'
        />

        <label className='draw' htmlFor='nought'> Player Nought </label>
        <input
          className='player'
          id='nought'
          onChange={this.onChangeInput}
          name='nought'
          value={this.state.nought}
          type='text'
        />

        <button className='set' onClick={this.onSave}> Set players </button>

      </div>
    );
  }

}

/**
 * @memberof components.PlayersContainer
 * @prop {setPlayersAction} propTypes - define the players actions
 * @prop {error} propTypes - when errors on the record happens
*/
PlayersContainer.propTypes = {
  setPlayersAction: PropTypes.func.isRequired,
  error: PropTypes.string
};

const mapStateToProps = state => ({
  error: state.Players.error
});

export default connect(
  mapStateToProps,
  { setPlayersAction }
)(PlayersContainer);
