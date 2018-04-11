module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jquery": true,
        "jasmine": true,
        "mocha": true,
        "node": true
    },
    "extends": "ovh",
    "rules": {
        "newline-per-chained-call": 0,
        "no-restricted-properties": [0, {
            "object": "Math",
            "property": "pow"
        }],
        "no-magic-numbers": 0,
        "no-underscore-dangle": 0,
        "prefer-arrow-callback": 0,
        "prefer-template": 0,
        "object-shorthand": 0,
        "class-methods-use-this": 0
    },
    "globals": {
        "_": true,
    },
    "parserOptions": {
        "sourceType": "module",
    },
};
