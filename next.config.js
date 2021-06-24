module.exports = {
  transpileModules: ['unist-util-visit', 'unist-util-is'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pages/Contents',
        permanent: true,
      },
    ]
  },
}
