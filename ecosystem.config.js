module.exports = {
  apps: [
    {
      name: 'nuxt3-prod',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
