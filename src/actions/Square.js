import * as types from '../constants/ActionTypes'

let onClick (drawType) => {
  return {
    type: types.TICK_SQUARE,
    drawType
  }
}
