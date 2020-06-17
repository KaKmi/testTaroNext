module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {
    prerender: {
      match: 'pages/home/**',
    }
  },
  h5: {
    devServer: {
      port: 10087
    }
  }
}
