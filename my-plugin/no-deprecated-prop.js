module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'oldProp is deprecated',
    },
  },
  create(context) {
    return {
      JSXOpeningElement(node) {},
    };
  },
};
