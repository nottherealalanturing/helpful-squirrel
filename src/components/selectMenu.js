import React from 'react';
import { useSelector } from 'react-redux';

const SelectMenu = () => {
  const pos = useSelector((state) => state.block.selectMenuPos);

  const positionAttributes = {
    position: 'absolute',
    top: parseFloat(pos.top) + parseFloat(pos.height),
    left: pos.left,
  };

  return (
    <div className="selectmenu" style={positionAttributes}>
      <h3>Add blocks</h3>
      <p>Keep typing to filter, or escape to exit</p>
      <ul className="selectmenutagslist">
        <li className="selectmenutags">Heading 1</li>
      </ul>
    </div>
  );
};

export default SelectMenu;
