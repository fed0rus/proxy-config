function FindProxyForURL(url, host) {
  if (
    dnsDomainIs(host, "beta.platacard.mx") ||
    dnsDomainIs(host, "dev.beta.diftech.net")
  ) {
    return "PROXY 192.168.1.77:9090; DIRECT";
  }
  return "DIRECT";
}
