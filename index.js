module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "eslint-config-andy",
    "plugin:react/recommended"
  ],
  "rules": {
    "react/jsx-boolean-value": ["error", "never"],
    "react/jsx-equals-spacing": ["error", "never"],
    "react/jsx-closing-bracket-location": "error",
    "react/jsx-curly-spacing": ["error", "never"],
    "react/jsx-indent-props": "error",
    "react/jsx-key": "error",
    "react/jsx-space-before-closing": "error",
    "react/no-did-mount-set-state": 0,
    "react/no-unknown-property": 0,
    // use babel-plugin-flow-react-proptypes instead
    "react/prop-types": 0,
    "react/jsx-wrap-multilines": "error",
  },
  "plugins": [
    "react"
  ]
}

