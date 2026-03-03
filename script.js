<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>인공지능 원리탐구 | 2026</title>
    <meta name="description" content="AI와 함께 문제를 해결하는 1학기 프로젝트 수업 안내(전자책형)" />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <a class="skip" href="#main">본문 바로가기</a>

    <!-- 상단 헤더 -->
    <header class="hero">
      <div class="hero-inner">
        <div class="hero-badge">
          <span class="dot"></span>
          2학년 1~5반 · 3시수 · 1학기 프로젝트 수업
        </div>

        <h1 class="hero-title">
          <span class="emoji">🤖</span> 인공지능 원리탐구
        </h1>

        <p class="hero-sub">
          AI를 “배우는” 수업이 아니라, <b>AI와 함께 문제를 해결하는</b> 수업
        </p>

        <div class="hero-actions">
          <button class="btn btn-primary" id="btnGoDiagnosis">진단평가 하러가기</button>
          <button class="btn" id="btnGoLiteracy">AI 리터러시가 뭐야?</button>
          <button class="btn" id="btnGoVideos">흥미 영상 보기</button>
          <button class="btn" id="btnGoRules">AI 사용 규칙</button>
        </div>

        <div class="hero-art" aria-hidden="true">
          <svg viewBox="0 0 640 240" role="img">
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="currentColor" stop-opacity="0.25"/>
                <stop offset="100%" stop-color="currentColor" stop-opacity="0.05"/>
              </linearGradient>
              <linearGradient id="g2" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="currentColor" stop-opacity="0.18"/>
                <stop offset="100%" stop-color="currentColor" stop-opacity="0.03"/>
              </linearGradient>
            </defs>
            <rect x="18" y="22" width="604" height="196" rx="22" fill="url(#g1)"/>
            <circle cx="140" cy="120" r="56" fill="url(#g2)"/>
            <circle cx="500" cy="86" r="34" fill="url(#g2)"/>
            <circle cx="470" cy="160" r="46" fill="url(#g2)"/>
            <path d="M220 162c26-40 72-64 124-64 58 0 108 30 132 76" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="10" stroke-linecap="round"/>
            <path d="M238 86h220" stroke="currentColor" stroke-opacity="0.25" stroke-width="10" stroke-linecap="round"/>
            <path d="M238 118h172" stroke="currentColor" stroke-opacity="0.18" stroke-width="10" stroke-linecap="round"/>
            <path d="M238 150h128" stroke="currentColor" stroke-opacity="0.12" stroke-width="10" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
    </header>

    <!-- 전자책형 레이아웃 -->
    <div class="layout">
      <!-- 좌측 목차 -->
      <aside class="toc" aria-label="목차">
        <div class="toc-title">📚 오늘의 교과서</div>
        <nav class="toc-nav">
          <a href="#sectionIntro" class="toc-link">0. 한 줄 요약</a>
          <a href="#sectionFlow" class="toc-link">1. 오늘 수업 흐름</a>
          <a href="#sectionCourse" class="toc-link">2. 과목 소개</a>
          <a href="#sectionTeacher" class="toc-link">3. 교사 소개</a>
          <a href="#sectionLiteracy" class="toc-link">4. AI 리터러시</a>
          <a href="#sectionVideos" class="toc-link">5. 흥미 유발 영상</a>
          <a href="#sectionEvaluation" class="toc-link">6. 평가/제출</a>
          <a href="#sectionRules" class="toc-link">7. AI 사용 규칙</a>
          <a href="#sectionProject" class="toc-link">8. 한 학기 프로젝트</a>
          <a href="#sectionAI" class="toc-link">9. 인공지능 기초</a>
          <a href="#sectionDiagnosis" class="toc-link">10. 진단평가</a>
        </nav>

        <div class="toc-actions">
          <button class="btn btn-small" id="btnExpandAll">전체 펼치기</button>
          <button class="btn btn-small" id="btnCollapseAll">전체 접기</button>
        </div>

        <div class="toc-note muted">
          ✨ 팁: 섹션 안의 <b>“자세히 보기”</b>를 누르면 전자책처럼 내용이 펼쳐져.
        </div>
      </aside>

      <!-- 본문 -->
      <main id="main" class="container">
        <!-- 0. 인트로 -->
        <section class="card" id="sectionIntro">
          <div class="card-title">
            <span class="icon">🧾</span>
            <h2>0. 한 줄 요약</h2>
          </div>
          <p class="lead">
            이 수업은 <b>AI를 잘 “쓰는 법”</b>을 넘어, <b>AI와 협업해서 문제를 해결하는 힘</b>을 기르는 프로젝트 수업이야.
          </p>

          <details class="detail">
            <summary>자세히 보기 (이 수업이 왜 중요해?)</summary>
            <div class="detail-body">
              <ul>
                <li>우리 학교에서 <b>데이터/AI를 생활기록부로 제대로 어필</b>할 수 있는 과목이 사실상 이 과목이야.</li>
                <li>그래서 “패스용”이 아니라, <b>탐구·문제해결·협업 과정</b>이 남는 수업으로 만들 거야.</li>
                <li>AI 시대엔 “답을 빨리 받는 능력”보다 <b>질문을 만들고 검증하는 능력</b>이 더 중요해.</li>
              </ul>
              <div class="callout">
                <b>우리의 목표:</b> “학교에서 이 수업 듣길 진짜 잘했다”가 남는 학기.
              </div>
            </div>
          </details>
        </section>

        <!-- 1. 오늘 수업 흐름 -->
        <section class="card" id="sectionFlow">
          <div class="card-title">
            <span class="icon">🧭</span>
            <h2>1. 오늘(1차시) 수업 흐름 · 50분</h2>
          </div>

          <ol class="timeline">
            <li><b>흥미 영상</b> : “AI 에이전트가 실제로 뭘 해주지?”</li>
            <li><b>수업 방향</b> : AI와 협업해서 문제 해결하기</li>
            <li><b>AI 리터러시</b> : “잘 쓰는 기준”을 같이 세우기</li>
            <li><b>진단평가</b> : AI 리터러시 진단 폼 제출</li>
            <li><b>오늘의 미션</b> : ‘우리 삶의 불편함 3개’ 수집 (다음 시간 연결)</li>
          </ol>

          <details class="detail">
            <summary>자세히 보기 (50분 운영 가이드)</summary>
            <div class="detail-body">
              <div class="grid2">
                <div class="mini">
                  <div class="mini-title">⏱️ 시간 예시</div>
                  <ul class="muted">
                    <li>0~7분: 영상 1개 + 한 줄 소감</li>
                    <li>7~15분: 수업 목적/평가/제출</li>
                    <li>15~25분: AI 리터러시 핵심 4가지</li>
                    <li>25~40분: 진단평가(폼)</li>
                    <li>40~50분: 불편함 3개 작성 후 제출(구클)</li>
                  </ul>
                </div>
                <div class="mini">
                  <div class="mini-title">📌 오늘 “제출물”</div>
                  <ul class="muted">
                    <li>① 진단평가 폼 제출</li>
                    <li>② 불편함 3개(구글 클래스룸 과제로 제출)</li>
                    <li>③ (선택) 영상 보고 “AI가 잘한 일/못한 일” 1줄</li>
                  </ul>
                </div>
              </div>

              <div class="callout">
                <b>오늘의 핵심:</b> “AI가 똑똑하다”가 아니라, <b>우리가 AI를 어떻게 다뤄야 하는지</b> 기준을 세우는 시간.
              </div>
            </div>
          </details>
        </section>

        <!-- 2. 과목 소개 -->
        <section class="card" id="sectionCourse">
          <div class="card-title">
            <span class="icon">📘</span>
            <h2>2. 과목 소개</h2>
          </div>

          <p class="lead">
            이 수업은 인공지능의 ‘정의’만 외우는 수업이 아니라,
            <b>실생활 문제를 발견 → 설계 → AI와 협업 → 결과물로 남기는</b> 프로젝트 수업이야.
          </p>

          <div class="grid2">
            <div class="pill">
              <div class="pill-title">🎯 우리가 얻고 싶은 것</div>
              <ul>
                <li>AI 리터러시가 조금이라도 성장하기</li>
                <li>실생활에 “진짜” 도움 되는 경험 만들기</li>
                <li>탐구력 · 문제 해결력 · 협업력 키우기</li>
                <li>“이 수업 듣길 진짜 잘했다”가 남는 학기</li>
              </ul>
            </div>

            <div class="pill">
              <div class="pill-title">🌿 수업의 분위기</div>
              <ul>
                <li>즐겁고, 쉼이 있는 공간</li>
                <li>하지만 “그냥 쉬는 수업”은 아님</li>
                <li>경쟁/줄세우기보다 프로젝트 중심</li>
                <li>패스하려는 태도보다 “해결하려는 태도”</li>
              </ul>
            </div>
          </div>

          <details class="detail">
            <summary>자세히 보기 (이 수업에서 “좋은 태도”는 뭐야?)</summary>
            <div class="detail-body">
              <ul>
                <li><b>패스/형식 제출</b> → 남는 게 거의 없음</li>
                <li><b>AI 답 복붙</b> → 점수 낮아짐(검증/수정/판단이 없으면 의미 없음)</li>
                <li><b>좋은 태도</b> → “문제를 끝까지 정의하고, 해결하려고 협업한 흔적”이 남는 태도</li>
              </ul>
              <div class="callout">
                <b>우리의 기준:</b> 결과보다 <b>과정(질문·검증·협업·기록)</b>이 남는가?
              </div>
            </div>
          </details>
        </section>

        <!-- 3. 교사 소개 -->
        <section class="card" id="sectionTeacher">
          <div class="card-title">
            <span class="icon">👩‍🏫</span>
            <h2>3. 교사 소개</h2>
          </div>

          <div class="profile">
            <div class="avatar" aria-hidden="true">JH</div>
            <div class="profile-text">
              <p class="profile-name">이지현</p>
              <p class="muted">
                2학년 2반 담임 · IT혁신부 · 컴퓨터공학과(소프트웨어 좋아함) · 하드웨어는 약한 편 😅<br />
                요즘은 <b>바이브 코딩</b>에 꽂혀 있고, <b>LLM(대규모 언어모델)</b>을 계속 연구 중.
              </p>
              <div class="chips">
                <span class="chip">AI 에이전트</span>
                <span class="chip">프로젝트 수업</span>
                <span class="chip">포트폴리오</span>
                <span class="chip">웹앱 제작</span>
              </div>
            </div>
          </div>

          <details class="detail">
            <summary>자세히 보기 (수업 운영 약속)</summary>
            <div class="detail-body">
              <ul>
                <li>우리 수업은 “절대평가 느낌”으로, <b>경쟁보다 성장</b>이 남게 운영할 거야.</li>
                <li>매 시간 결과물은 작아도 돼. 대신 <b>제출/기록/수정</b>이 꾸준히 남아야 해.</li>
                <li>AI는 금지/허용의 문제가 아니라, <b>책임 있게 쓰는 방법</b>을 배우는 거야.</li>
              </ul>
            </div>
          </details>
        </section>

        <!-- 4. AI 리터러시 -->
        <section class="card" id="sectionLiteracy">
          <div class="card-title">
            <span class="icon">🧩</span>
            <h2>4. AI 리터러시가 뭐야?</h2>
          </div>

          <p class="lead">
            AI 리터러시는 “AI를 쓸 줄 안다”가 아니라, <b>AI를 이해·활용·검증·책임</b>까지 포함한 능력이야.
          </p>

          <div class="grid2">
            <div class="mini">
              <div class="mini-title">✅ 1) 질문을 잘 만드는 능력</div>
              <p class="muted">문제 상황을 구체화하고, 조건/목표/제약을 명확히 해서 프롬프트로 바꾸는 힘</p>
            </div>
            <div class="mini">
              <div class="mini-title">✅ 2) 결과를 검증하는 능력</div>
              <p class="muted">AI의 답을 그대로 믿지 않고, 근거를 확인하고 오류(환각)를 잡아내는 힘</p>
            </div>
            <div class="mini">
              <div class="mini-title">✅ 3) 내 판단으로 수정하는 능력</div>
              <p class="muted">AI 결과를 비판적으로 편집/개선하고 “내 결정”으로 마무리하는 힘</p>
            </div>
            <div class="mini">
              <div class="mini-title">✅ 4) 책임 있게 사용하는 능력</div>
              <p class="muted">저작권/표절/개인정보/출처/윤리를 고려해서 안전하게 쓰는 힘</p>
            </div>
          </div>

          <details class="detail">
            <summary>자세히 보기 (오늘 바로 적용해보기)</summary>
            <div class="detail-body">
              <div class="callout">
                <b>오늘 적용:</b> 영상 보고 “AI가 잘한 일 1개 / 위험한 점 1개”를 말로 정리해보기.
              </div>
              <ul>
                <li><b>잘한 일</b>: 시간 절약, 반복 작업 자동화, 정리/요약, 일정/예약 지원 등</li>
                <li><b>위험한 점</b>: 틀린 정보(환각), 개인정보 노출, 책임 소재 불분명, 편향된 판단</li>
              </ul>
            </div>
          </details>
        </section>

        <!-- 5. 흥미 유발 영상 -->
        <section class="card" id="sectionVideos">
          <div class="card-title">
            <span class="icon">🎬</span>
            <h2>5. 흥미 유발 영상 (AI 에이전트가 생활을 바꾸는 장면)</h2>
          </div>

          <p class="muted">
            아래 영상은 “AI 에이전트가 웹/업무를 대신 수행하는 모습”을 보여줘.
            수업 시간엔 <b>1개만 골라서</b> 보고 시작해도 충분해.
          </p>

          <div class="video-grid">
            <!-- YouTube ID만 있으면 재생 -->
            <article class="video-card">
              <div class="video-head">
                <div class="video-title">1) OpenAI Operator 데모(웹에서 작업 수행)</div>
                <button class="btn btn-small btn-primary playBtn" data-yt="vZp7mB3VtVg">재생</button>
              </div>
              <p class="muted small">브라우저에서 클릭/스크롤/입력까지 하면서 업무를 처리하는 에이전트 예시.</p>
              <div class="video-wrap" data-target="vZp7mB3VtVg"></div>
            </article>

            <article class="video-card">
              <div class="video-head">
                <div class="video-title">2) Google Project Mariner(웹 에이전트)</div>
                <button class="btn btn-small btn-primary playBtn" data-yt="m1j3d0w1G7o">재생</button>
              </div>
              <p class="muted small">사용자 대신 웹에서 여러 작업을 “동시에” 처리하려는 에이전트.</p>
              <div class="video-wrap" data-target="m1j3d0w1G7o"></div>
            </article>

            <article class="video-card">
              <div class="video-head">
                <div class="video-title">3) Copilot Studio 에이전트 데모(예약/응대 자동화)</div>
                <button class="btn btn-small btn-primary playBtn" data-yt="3l0bBq0n8S0">재생</button>
              </div>
              <p class="muted small">업무 흐름(응대/예약)을 에이전트로 자동화하는 예시.</p>
              <div class="video-wrap" data-target="3l0bBq0n8S0"></div>
            </article>
          </div>

          <details class="detail">
            <summary>자세히 보기 (영상 보고 토론 질문)</summary>
            <div class="detail-body">
              <ul>
                <li>이 영상에서 AI가 “사람 대신” 한 일은 정확히 뭐야?</li>
                <li>AI가 틀리면 책임은 누구에게 있어?</li>
                <li>우리는 AI에게 어떤 정보를 주면 안 될까(개인정보/계정)?</li>
                <li>AI를 “도구”가 아니라 “팀원”으로 쓰려면 무엇을 기록해야 할까?</li>
              </ul>
            </div>
          </details>
        </section>

        <!-- 6. 평가 방식 -->
        <section class="card" id="sectionEvaluation">
          <div class="card-title">
            <span class="icon">🧾</span>
            <h2>6. 평가/제출</h2>
          </div>

          <div class="grid2">
            <div class="pill">
              <div class="pill-title">📌 비율</div>
              <ul>
                <li><b>포트폴리오 70%</b> (개인)</li>
                <li><b>팀프로젝트 30%</b> (팀)</li>
              </ul>
              <p class="muted small">발표/보고서 형태로 결과를 남김.</p>
            </div>

            <div class="pill">
              <div class="pill-title">🗂️ 제출</div>
              <ul>
                <li><b>매시간 결과물 제출</b> (Google Classroom)</li>
                <li>수업 시간 내 협업/문제 해결 과정도 중요</li>
                <li>프롬프트/수정/검증 흔적이 남아야 함</li>
              </ul>
            </div>
          </div>

          <details class="detail">
            <summary>자세히 보기 (포트폴리오에 꼭 들어갈 것)</summary>
            <div class="detail-body">
              <ul>
                <li><b>문제 정의서</b>: 대상/상황/긴급성/제약</li>
                <li><b>AI 활용 일지</b>: 프롬프트 원문 + 결과 요약 + 수정/검증 + 최종 결정</li>
                <li><b>중간 점검</b>: 실패/오류/개선 기록(이게 성장 증거)</li>
                <li><b>최종 산출</b>: 발표/보고서/프로토타입(웹앱/설계/피지컬)</li>
              </ul>
              <div class="callout">
                <b>한 줄:</b> “AI를 썼다”가 아니라, <b>AI와 협업한 흔적</b>이 남아야 점수가 나온다.
              </div>
            </div>
          </details>
        </section>

        <!-- 7. AI 사용 규칙 -->
        <section class="card" id="sectionRules">
          <div class="card-title">
            <span class="icon">🛡️</span>
            <h2>7. AI 사용 규칙 (중요)</h2>
          </div>

          <ul class="rules">
            <li>
              <b>명령 프롬프트(프롬프트)는 그대로 복사해서 제출</b>
              <span class="muted">— 우리가 “AI와 어떻게 협업했는지”가 평가의 핵심이야.</span>
            </li>
            <li>
              <b>검색/참고는 내가 만든 GPT 또는 지정된 경로로만</b>
              <span class="muted">— 검색 기록을 확인할 수 있게 운영할 거야.</span>
            </li>
            <li>
              <b>AI 답을 그대로 제출하면 점수는 낮아져</b>
              <span class="muted">— 중요한 건 “내 판단/수정/검증”이야.</span>
            </li>
            <li>
              <b>팀프로젝트는 역할 분담 + 합의 과정 기록</b>
              <span class="muted">— 협업은 ‘분업’이 아니라 ‘합의’까지 포함이야.</span>
            </li>
          </ul>

          <div class="callout">
            <b>한 줄 요약:</b> AI는 “복사기”가 아니라 “조수”로 쓰자.
          </div>
        </section>

        <!-- 8. 한 학기 프로젝트 흐름 -->
        <section class="card" id="sectionProject">
          <div class="card-title">
            <span class="icon">🗺️</span>
            <h2>8. 한 학기 프로젝트 흐름</h2>
          </div>

          <div class="flow">
            <div class="step"><span class="n">1</span> 불편함 수집</div>
            <div class="step"><span class="n">2</span> AI와 비교하기</div>
            <div class="step"><span class="n">3</span> 문제 정의</div>
            <div class="step"><span class="n">4</span> AI 활용 일지 작성</div>
            <div class="step"><span class="n">5</span> 프로토타입 제작(웹앱/설계/발표)</div>
            <div class="step"><span class="n">6</span> 발표 & 성장 성찰</div>
          </div>

          <p class="muted small">
            결과물은 상황에 따라 <b>웹앱 제작</b>, <b>알고리즘 설계+발표</b>, <b>피지컬컴퓨팅(마이크로비트)</b>까지 확장 가능.
          </p>

          <details class="detail">
            <summary>자세히 보기 (오늘 미션이 왜 1단계야?)</summary>
            <div class="detail-body">
              <ul>
                <li>프로젝트는 “해결”부터가 아니라 <b>문제 발견</b>부터 시작해.</li>
                <li>좋은 문제는 <b>관찰 가능한 증거</b>가 있고, <b>개선 기준</b>을 세울 수 있어.</li>
                <li>그래서 오늘은 우리 삶의 불편함을 “많이” 모아보는 게 1단계야.</li>
              </ul>
            </div>
          </details>
        </section>

        <!-- 9. 인공지능 기초 -->
        <section class="card" id="sectionAI">
          <div class="card-title">
            <span class="icon">⚙️</span>
            <h2>9. 인공지능이 뭘까? (첫 시간용)</h2>
          </div>

          <div class="grid2">
            <div class="mini">
              <div class="mini-title">🤖 인공지능</div>
              <p class="muted">
                사람처럼 “판단/예측/생성”을 하도록 만든 시스템.
                특히 요즘 우리가 많이 쓰는 건 <b>언어를 이해하고 생성하는 LLM</b>이야.
              </p>
            </div>

            <div class="mini">
              <div class="mini-title">🧠 원리(아주 간단히)</div>
              <p class="muted">
                많은 데이터를 학습해서 패턴을 찾고, 다음에 올 것을 확률적으로 예측해.
                그래서 결과를 <b>그럴듯하게</b> 내지만, 언제나 <b>검증</b>이 필요해.
              </p>
            </div>
          </div>

          <details class="detail">
            <summary>자세히 보기 (AI가 잘못 말하는 이유: “환각”)</summary>
            <div class="detail-body">
              <ul>
                <li>AI는 “정답 DB”가 아니라, <b>그럴듯한 다음 단어를 예측</b>하는 방식이 많아.</li>
                <li>그래서 자신감 있게 틀릴 수도 있어(환각).</li>
                <li>우리 수업에서 중요한 건: <b>근거 확인 → 수정 → 최종 판단</b></li>
              </ul>
              <div class="callout">
                <b>우리의 능력:</b> AI를 믿는 힘이 아니라, <b>검증하고 판단하는 힘</b>.
              </div>
            </div>
          </details>
        </section>

        <!-- 10. 진단평가 -->
        <section class="card" id="sectionDiagnosis">
          <div class="card-title">
            <span class="icon">📝</span>
            <h2>10. AI 리터러시 진단평가</h2>
          </div>

          <p class="muted">
            아래 폼을 작성해서 제출해줘. 제출하면 자동으로 저장돼.
            지현(교사)은 폼 <b>응답 탭</b>에서 전체 결과를 확인할 수 있어.
          </p>

          <div class="diag-actions">
            <button class="btn btn-primary" id="btnOpenForm">폼 열기/접기</button>
            <a class="btn" id="btnOpenNewTab" href="#" target="_blank" rel="noopener noreferrer">새 탭으로 열기</a>
          </div>

          <div id="formWrap" class="form-wrap" hidden>
            <iframe
              id="diagnosisFrame"
              title="AI 리터러시 진단평가"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <details class="detail">
            <summary>자세히 보기 (지현이 결과 보는 법 / 학생 제출 안내)</summary>
            <div class="detail-body">
              <div class="grid2">
                <div class="mini">
                  <div class="mini-title">👩‍🏫 지현이 결과 보는 법</div>
                  <ol class="muted">
                    <li>구글 폼 열기</li>
                    <li><b>응답</b> 탭 클릭</li>
                    <li><b>스프레드시트</b> 아이콘 눌러서 자동 시트 생성</li>
                    <li>학급별 필터/정렬해서 확인</li>
                  </ol>
                </div>
                <div class="mini">
                  <div class="mini-title">🧑‍🎓 학생 제출 안내</div>
                  <ul class="muted">
                    <li>폼 제출 후 “제출 완료” 화면 캡처(선택)</li>
                    <li>혹시 오류면 “새 탭으로 열기” 사용</li>
                    <li>제출 못한 학생은 수업 끝나기 전 반드시 완료</li>
                  </ul>
                </div>
              </div>
              <div class="callout">
                <b>중요:</b> 이 사이트(깃허브 페이지)는 정적 사이트라서 “여기서 채점/수집”은 못 해.
                대신 <b>구글 폼이 수집</b>하고, 지현은 <b>응답/시트</b>로 확인하면 돼.
              </div>
            </div>
          </details>

          <div class="small muted">
            ※ 문제가 있으면 “새 탭으로 열기” 버튼을 눌러줘.
          </div>
        </section>

        <footer class="footer">
          <p class="muted">© 2026 인공지능 원리탐구 · HYFL</p>
        </footer>
      </main>
    </div>

    <script src="script.js"></script>
  </body>
</html>
