const questions = [
  "AI 시대에 인간에게 남는 능력은 무엇일까?",
  "AI가 모든 답을 줄 수 있다면 우리는 무엇을 해야 할까?",
  "좋은 문제를 찾는 능력은 왜 중요할까?",
  "AI를 잘 쓰는 것과 AI를 이해하는 것은 어떻게 다를까?"
];

function changeQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  document.getElementById("question").innerText = questions[randomIndex];
}
