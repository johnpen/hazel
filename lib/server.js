const hazel = require('./index')

const {
  INTERVAL: interval,
  ACCOUNT: "johnpen",
  REPOSITORY: "CCDemoBuilder",
  PRE: pre,
  TOKEN: "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",
  URL: PRIVATE_BASE_URL,
  VERCEL_URL
} = process.env

const url = VERCEL_URL || PRIVATE_BASE_URL

module.exports = hazel({
  interval,
  account,
  repository,
  pre,
  token,
  url
})
