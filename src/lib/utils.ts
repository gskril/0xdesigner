export function parseIpfsUri(uri: string) {
  const [ipfs, hash] = uri.split('://')
  return `https://ipfs.io/ipfs/${hash}`
}
