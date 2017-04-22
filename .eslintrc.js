module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        "jest"
    ],
  "env": {
    "jest/globals": true
  },
    "settings": {
    "typelint": {
      "models": {
        "redux": {
          "reducerPath": "./src/reducers/index.js"
        }
      },
      "useCache":  true
    }
  },
  "rules": {
    "comma-dangle": ["error", "never"],
    "func-names": ["error", "never"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "jsx-quotes": ["error", "prefer-single"],
  }
};
