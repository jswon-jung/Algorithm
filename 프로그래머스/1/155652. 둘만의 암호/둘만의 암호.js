function solution(s, skip, index) {
  return s
    .split("")
    .map((el) => {
      let letter = el.charCodeAt();
      for (let i = 0; i < index; i++) {
        letter++;
        if (letter > 122) letter -= 26;
        while (skip.includes(String.fromCharCode(letter))) {
          letter++;
          if (letter > 122) letter -= 26;
        }
      }
      return String.fromCharCode(letter);
    })
    .join("");
}
