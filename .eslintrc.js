module.exports = {
  extends: "expo",
  plugins: ["formatjs", "eslint-plugin-react-compiler"],
  rules: {
    "formatjs/no-literal-string-in-jsx": "error",
    "react-compiler/react-compiler": "error",
  },
};
