function solution(str1, str2) {
  let answer = "";

  for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
    answer += str1[i];
    answer += str2[i];
  }

  return answer;
}
