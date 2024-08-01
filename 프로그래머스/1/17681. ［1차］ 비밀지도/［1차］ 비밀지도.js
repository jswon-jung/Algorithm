// 풀이 1.
function solution(n, arr1, arr2) {
  for (let i = 0; i < n; i++) {
    arr1[i] = arr1[i].toString(2).padStart(n, "0").split("");
    arr2[i] = arr2[i].toString(2).padStart(n, "0").split("");
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr1[i][j] === "0" && arr2[i][j] === "0") {
        arr1[i][j] = " ";
      } else if (arr1[i][j] === arr2[i][j] && arr1[i][j] === "#") {
        arr1[i][j] = "#";
      } else {
        arr1[i][j] = "#";
      }
    }
  }
  return arr1.map((el) => el.join(""));
}

// 풀이 2.
function solution(n, arr1, arr2) {
  return arr1.map((map1, i) => {
    map1 = map1.toString(2).padStart(n, "0");
    const map2 = arr2[i].toString(2).padStart(n, "0");

    return map1.split("").reduce((acc, cur, l) => {
      return acc + (cur === "0" && map2[l] === "0" ? " " : "#");
    }, "");
  });
}
