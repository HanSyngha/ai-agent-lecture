# GenAI Agent — 10-Chapter Code Tour

LLM에서 멀티 에이전트까지의 길을, 코드 위주로 설명하는 HTML 슬라이드 데크.
환경 셋업(Ch1)부터 멀티 에이전트 오케스트레이션(Ch10)까지 10장.

라이브: <https://syngha.com/ai-agent-lecture/>

## 구조

```
ai-agent-lecture/
├── index.html         # Hub — 챕터 인덱스
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
├── shared.css         # 디자인 시스템 (한 파일)
└── shared.js          # 슬라이드 런타임 (한 파일)
```

각 챕터 HTML은 `shared.css` + `shared.js` 한 쌍에 의존. 추가 의존성 없음.

## 조작

| Key | 동작 |
|---|---|
| `←` `→` `Space` | 슬라이드 이동 |
| `Home` `End` | 처음 / 끝 |
| `N` | 강사 노트 토글 |
| `P` | 인쇄 모드 |
| 좌우 스와이프 | 모바일에서 이동 |

## 디자인

- 다크 모드 + lime/cyan/orange 액센트
- 한국어 폰트: Black Han Sans · IBM Plex Sans KR · Hahmlet · JetBrains Mono
- kinetic background canvas (입자 + 라인 네트워크)
- 코드 블록, 다이어그램 노드/플로우, 카드, 매트릭스, 대화 버블 등 프리미티브

## 라이선스

MIT.
