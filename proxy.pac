function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*beta.platacard.*") ||
      shExpMatch(host, "*beta.diftech.*") ||
      shExpMatch(host, "*sandbox.platacard.*") ||
      shExpMatch(host, "*mock-beta.platacard.*")
  ) {
    return "PROXY 172.21.15.164:9090; DIRECT;";
  }
  return "DIRECT;";
}
