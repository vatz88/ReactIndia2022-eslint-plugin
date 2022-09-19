module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'oldProp is deprecated',
    },
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        if (node.name?.name === 'MyComponent') {
          const hasOldProp = node.attributes.some((attr) => {
            if (attr.name?.name === 'oldProp') {
              return true;
            }
          });
          if (hasOldProp) {
            context.report({
              node,
              message: "'oldProp' is deprecated, please use new prop",
            });
          }
        }
      },
    };
  },
};
