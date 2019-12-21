const replace = (text, toReplace, withThis) => {
  return text.split(toReplace).join(withThis);
};

module.exports = replace;
