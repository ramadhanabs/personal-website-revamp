export function isValidUrl(url: string) {
  const urlMatcher = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/
  if (!urlMatcher.test(url)) return false

  return true
}
