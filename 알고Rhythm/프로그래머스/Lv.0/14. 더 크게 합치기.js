function solution(a, b) {
  var answer = 0;
  A = Number(String(a) + String(b));
  B = Number(String(b) + String(a));
  if (A > B) {
    answer = A;
  } else {
    answer = B;
  }
  return answer;
}
