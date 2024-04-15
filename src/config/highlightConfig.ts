const hljs = require('highlight.js/lib/core');

hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));
hljs.registerLanguage('java', require('highlight.js/lib/languages/java'));
hljs.registerLanguage('python', require('highlight.js/lib/languages/python'));
hljs.registerLanguage('graphql', require('highlight.js/lib/languages/graphql'));
hljs.registerLanguage('sql', require('highlight.js/lib/languages/sql'));

module.exports = hljs;
