function FindProxyForURL(url, host) {
  if (dnsDomainIs(host, "beta.platacard.mx")) {
    return "PROXY 192.168.1.77:9090";
  }
  return "DIRECT";
}
