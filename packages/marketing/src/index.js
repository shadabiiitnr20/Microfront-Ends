import("./bootstrap").then(({ mount }) => {
  const localRoot = document.getElementById("_marketing-dev-root");
  mount({
    mountPoint: localRoot,
    routingStrategy: "browser",
  });
});

export {};
