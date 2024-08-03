function solution(name, yearning, photo) {
  return photo.map((el) => {
    return el.reduce((acc, cur) => {
      return name.includes(cur) ? acc + yearning[name.indexOf(cur)] : acc;
    }, 0);
  });
}
