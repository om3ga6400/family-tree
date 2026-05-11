var nodes = new vis.DataSet([
  {
    id: "Alex",
    label: "Alex",
    color: { background: "#c2ff99", border: "#a3ff66" },
  },
  {
    id: "Arson",
    label: "Arson",
    color: { background: "#ffb399", border: "#ff9966" },
  },
  {
    id: "Ayden",
    label: "Ayden",
    color: { background: "#ffcc99", border: "#ffb366" },
  },
  {
    id: "Braxton",
    label: "Braxton",
    color: { background: "#9999ff", border: "#6666ff" },
  },
  {
    id: "Cailee",
    label: "Cailee",
    color: { background: "#ffcccc", border: "#ff9999" },
  },
  {
    id: "Caleb",
    label: "Caleb",
    color: { background: "#ffff99", border: "#ffff66" },
  },
  {
    id: "Camme",
    label: "Camme",
    color: { background: "#e699ff", border: "#cc66ff" },
  },
  {
    id: "Casey",
    label: "Casey",
    color: { background: "#e6ffcc", border: "#ccff99" },
  },
  {
    id: "Catherine",
    label: "Catherine",
    color: { background: "#ffccff", border: "#ff99ff" },
  },
  {
    id: "Charlie",
    label: "Charlie",
    color: { background: "#ff9999", border: "#ff6666" },
  },
  {
    id: "Charlotte",
    label: "Charlotte",
    color: { background: "#ffb3b3", border: "#ff9999" },
  },
  {
    id: "Forrest",
    label: "Forrest",
    color: { background: "#99ccff", border: "#66b3ff" },
  },
  {
    id: "Henry",
    label: "Henry",
    color: { background: "#99c2ff", border: "#66a3ff" },
  },
  {
    id: "Jack",
    label: "Jack",
    color: { background: "#b3b3b3", border: "#999999" },
  },
  {
    id: "Jasmine",
    label: "Jasmine",
    color: { background: "#ff99c2", border: "#ff66a3" },
  },
  {
    id: "Jones",
    label: "Jones",
    color: { background: "#99ff99", border: "#66ff66" },
  },
  {
    id: "Khai",
    label: "Khai",
    color: { background: "#ff99ff", border: "#ff66ff" },
  },
  {
    id: "Lincoln",
    label: "Lincoln",
    color: { background: "#ffc299", border: "#ffa366" },
  },
  {
    id: "Mason",
    label: "Mason",
    color: { background: "#e6e6e6", border: "#cccccc" },
  },
  {
    id: "Milo",
    label: "Milo",
    color: { background: "#99ffff", border: "#66ffff" },
  },
  {
    id: "Myla",
    label: "Myla",
    color: { background: "#ff99e6", border: "#ff66cc" },
  },
  {
    id: "Nick",
    label: "Nick",
    color: { background: "#ffe6cc", border: "#ffcc99" },
  },
  {
    id: "Noah G",
    label: "Noah G",
    color: { background: "#ff6666", border: "#ff3333" },
  },
  {
    id: "Noah J",
    label: "Noah J",
    color: { background: "#99ff99", border: "#66ff66" },
  },
  {
    id: "Owen",
    label: "Owen",
    color: { background: "#c299ff", border: "#a366ff" },
  },
  {
    id: "Penny",
    label: "Penny",
    color: { background: "#b3ffb3", border: "#99ff99" },
  },
  {
    id: "Ren",
    label: "Ren",
    color: { background: "#99ffe6", border: "#66ffcc" },
  },
  {
    id: "Rowin",
    label: "Rowin",
    color: { background: "#ccccff", border: "#9999ff" },
  },
  {
    id: "Sam",
    label: "Sam",
    color: { background: "#ffe6fa", border: "#ffb3e6" },
  },
  {
    id: "Zoe",
    label: "Zoe",
    color: { background: "#ccffcc", border: "#99ff99" },
  },
]);

var edges = new vis.DataSet([
  // Parents
  { from: "Alex", to: "Ren", label: "Parent", arrows: "to" },
  { from: "Arson", to: "Henry", label: "Parent", arrows: "to" },
  { from: "Arson", to: "Ren", label: "Parent", arrows: "to" },
  { from: "Arson", to: "Owen", label: "Parent", arrows: "to" },
  { from: "Ayden", to: "Jasmine", label: "Parent", arrows: "to" },
  { from: "Ayden", to: "Myla", label: "Parent", arrows: "to" },
  { from: "Braxton", to: "Ren", label: "Parent", arrows: "to" },
  { from: "Caleb", to: "Jasmine", label: "Parent", arrows: "to" },
  { from: "Camme", to: "Jasmine", label: "Parent", arrows: "to" },
  { from: "Catherine", to: "Arson", label: "Parent", arrows: "to" },
  { from: "Catherine", to: "Khai", label: "Parent", arrows: "to" },
  { from: "Catherine", to: "Zoe", label: "Parent", arrows: "to" },
  { from: "Forrest", to: "Charlie", label: "Parent", arrows: "to" },
  { from: "Forrest", to: "Jasmine", label: "Parent", arrows: "to" },
  { from: "Forrest", to: "Owen", label: "Parent", arrows: "to" },
  { from: "Jasmine", to: "Charlotte", label: "Parent", arrows: "to" },
  { from: "Jasmine", to: "Jack", label: "Parent", arrows: "to" },
  { from: "Jones", to: "Forrest", label: "Parent", arrows: "to" },
  { from: "Khai", to: "Charlie", label: "Parent", arrows: "to" },
  { from: "Khai", to: "Jasmine", label: "Parent", arrows: "to" },
  { from: "Lincoln", to: "Ren", label: "Parent", arrows: "to" },
  { from: "Milo", to: "Jasmine", label: "Parent", arrows: "to" },
  { from: "Myla", to: "Henry", label: "Parent", arrows: "to" },
  { from: "Myla", to: "Ren", label: "Parent", arrows: "to" },
  { from: "Noah G", to: "Jasmine", label: "Parent", arrows: "to" },
  { from: "Noah G", to: "Ren", label: "Parent", arrows: "to" },
  { from: "Noah J", to: "Charlotte", label: "Parent", arrows: "to" },
  { from: "Noah J", to: "Jack", label: "Parent", arrows: "to" },
  { from: "Noah J", to: "Jasmine", label: "Parent", arrows: "to" },
  { from: "Owen", to: "Jasmine", label: "Parent", arrows: "to" },
  { from: "Ren", to: "Penny", label: "Parent", arrows: "to" },

  // Step-Parents
  { from: "Catherine", to: "Myla", label: "Step-Parent", arrows: "to" },
  { from: "Forrest", to: "Owen", label: "Step-Parent", arrows: "to" },

  // Ex-Parents
  { from: "Nick", to: "Forrest", label: "Ex-Parent", arrows: "to", dashes: true },

  // Siblings
  { from: "Arson", to: "Khai", label: "Sibling", arrows: "" },
  { from: "Ayden", to: "Noah J", label: "Sibling", arrows: "" },
  { from: "Casey", to: "Forrest", label: "Sibling", arrows: "" },
  { from: "Jasmine", to: "Ayden", label: "Sibling", arrows: "" },
  { from: "Jasmine", to: "Caleb", label: "Sibling", arrows: "" },
  { from: "Jasmine", to: "Mason", label: "Sibling", arrows: "" },
  { from: "Jasmine", to: "Noah J", label: "Sibling", arrows: "" },
  { from: "Jasmine", to: "Owen", label: "Sibling", arrows: "" },
  { from: "Nick", to: "Catherine", label: "Sibling", arrows: "" },
  { from: "Ren", to: "Henry", label: "Sibling", arrows: "" },
  { from: "Sam", to: "Catherine", label: "Sibling", arrows: "" },

  // Grandparents
  { from: "Ayden", to: "Henry", label: "Grandparent", arrows: "to" },
  { from: "Ayden", to: "Ren", label: "Grandparent", arrows: "to" },
  { from: "Cailee", to: "Ren", label: "Grandparent", arrows: "to" },
  { from: "Catherine", to: "Jasmine", label: "Grandparent", arrows: "to" },
  { from: "Rowin", to: "Jasmine", label: "Grandparent", arrows: "to" },
  { from: "Rowin", to: "Ren", label: "Grandparent", arrows: "to" },
  { from: "Zoe", to: "Ren", label: "Grandparent", arrows: "to" },

  // Cousins
  { from: "Ayden", to: "Lincoln", label: "Cousin", arrows: "" },
  { from: "Jasmine", to: "Henry", label: "Cousin", arrows: "" },
  { from: "Jasmine", to: "Ren", label: "Cousin", arrows: "" },

  // Dating
  { from: "Alex", to: "Lincoln", label: "Dating", arrows: "", color: { color: "#ff69b4" } },
  { from: "Arson", to: "Myla", label: "Dating", arrows: "", color: { color: "#ff69b4" } },
  { from: "Camme", to: "Owen", label: "Dating", arrows: "", color: { color: "#ff69b4" } },
  { from: "Forrest", to: "Khai", label: "Dating", arrows: "", color: { color: "#ff69b4" } },
  { from: "Milo", to: "Ayden", label: "Dating", arrows: "", color: { color: "#ff69b4" } },
  { from: "Noah J", to: "Caleb", label: "Dating", arrows: "", color: { color: "#ff69b4" } },
  { from: "Ren", to: "Henry", label: "Dating", arrows: "", color: { color: "#ff69b4" } },
  { from: "Rowin", to: "Catherine", label: "Dating", arrows: "", color: { color: "#ff69b4" } },

  // Marriages
  { from: "Jasmine", to: "Noah J", label: "Married", arrows: "", color: { color: "#ff3333" }, width: 2 },
  { from: "Rowin", to: "Catherine", label: "Married", arrows: "", color: { color: "#ff3333" }, width: 2 },
  { from: "Zoe", to: "Cailee", label: "Married", arrows: "", color: { color: "#ff3333" }, width: 2 },

  // Uncles
  { from: "Casey", to: "Jasmine", label: "Uncle", arrows: "to" },
]);

var container = document.getElementById("mynetwork");
var data = { nodes: nodes, edges: edges };
var options = {
  nodes: {
    shape: "box",
    font: { size: 16, color: "#111", face: "Arial", multi: "html" },
    margin: 10,
    borderWidth: 2,
    shadow: true,
  },
  edges: {
    font: {
      size: 12,
      align: "middle",
      color: "#ddd",
      strokeWidth: 2,
      strokeColor: "#222",
    },
    smooth: { type: "dynamic" },
  },
  physics: {
    barnesHut: {
      gravitationalConstant: -5000,
      centralGravity: 0.1,
      springLength: 200,
    },
    stabilization: { iterations: 200 },
  },
};
var network = new vis.Network(container, data, options);
