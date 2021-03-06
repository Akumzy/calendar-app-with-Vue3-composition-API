const plugins = [require("tailwindcss"), require("autoprefixer")];

if (process.env.NODE_ENV === "production") {
  plugins.push(require("@fullhuman/postcss-purgecss"));
}

module.exports = { plugins };
