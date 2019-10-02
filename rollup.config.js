import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default {
  input: "index.js",
  output: {
    file: "dist/modal.esm.js",
    format: "esm"
  },
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**"
    })
  ],
  external: ["react", "react-dom", "styled-components"]
};
