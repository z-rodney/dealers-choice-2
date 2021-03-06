module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-redux/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-redux"
    ],
    "rules": {
        "no-case-declarations": [0],
        "react/prop-types": [0],
        "react-redux/prefer-separate-component-file": [0],
        "react-redux/mapDispatchToProps-prefer-shorthand": [0]
    }
};
