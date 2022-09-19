module.exports = {
  meta: {
    type: 'suggestion',
    messages: {
      message1: 'Prefer functional components over class components',
    },
  },
  create: (context) => {
    return {
      ClassDeclaration: (node) => {
        if (node.superClass?.object.name === 'React') {
          // console.log(node.id);
          context.report({
            /**
             * loc: SourceLocation {
             *    start: Position { line: 1, column: 6 },
             *    end: Position { line: 1, column: 17 }
             * },
             */
            loc: node.id?.loc,
            messageId: 'message1',
          });
        }
      },
    };
  },
};
