function solution(wallpaper) {
  let right = 0,
    left = 50,
    top = 50,
    bottom = 0;
  wallpaper.forEach((el, idx) => {
    el.split("").forEach((file, i) => {
      if (file === "#") {
        if (i < left) left = i;
        if (i > right) right = i;
        if (idx <= top) top = idx;
        if (idx >= bottom) bottom = idx;
      }
    });
  });
  return [top, left, bottom + 1, right + 1];
}
