import { createAction, nanoid } from '@reduxjs/toolkit';

export const addBlock = createAction('addBlock', (text, tag = 'p') => ({
  payload: {
    id: nanoid(),
    text,
    tag,
  },
}));

export const deleteBlock = createAction('addBlock', (text, tag = 'p') => ({
  payload: {
    id: nanoid(),
    text,
    tag,
  },
}));

export const selectMenuPos = createAction('selectMenuPos');

export const showSelectMenu = createAction('showSelectMenu');

export const hideSelectMenu = createAction('hideSelectMenu');

export const chooseTag = createAction('chooseTag');
