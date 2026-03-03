// ====== 설정 ======
const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd24t8u-tbDUCopQ2aUzkshu1O4R3uYjaI8s_a3Rr7aCGUtiw/viewform?usp=publish-editor";

// ====== 유틸 ======
function qs(sel) {
  return document.querySelector(sel);
}

function scrollToId(id) {
  const el = qs(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ====== 진단폼 임베드 ======
function getEmbeddableFormUrl(url) {
  // 구글폼은 보통 /viewform 을 그대로 iframe에 넣어도 동작하지만,
  // 환경에 따라 embed 형식이 더 안정적이라 보정해줌.
  // (완전 보장은 아님. 문제 생기면 "새 탭 열기"로 해결)
  if (url.includes("viewform")) return url;
  return url;
}

function main() {
  const btnGoDiagnosis = qs("#btnGoDiagnosis");
  const btnGoRules = qs("#btnGoRules");
  const btnOpenForm = qs("#btnOpenForm");
  const btnOpenNewTab = qs("#btnOpenNewTab");
  const formWrap = qs("#formWrap");
  const frame = qs("#diagnosisFrame");

  // 새 탭 링크 세팅
  if (btnOpenNewTab) btnOpenNewTab.href = FORM_URL;

  // iframe src 세팅
  if (frame) frame.src = getEmbeddableFormUrl(FORM_URL);

  // 상단 버튼: 진단평가 이동
  btnGoDiagnosis?.addEventListener("click", () => {
    scrollToId("#sectionDiagnosis");
    if (formWrap?.hidden) formWrap.hidden = false;
  });

  // 상단 버튼: 규칙 이동
  btnGoRules?.addEventListener("click", () => {
    scrollToId("#sectionRules");
  });

  // 폼 열기/접기
  btnOpenForm?.addEventListener("click", () => {
    formWrap.hidden = !formWrap.hidden;
    btnOpenForm.textContent = formWrap.hidden ? "폼 열기/접기" : "폼 접기";
    if (!formWrap.hidden) {
      setTimeout(() => scrollToId("#sectionDiagnosis"), 50);
    }
  });
}

document.addEventListener("DOMContentLoaded", main);
