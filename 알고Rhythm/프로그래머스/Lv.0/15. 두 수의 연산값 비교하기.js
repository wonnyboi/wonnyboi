function solution(a, b) {
  var answer = 0;
  A = Number(String(a) + String(b));
  B = 2 * a * b;
  if (B > A) {
    answer = B;
  } else {
    answer = A;
  }
  return answer;
}
