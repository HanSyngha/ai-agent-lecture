# GenAI Agent — 10-Chapter Code Tour

LLM 한 번의 호출에서 멀티 에이전트 오케스트레이션까지. 환경 셋업(Ch1)부터 멀티 에이전트(Ch10)까지 코드 워크스루 위주의 HTML 슬라이드 데크.

라이브: <https://syngha.com/ai-agent-lecture/>

수강생 피드백: [FEEDBACK.md](./FEEDBACK.md)

## 구조

```
ai-agent-lecture/
├── index.html         # Hub — 챕터 인덱스 (Astro 없이 그냥 HTML)
├── chapter-1.html     # 환경 셋업
├── chapter-2.html     # 환경변수 .env
├── chapter-3.html     # 시스템 프롬프트 & 페르소나
├── chapter-4.html     # 멀티턴 & 대화 히스토리
├── chapter-5.html     # 툴 정의와 개별 사용
├── chapter-6.html     # 고정 워크플로우
├── chapter-7.html     # Decision · 자율 툴 선택
├── chapter-8.html     # 피드백 루프 · Tool Calling
├── chapter-9.html     # Planning
├── chapter-10.html    # 멀티 에이전트
└── styles.css         # 디자인 시스템 (한 파일)
```

각 챕터는 reveal.js 5.x (CDN) + 공용 `styles.css`. 별도 번들/빌드 없음, 바로 브라우저.

## 조작

| Key | 동작 |
|---|---|
| `←` `→` `Space` | 슬라이드 이동 |
| `F` | 전체 화면 |
| `ESC` `O` | 개요(슬라이드 매트릭스) |
| `B` | 블랙 스크린 |
| `Home` `End` | 처음 / 끝 |
| 좌우 스와이프 | 모바일에서 이동 |

## 디자인

- 워밍한 잉크 베이스(`#0A0E16`) + 크림 페이퍼 텍스트
- 챕터별 액센트 9색 (champagne · rose · amber · mint · coral · plum · gold · sky · lime)
- 다이어그램 노드 컬러 코딩 고정 (mint=user, gold=LLM, coral=tool, sky=data)
- 한국어: Gowun Batang (display) · Pretendard (body) / 영문: Fraunces (variable serif) / 코드: JetBrains Mono

## 라이선스

MIT.
