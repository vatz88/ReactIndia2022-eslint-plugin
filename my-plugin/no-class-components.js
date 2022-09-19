module.exports = {
  meta: {
    type: 'suggestion',
    messages: {
      message1: 'Prefer functional components over class components',
    },
  },
  create: (context) => {
    return {
      ClassDeclaration: (node) => {},
    };
  },
};
