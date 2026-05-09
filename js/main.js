var nodes = new vis.DataSet([
  {
    id: "Jasmine",
    label: "Jasmine",
    color: { background: "#ff99c2", border: "#ff66a3" },
  },
  {
    id: "Forrest",
    label: "Forrest",
    color: { background: "#99ccff", border: "#66b3ff" },
  },
  {
    id: "Owen",
    label: "Owen",
    color: { background: "#c299ff", border: "#a366ff" },
  },
  {
    id: "Noah Jones",
    label: "Noah Jones",
    color: { background: "#99ff99", border: "#66ff66" },
  },
  {
    id: "Noah Gathers",
    label: "Noah Gathers\n(Excommunicated)",
    color: { background: "#ff6666", border: "#ff3333" },
  },
  {
    id: "Ayden",
    label: "Ayden",
    color: { background: "#ffcc99", border: "#ffb366" },
  },
  {
    id: "Milo",
    label: "Milo",
    color: { background: "#99ffff", border: "#66ffff" },
  },
  {
    id: "Khai",
    label: "Khai",
    color: { background: "#ff99ff", border: "#ff66ff" },
  },
  {
    id: "Caleb Osborne",
    label: "Caleb\nOsborne",
    color: { background: "#ffff99", border: "#ffff66" },
  },
  {
    id: "Camme",
    label: "Camme",
    color: { background: "#e699ff", border: "#cc66ff" },
  },
  {
    id: "Henry",
    label: "Henry",
    color: { background: "#99c2ff", border: "#66a3ff" },
  },
  {
    id: "Arson",
    label: "Arson",
    color: { background: "#ffb399", border: "#ff9966" },
  },
  {
    id: "Myla",
    label: "Myla",
    color: { background: "#ff99e6", border: "#ff66cc" },
  },
  {
    id: "Ren",
    label: "Ren",
    color: { background: "#99ffe6", border: "#66ffcc" },
  },
  {
    id: "Alex",
    label: "Alex",
    color: { background: "#c2ff99", border: "#a3ff66" },
  },
  {
    id: "Lincoln",
    label: "Lincoln",
    color: { background: "#ffc299", border: "#ffa366" },
  },
  {
    id: "Braxton",
    label: "Braxton",
    color: { background: "#9999ff", border: "#6666ff" },
  },
  {
    id: "Mason",
    label: "Mason\n(No Parents)",
    color: { background: "#e6e6e6", border: "#cccccc" },
  },
  {
    id: "Charlie",
    label: "Charlie",
    color: { background: "#ff9999", border: "#ff6666" },
  },
  {
    id: "Jack",
    label: "Jack",
    color: { background: "#b3b3b3", border: "#999999" },
  },
  {
    id: "Charlotte",
    label: "Charlotte",
    color: { background: "#ffb3b3", border: "#ff9999" },
  },
  {
    id: "Penny",
    label: "Penny",
    color: { background: "#b3ffb3", border: "#99ff99" },
  },
  {
    id: "Mama",
    label: "Mama",
    color: { background: "#ffccff", border: "#ff99ff" },
  },
  {
    id: "Zoe",
    label: "Zoe",
    color: { background: "#ccffcc", border: "#99ff99" },
  },
  {
    id: "Cailee",
    label: "Cailee",
    color: { background: "#ffcccc", border: "#ff9999" },
  },
  {
    id: "Rowin",
    label: "Rowin",
    color: { background: "#ccccff", border: "#9999ff" },
  },
  {
    id: "Casey",
    label: "Casey",
    color: { background: "#e6ffcc", border: "#ccff99" },
  },
  {
    id: "Nick",
    label: "Nick",
    color: { background: "#ffe6cc", border: "#ffcc99" },
  },
  {
    id: "Catherine",
    label: "Catherine",
    color: { background: "#ffd9b3", border: "#ffb366" },
  },
  {
    id: "Sam",
    label: "Sam",
    color: { background: "#ffe6fa", border: "#ffb3e6" }
  },
]);

var edges = new vis.DataSet([
  // Parents
  { from: "Forrest", to: "Jasmine", label: "Parent", arrows: "to" },
  { from: "Owen", to: "Jasmine", label: "Parent", arrows: "to" },
  { from: "Noah Jones", to: "Jasmine", label: "Parent", arrows: "to" },
  { from: "Noah Gathers", to: "Jasmine", label: "Parent", arrows: "to" },
  { from: "Ayden", to: "Jasmine", label: "Parent", arrows: "to" },
  { from: "Milo", to: "Jasmine", label: "Parent", arrows: "to" },
  { from: "Khai", to: "Jasmine", label: "Parent", arrows: "to" },
  { from: "Caleb Osborne", to: "Jasmine", label: "Parent", arrows: "to" },
  { from: "Camme", to: "Jasmine", label: "Parent", arrows: "to" },
  { from: "Noah Jones", to: "Forrest", label: "Parent", arrows: "to" },
  { from: "Arson", to: "Henry", label: "Parent", arrows: "to" },
  { from: "Myla", to: "Henry", label: "Parent", arrows: "to" },
  { from: "Arson", to: "Ren", label: "Parent", arrows: "to" },
  { from: "Myla", to: "Ren", label: "Parent", arrows: "to" },
  { from: "Alex", to: "Ren", label: "Parent", arrows: "to" },
  { from: "Lincoln", to: "Ren", label: "Parent", arrows: "to" },
  { from: "Braxton", to: "Ren", label: "Parent", arrows: "to" },
  { from: "Noah Gathers", to: "Ren", label: "Parent", arrows: "to" },
  { from: "Ayden", to: "Myla", label: "Parent", arrows: "to" },

  // Siblings
  { from: "Jasmine", to: "Ayden", label: "Sibling", arrows: "" },
  { from: "Jasmine", to: "Owen", label: "Sibling", arrows: "" },
  { from: "Jasmine", to: "Noah Jones", label: "Sibling", arrows: "" },
  { from: "Jasmine", to: "Mason", label: "Sibling", arrows: "" },
  { from: "Jasmine", to: "Caleb Osborne", label: "Sibling", arrows: "" },
  { from: "Arson", to: "Khai", label: "Sibling", arrows: "" },
  { from: "Nick", to: "Mama", label: "Sibling", arrows: "" },
  { from: "Ren", to: "Henry", label: "Sibling", arrows: "" },
  { from: "Sam", to: "Catherine", label: "Sibling", arrows: "" },

  // Children
  { from: "Forrest", to: "Owen", label: "Child", arrows: "to" },
  { from: "Forrest", to: "Charlie", label: "Child", arrows: "to" },
  { from: "Forrest", to: "Jasmine", label: "Child", arrows: "to" },
  { from: "Khai", to: "Owen", label: "Child", arrows: "to" },
  { from: "Khai", to: "Charlie", label: "Child", arrows: "to" },
  { from: "Khai", to: "Jasmine", label: "Child", arrows: "to" },
  { from: "Jasmine", to: "Jack", label: "Child", arrows: "to" },
  { from: "Noah Jones", to: "Jack", label: "Child", arrows: "to" },
  { from: "Jasmine", to: "Charlotte", label: "Child", arrows: "to" },
  { from: "Noah Jones", to: "Charlotte", label: "Child", arrows: "to" },
  { from: "Ren", to: "Penny", label: "Child", arrows: "to" },
  { from: "Arson", to: "Owen", label: "Child", arrows: "to" },
  { from: "Mama", to: "Myla", label: "Step-Parent", arrows: "to" },
  { from: "Mama", to: "Khai", label: "Child", arrows: "to" },
  { from: "Mama", to: "Zoe", label: "Child", arrows: "to" },
  { from: "Mama", to: "Arson", label: "Child", arrows: "to" },

  // Ex-Children
  { from: "Nick", to: "Forrest", label: "Ex-Kid", arrows: "to", dashes: true },

  // Grandparents
  { from: "Mama", to: "Jasmine", label: "Grandparent", arrows: "to" },
  { from: "Rowin", to: "Jasmine", label: "Grandparent", arrows: "to" },
  { from: "Zoe", to: "Ren", label: "Grandparent", arrows: "to" },
  { from: "Ayden", to: "Ren", label: "Grandparent", arrows: "to" },
  { from: "Cailee", to: "Ren", label: "Grandparent", arrows: "to" },
  { from: "Rowin", to: "Ren", label: "Grandparent", arrows: "to" },
  { from: "Ayden", to: "Henry", label: "Grandparent", arrows: "to" },

  // Cousins
  { from: "Jasmine", to: "Henry", label: "Cousin", arrows: "" },
  { from: "Jasmine", to: "Ren", label: "Cousin", arrows: "" },
  { from: "Ayden", to: "Lincoln", label: "Cousin", arrows: "" },

  // Dating (pink)
  { from: "Camme", to: "Owen", label: "Dating", arrows: "", color: { color: "#ff69b4" } },
  { from: "Milo", to: "Ayden", label: "Dating", arrows: "", color: { color: "#ff69b4" } },
  { from: "Noah Jones", to: "Caleb Osborne", label: "Dating", arrows: "", color: { color: "#ff69b4" } },
  { from: "Forrest", to: "Khai", label: "Dating", arrows: "", color: { color: "#ff69b4" } },
  { from: "Arson", to: "Myla", label: "Dating", arrows: "", color: { color: "#ff69b4" } },
  { from: "Ren", to: "Henry", label: "Dating", arrows: "", color: { color: "#ff69b4" } },
  { from: "Alex", to: "Lincoln", label: "Dating", arrows: "", color: { color: "#ff69b4" } },
  { from: "Rowin", to: "Catherine", label: "Dating", arrows: "", color: { color: "#ff69b4" } },

  // Marriages (red)
  { from: "Zoe", to: "Cailee", label: "Married", arrows: "", color: { color: "#ff3333" }, width: 2 },
  { from: "Jasmine", to: "Noah Jones", label: "Married", arrows: "", color: { color: "#ff3333" }, width: 2 },
  { from: "Rowin", to: "Catherine", label: "Married", arrows: "", color: { color: "#ff3333" }, width: 2 },
  { from: "Arson", to: "Myla", label: "Married", arrows: "", color: { color: "#ff3333" }, width: 2 },

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
    smooth: { type: "continuous" },
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
