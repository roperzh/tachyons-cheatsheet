// See http://brunch.io for documentation.
exports.files = {
  javascripts: { joinTo: 'app.js' }
};

exports.plugins = {
  babel: {
    presets: ['latest', 'stage-0'],
    plugins: [
      ["transform-react-jsx", { "pragma":"h" }],
      ["transform-object-rest-spread"]
    ]
  }
};
