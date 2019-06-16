// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Az Trip',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        remark: {}
      }
    },

    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
         tailwindConfig: './tailwind.config.js',
         purgeConfig: {},
         presetEnvConfig: {},
         shouldPurge: true,
         shouldImport: true,
         shouldTimeTravel: true,
      }
    },

  ]
}
