export const NORMAL_NODE_RADIUS = 8;
export const SPECIAL_NODE_RADIUS = 12;
export const NODE_TYPE = Object.seal({
  NORMAL: "NORMAL",
  FINAL: "FINAL",
});
export const NODE_STATUS = Object.seal({
  DISCOVERED: "DISCOVERED",
  VISITED: "VISITED",
  FOUND: "FOUND",
  PATH: "PATH",
});
export const RUN_EVENT_TYPE = Object.seal({
  NODE: "NODE",
  EDGE: "EDGE",
});
