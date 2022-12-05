/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import keyHandler from '../helpers/keyhandler';
import useEffectOnce from '../helpers/useEffectOnce';
import {
  addBlock,
  hideSelectMenu,
  selectMenuPos,
  showSelectMenu,
} from '../redux/block/actions';

const Editor = () => {
  const blocks = useSelector((state) => state.block.blocks);

  const [state, setState] = useState({
    tag: 'p',
    previousKey: '',
    selectMenu: false,
  });
  const dispatcher = useDispatch();
  const firstItem = blocks[0];

  useEffect(() => {
    if (blocks.length !== 0) {
      document.getElementById('editor').firstChild.textContent = '';
      document.getElementById('editor').firstChild.classList.add('lastitem');
    }
  }, [blocks, firstItem]);

  useEffectOnce(() => {
    dispatcher(addBlock('', 'p'));
  });

  return (
    <div id="editor">
      {blocks.map((block) => (
        <block.tag
          key={block.id}
          contentEditable
          className="textblock"
          onKeyDown={(e) => {
            keyHandler(
              e,
              state,
              setState,
              dispatcher,
              addBlock,
              showSelectMenu,
              hideSelectMenu,
            );
            const { top, left, height } = e.target.getBoundingClientRect();
            dispatcher(selectMenuPos({ top, left, height }));
          }}
          onBlur={(e) => (e.target.innerHTML = e.target.innerHTML.replace('/1', ''))}
          onFocus={(e) => {
            const { top, left, height } = e.target.getBoundingClientRect();
            dispatcher(selectMenuPos({ top, left, height }));
          }}
        >
          {block.text}
        </block.tag>
      ))}
    </div>
  );
};

export default Editor;
