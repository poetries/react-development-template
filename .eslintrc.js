// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  plugins: [

  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    'no-multiple-empty-lines': [2, {'max': 4}],
    // allow funName() {} & funName () {} & function() {}
    'space-before-function-paren': ['error', {
      'anonymous': 'ignore',
      'named': 'ignore',
      'asyncArrow': 'always'
    }],
    // 关闭语句强制分号结尾
    "semi": [0],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
