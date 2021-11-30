module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  // if hosted in Github pages, since the format is user.github.io/REPO_NAME and Next.js expects the assets to live under the main path /, we need to rewrite it with the repository name.
  assetPrefix: process.env.NEXT_PUBLIC_DEVELOPMENT ? '' : '/project-template/',
  basePath: process.env.NEXT_PUBLIC_DEVELOPMENT ? '' : '/project-template',
}
