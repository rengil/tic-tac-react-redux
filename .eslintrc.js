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
    "prefer-template": 0,
    "react/require-default-props": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "no-plusplus": 0,
    "no-param-reassign": 0
  }
};
