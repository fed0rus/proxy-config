function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*beta.plata*") ||
      shExpMatch(host, "*beta.bancoplata*") ||
      shExpMatch(host, "*beta.diftech.*") ||
      shExpMatch(host, "*sandbox.plata*") ||
      shExpMatch(host, "*mock-beta.plata*") ||
      shExpMatch(host, "https://beta.plata.co/client.diftech*")
  ) {
    return "PROXY 172.21.15.120:9090; DIRECT;";
  }
  return "DIRECT;";
}
