const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  // 新增前缀
  assetPrefix: !debug ? '/nextjs-githubpages/' : '',
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}
