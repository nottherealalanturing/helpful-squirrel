import preparePayload from './tagMatcher';
/* input handler helper method */
const keyhandler = (
  e,
  state,
  setState,
  dispatcher,
  addBlock,
  showSelectMenu,
  hideSelectMenu,
) => {
  const { text, tag } = preparePayload(e.target.textContent);
  switch (e.key) {
    case '/':
      dispatcher(showSelectMenu());
      break;

    case 'Escape':
      e.preventDefault();
      dispatcher(hideSelectMenu());
      break;

    case 'Enter':
      if (state.previousKey === 'Shift') break;

      e.preventDefault();
      dispatcher(addBlock(text, tag));
      dispatcher(hideSelectMenu());
      break;

    default:
      break;
  }

  setState((prevState) => ({ ...prevState, previousKey: e.key }));
};

export default keyhandler;
