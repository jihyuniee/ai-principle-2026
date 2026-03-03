// ====== Utilities ======
const $ = (sel) => document.querySelector(sel);
const LS = {
  quiz: "ai_principle_quiz_v1",
  expect: "ai_principle_expect_v1"
};

function nowStamp(){
  const d = new Date();
  const pad = (n) => String(n).padStart(2,"0");
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function safeCopy(text){
  navigator.clipboard?.writeText(text).then(() => {
    alert("복사했어!");
  }).catch(() => {
    // fallback
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
    alert("복사했어!");
  });
}

// ====== Today's Questions ======
const QUESTIONS = [
  "AI 시대에 인간에게 남는 능력은 무엇일까?",
  "AI가 잘하는 일과 인간이 잘하는 일을 어떻게 나눌 수 있을까?",
  "AI의 답을 그대로 믿으면 안 되는 이유는 무엇일까?",
  "우리 주변의 ‘불편함’ 중, AI로 해결하면 의미 있는 것은 무엇일까?",
  "좋은 프롬프트(질문)는 무엇이 다를까?",
  "AI를 쓰면서도 ‘내 결정’이 중요한 순간은 언제일까?"
];

$("#newQuestionBtn")?.addEventListener("click", () => {
  const q = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
  $("#todayQuestion").textContent = q;
});
$("#copyQuestionBtn")?.addEventListener("click", () => {
  safeCopy($("#todayQuestion").textContent.trim());
});

// ====== Diagnostic Quiz (AI Literacy) ======
// 목적: 50분 OT에서 바로 돌릴 수 있는 8문항(개념+태도+활용)
// 채점: 각 문항 1점(정답) + 0점(오답). (태도형은 '적절한 선택'을 정답으로 둠)
const QUIZ = [
  {
    q: "1) 인공지능(AI)에 대한 가장 정확한 설명은?",
    a: [
      { t: "정해진 규칙대로만 작동하는 자동화 프로그램", score: 0 },
      { t: "데이터를 분석/이해/추론해 문제를 해결하거나 예측하는 기술/분야", score: 1 },
      { t: "사람처럼 생긴 로봇", score: 0 },
      { t: "인터넷 검색을 빠르게 해주는 기능", score: 0 },
    ],
    tip: "AI는 단순 자동화(규칙)와 달리 데이터를 기반으로 분석·이해·추론해 문제 해결/예측에 사용돼."
  },
  {
    q: "2) ‘지능형 에이전트’의 핵심은 뭐야?",
    a: [
      { t: "사용자가 시키는 대로만 수행", score: 0 },
      { t: "스스로 환경을 인지하고 판단해 최상의 결과를 내도록 행동", score: 1 },
      { t: "항상 사람보다 똑똑함", score: 0 },
      { t: "말을 자연스럽게 하는 기능", score: 0 },
    ],
    tip: "지능형 에이전트는 환경 인지→판단→행동을 통해 최상의 결과를 목표로 움직여."
  },
  {
    q: "3) 아래 중 ‘AI 활용’에서 가장 위험한 태도는?",
    a: [
      { t: "AI 답을 참고하되 근거를 확인하고 내 결정을 남긴다", score: 0 },
      { t: "AI 답이 틀릴 수 있음을 전제로 교차검증한다", score: 0 },
      { t: "AI가 써준 걸 그대로 제출하고, 왜 그렇게 되는지 모르겠다", score: 1 },
      { t: "AI가 낸 결과를 내 상황에 맞게 수정한다", score: 0 },
    ],
    tip: "AI는 도구야. ‘그대로 제출’은 학습도 성과도 아니고, 위험해."
  },
  {
    q: "4) 지능형 에이전트의 ‘자율성’에 가장 가까운 설명은?",
    a: [
      { t: "명령을 받아야만 움직인다", score: 0 },
      { t: "현재 상황을 분석해 스스로 판단하고 행동한다", score: 1 },
      { t: "친구(다른 에이전트)와 대화한다", score: 0 },
      { t: "24시간 계속 켜져 있다", score: 0 },
    ],
    tip: "자율성 = 상황 분석 → 자기 판단 → 행동"
  },
  {
    q: "5) 지능형 에이전트의 구성요소로 가장 알맞은 조합은?",
    a: [
      { t: "센서, 액추에이터, 에이전트 함수", score: 1 },
      { t: "키보드, 마우스, 모니터", score: 0 },
      { t: "CPU, RAM, SSD", score: 0 },
      { t: "인터넷, 검색엔진, 브라우저", score: 0 },
    ],
    tip: "센서(인식) + 에이전트 함수(결정) + 액추에이터(실행)"
  },
  {
    q: "6) 아래 중 ‘문제 정의’가 잘 된 예시는?",
    a: [
      { t: "학교가 불편해요", score: 0 },
      { t: "급식이 별로예요", score: 0 },
      { t: "점심시간 줄이 길어서 2학년이 평균 8~12분 대기한다. 대기 시간을 30% 줄이는 방법이 필요하다", score: 1 },
      { t: "AI로 뭔가 만들고 싶어요", score: 0 },
    ],
    tip: "문제 정의는 ‘누가/언제/어디서/무엇이/얼마나’가 들어가야 강해져."
  },
  {
    q: "7) 우리 수업이 원하는 ‘결과물’ 태도는?",
    a: [
      { t: "패스만 하려고 최소한만 한다", score: 0 },
      { t: "AI가 해준 걸 그대로 쓰고 끝낸다", score: 0 },
      { t: "기록(과정)과 산출물(결과)을 남기고 팀에 기여한다", score: 1 },
      { t: "점수만 높이면 된다", score: 0 },
    ],
    tip: "포트폴리오 수업은 ‘과정’이 성적이야. 기록이 곧 실력."
  },
  {
    q: "8) AI 에이전트를 쓸 때 인간이 꼭 해야 하는 역할은?",
    a: [
      { t: "결정 기준 세우기(목표/제약), 결과 검증, 책임 있는 선택", score: 1 },
      { t: "아무 것도 하지 않고 자동으로 맡기기", score: 0 },
      { t: "무조건 AI 말을 믿기", score: 0 },
      { t: "AI가 할 일을 대신하기", score: 0 },
    ],
    tip: "AI 시대에 중요한 건 ‘좋은 목표 설정 + 검증 + 책임’이야."
  }
];

function loadQuizState(){
  try { return JSON.parse(localStorage.getItem(LS.quiz) || "null"); }
  catch { return null; }
}
function saveQuizState(state){
  localStorage.setItem(LS.quiz, JSON.stringify(state));
  updateSavedInfo();
}
function clearQuizState(){
  localStorage.removeItem(LS.quiz);
  updateSavedInfo();
}

function updateSavedInfo(){
  const saved = loadQuizState();
  const el = $("#savedInfo");
  if(!el) return;
  if(!saved){
    el.textContent = "저장된 진단평가 결과 없음";
    return;
  }
  el.textContent = `저장됨: ${saved.savedAt} · 점수: ${saved.total}/${QUIZ.length}`;
}

function renderQuiz(){
  const area = $("#quizArea");
  const result = $("#quizResult");
  if(!area || !result) return;

  area.innerHTML = "";
  result.hidden = true;
  result.textContent = "";

  QUIZ.forEach((item, idx) => {
    const wrap = document.createElement("div");
    wrap.className = "q-card";

    const title = document.createElement("div");
    title.className = "q-title";
    title.textContent = item.q;
    wrap.appendChild(title);

    const choices = document.createElement("div");
    choices.className = "choices";

    item.a.forEach((c, j) => {
      const label = document.createElement("label");
      label.className = "choice";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q_${idx}`;
      input.value = String(c.score);

      const span = document.createElement("span");
      span.textContent = c.t;

      label.appendChild(input);
      label.appendChild(span);
      choices.appendChild(label);
    });

    wrap.appendChild(choices);

    const tip = document.createElement("div");
    tip.className = "muted small";
    tip.style.marginTop = "8px";
    tip.textContent = `힌트: ${item.tip}`;
    wrap.appendChild(tip);

    area.appendChild(wrap);
  });

  const actions = document.createElement("div");
  actions.className = "row";
  const submitBtn = document.createElement("button");
  submitBtn.className = "btn primary";
  submitBtn.textContent = "채점하고 결과 보기";
  submitBtn.addEventListener("click", gradeQuiz);

  const copyBtn = document.createElement("button");
  copyBtn.className = "btn";
  copyBtn.textContent = "결과 복사";
  copyBtn.addEventListener("click", () => {
    const saved = loadQuizState();
    if(!saved) return alert("아직 결과가 없어!");
    safeCopy(saved.report);
  });

  actions.appendChild(submitBtn);
  actions.appendChild(copyBtn);
  area.appendChild(actions);

  // if previously saved, show it
  const saved = loadQuizState();
  if(saved){
    showResult(saved.total, saved.feedback, saved.report);
  }
}

function gradeQuiz(){
  const totalQ = QUIZ.length;
  let score = 0;
  let answered = 0;

  for(let i=0;i<totalQ;i++){
    const picked = document.querySelector(`input[name="q_${i}"]:checked`);
    if(picked){
      answered++;
      score += Number(picked.value);
    }
  }

  if(answered < totalQ){
    alert(`아직 ${totalQ - answered}문항이 남아 있어! 다 체크하고 채점하자.`);
    return;
  }

  const feedback = makeFeedback(score, totalQ);
  const report = [
    `AI 리터러시 진단평가 결과`,
    `- 점수: ${score}/${totalQ}`,
    `- 기록 시각: ${nowStamp()}`,
    ``,
    `피드백: ${feedback}`,
    ``,
    `한 줄 코멘트(선택): __________________________`
  ].join("\n");

  saveQuizState({ total: score, savedAt: nowStamp(), feedback, report });
  showResult(score, feedback, report);
}

function makeFeedback(score, total){
  const pct = Math.round((score/total)*100);
  if(pct >= 88) return "기초 개념/태도 아주 탄탄. 이번 학기는 ‘문제정의 + 검증 + 포트폴리오’에서 레벨업하면 돼.";
  if(pct >= 63) return "기본은 괜찮아. AI 답을 ‘검증하고 내 판단을 남기는 습관’만 잡으면 확 올라가.";
  return "괜찮아. 이 수업이 딱 필요한 출발점이야. 개념(에이전트/AI) + 안전한 활용 태도부터 차근차근 잡자.";
}

function showResult(score, feedback, report){
  const result = $("#quizResult");
  if(!result) return;
  result.hidden = false;
  result.innerHTML = `
    <div><b>점수:</b> ${score}/${QUIZ.length}</div>
    <div style="margin-top:6px"><b>피드백:</b> ${feedback}</div>
    <div style="margin-top:10px" class="muted small">TIP: 결과 복사 버튼으로 붙여넣기 가능</div>
  `;
}

$("#startQuizBtn")?.addEventListener("click", () => {
  renderQuiz();
  location.hash = "#diagnostic";
});

$("#resetQuizBtn")?.addEventListener("click", () => {
  if(confirm("진단평가 기록을 초기화할까?")){
    clearQuizState();
    $("#quizArea").innerHTML = `<div class="empty">왼쪽에서 “진단평가 시작하기”를 누르면 문항이 보여.</div>`;
    $("#quizResult").hidden = true;
  }
});

updateSavedInfo();

// ====== Expectations Save/Copy ======
function loadExpect(){
  try { return JSON.parse(localStorage.getItem(LS.expect) || "null"); }
  catch { return null; }
}
function saveExpect(obj){
  localStorage.setItem(LS.expect, JSON.stringify(obj));
  updateExpectInfo();
}
function clearExpect(){
  localStorage.removeItem(LS.expect);
  updateExpectInfo();
}

function updateExpectInfo(){
  const info = $("#expectSavedInfo");
  if(!info) return;
  const saved = loadExpect();
  if(!saved){
    info.textContent = "저장된 기록 없음";
    return;
  }
  info.textContent = `저장됨: ${saved.savedAt}`;
}
updateExpectInfo();

$("#saveExpectBtn")?.addEventListener("click", () => {
  const exp1 = $("#exp1").value.trim();
  const exp2 = $("#exp2").value.trim();
  const exp3 = $("#exp3").value.trim();

  if(!exp1){
    alert("1) 기대하는 것만이라도 한 줄은 적자!");
    $("#exp1").focus();
    return;
  }
  saveExpect({ exp1, exp2, exp3, savedAt: nowStamp() });
  alert("저장했어!");
});

$("#copyExpectBtn")?.addEventListener("click", () => {
  const exp1 = $("#exp1").value.trim();
  const exp2 = $("#exp2").value.trim();
  const exp3 = $("#exp3").value.trim();
  const text = [
    "인공지능 원리탐구 OT 기록",
    `- 기록 시각: ${nowStamp()}`,
    "",
    `1) 기대하는 것: ${exp1 || "(미작성)"}`,
    `2) 키우고 싶은 역량: ${exp2 || "(미작성)"}`,
    `3) 한 학기 다짐: ${exp3 || "(미작성)"}`
  ].join("\n");
  safeCopy(text);
});

$("#clearExpectBtn")?.addEventListener("click", () => {
  if(confirm("작성 내용을 지울까? (저장값도 삭제됨)")){
    $("#exp1").value = "";
    $("#exp2").value = "";
    $("#exp3").value = "";
    clearExpect();
  }
});

// load saved expectations into fields on load
const savedExp = loadExpect();
if(savedExp){
  $("#exp1").value = savedExp.exp1 || "";
  $("#exp2").value = savedExp.exp2 || "";
  $("#exp3").value = savedExp.exp3 || "";
}
