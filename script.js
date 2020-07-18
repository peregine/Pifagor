for (var i = 1; i <= 9; i++) {
  var row = document.createElement("div");
  row.setAttribute("class", "row");

  for (var j = 1; j <= 9; j++) {
    var cell = document.createElement("div");
    cell.setAttribute("class", "cell");

    if (i === j) {
      cell.setAttribute("class", "cell cell-main");
    }
    if (i > j) {
      cell.setAttribute("class", "cell cell-unmain");
    }
    if (i < j) {
      cell.setAttribute("class", "cell cell-onmain");
    }
    cell.textContent = i * j;
    row.appendChild(cell);
  }
  document.getElementById("container").appendChild(row);
}
