function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*beta.platacard.*") ||
      shExpMatch(host, "*beta.diftech.*") ||
      shExpMatch(host, "*sandbox.platacard.*") ||
      shExpMatch(host, "*mock-beta.platacard.*")
  ) {
    return "PROXY 192.168.1.77:9090; DIRECT;";
  }
  return "DIRECT;";
}
