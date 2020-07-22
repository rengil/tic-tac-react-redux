import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setPlayersAction } from '../actions/Players';
import '../styles/players.scss';

/**
 * Form that has the players name to be defined
*/
class PlayersContainer extends React.Component {

  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);


    this.state = {
      circle: '',
      nought: '',
      error: undefined
    };
  }

  componentDidMount() {
    this.focusInput.focus();
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

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.onSave(e);
    }
  }

  render() {
    return (
      <div onKeyPress={this.handleKeyPress} className='players-container columns is-multiline'>
        {
          <div className='column is-11'>
            <p className={`errormessage ${this.props.error ? '-show' : ''}`}> {this.props.error}</p>
          </div>
        }
        <div className='column is-11'>
        <label className='draw' htmlFor='circle'> Circle </label>
          <input
            ref={(input) => { this.focusInput = input; }}
            className='player'
            id='circle'
            onChange={this.onChangeInput}
            name='circle'
            value={this.state.circle}
            type='text'
            maxLength='10'
            size='10'
          />
        </div>

        <div className='column is-11'>
          <label className='draw' htmlFor='nought'> Nought </label>
          <input
            className='player'
            id='nought'
            onChange={this.onChangeInput}
            name='nought'
            value={this.state.nought}
            type='text'
          />
        </div>

        <div className='column'>
          <button className='set' onClick={this.onSave}> Set players </button>
        </div>
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
