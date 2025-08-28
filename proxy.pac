function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*beta.platacard.mx") ||
      shExpMatch(host, "*beta.diftech.net") ||
      shExpMatch(host, "*sandbox.platacard.mx") ||
      shExpMatch(host, "*dev.beta.diftech.net") ||
      shExpMatch(host, "*mock-beta.platacard.mx")
  ) {
    return "PROXY 172.21.15.68:9090; DIRECT;";
  }
  return "DIRECT;";
}
