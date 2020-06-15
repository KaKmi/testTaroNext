module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {
    prerender: {
      match: 'pages/reacthooks/**',
    }
  },
  h5: {
    devServer: {
      port: 10087
    }
  }
}
