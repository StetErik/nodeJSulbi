module.exports = (baseURL) => (req) => {
  const parsedURL = new URL(req.url, baseURL)
  req.pathname = parsedURL.pathname
  const params = {}
  parsedURL.searchParams.forEach((value, key) => params[key] = value)
  req.params = params
}