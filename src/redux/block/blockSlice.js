/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { hideSelectMenu, showSelectMenu } from './actions';

const initialState = {
  blocks: [],
  selectMenuPos: { x: 0, y: 0, h: 0 },
  showSelectMenu: false,
};

const blockReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(showSelectMenu, (state) => {
      state.showSelectMenu = true;
    })
    .addCase(hideSelectMenu, (state) => {
      state.showSelectMenu = false;
    })
    .addMatcher(
      (action) => action.type.endsWith('selectMenuPos'),
      (state, action) => {
        state.selectMenuPos = action.payload;
      },
    )
    .addMatcher(
      (action) => action.type.endsWith('addBlock'),
      (state, action) => {
        state.blocks.push(action.payload);
      },
    );
});

export default blockReducer;
