function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*beta.platacard.mx")) {
    return "PROXY 192.168.1.77:9090; DIRECT";
  }
  return "DIRECT";
}
