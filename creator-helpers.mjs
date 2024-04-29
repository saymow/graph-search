import { SPECIAL_NODE_RADIUS, NORMAL_NODE_RADIUS } from "./constants.mjs";

export function addNode(matrix, nodes, node) {
  nodes.push(node);

  for (const row of matrix) {
    row.push(0);
  }

  matrix.push(Array(matrix.length + 1).fill(0));
}

export function addEdge(matrix, edge) {
  const [origin_node, target_node] = edge;
  matrix[origin_node][target_node] = 1;
  matrix[target_node][origin_node] = 1;
}

export function isWithin(rect, pos) {
  const [a_x, a_y] = rect[0];
  const [b_x, b_y] = rect[1];
  const [x, y] = pos;

  return a_x <= x && b_x >= x && a_y <= y && b_y >= y;
}

export function getNode(nodes, pos) {
  return nodes.findIndex((node) => {
    const [x, y] = node.pos;

    return isWithin(
      [
        [x - SPECIAL_NODE_RADIUS, y - SPECIAL_NODE_RADIUS],
        [x + SPECIAL_NODE_RADIUS, y + SPECIAL_NODE_RADIUS],
      ],
      pos
    );
  });
}

export function drawNode(ctx, node) {
  const {
    type,
    pos: [x, y],
  } = node;

  ctx.beginPath();
  ctx.arc(
    x,
    y,
    type === "final" ? SPECIAL_NODE_RADIUS : NORMAL_NODE_RADIUS,
    0,
    2 * Math.PI
  );
  ctx.fillStyle = type === "final" ? "red" : "black";
  ctx.stroke();
  ctx.fill();
}

export function drawEdge(ctx, nodes, edge) {
  const [originNode, targetNode] = [nodes[edge[0]], nodes[edge[1]]];

  ctx.moveTo(originNode.pos[0], originNode.pos[1]);
  ctx.lineTo(targetNode.pos[0], targetNode.pos[1]);
  ctx.strokeStyle = "black";
  ctx.strokeWidth = 100;
  ctx.lineCap = "round";
  ctx.stroke();
}
