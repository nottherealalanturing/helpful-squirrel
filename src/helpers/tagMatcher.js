const preparePayload = (text) => {
  /* this method helps generate appropriate tags from the user entry */
  /* input sanitization can also be performed here */
  const tempText = text;
  if (text.search('/1') !== -1) {
    return { text: tempText.replace('/1', ''), tag: 'h1' };
  }
  return { text: tempText, tag: 'p' };
};

export default preparePayload;
