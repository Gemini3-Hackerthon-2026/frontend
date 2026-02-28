# 🎵 MoodTune: K-POP 감정 기반 무드트래커 & 추천 서비스

> 사용자의 현재 감정을 **Gemini AI**로 분석하여 최적의 K-POP 플레이리스트를 추천하고, 28일 주기의 감정 변화를 시각적으로 기록하는 웹 애플리케이션입니다.

---

## ✨ 주요 기능 (Key Features)

- **AI 감정 분석 및 큐레이션**: 사용자의 감정 텍스트를 분석하여 맞춤형 플레이리스트(10곡)와 응원 메시지를 생성합니다.
- **28일 무드트래커 (Mood Tracker)**: 한 달을 28일 주기로 관리하며, 날짜별 감정 테마색을 활용해 시각적인 대시보드를 제공합니다.
- **인터랙티브 히스토리 패널**: 특정 날짜 클릭 시 우측 슬라이드 패널을 통해 과거 기록을 확인하며, **토글(Toggle) 기능**으로 리스트를 깔끔하게 관리합니다.
- **멀티미디어 연동**: 
  - **iTunes Search API**: 추천 곡의 앨범 아트를 실시간으로 로드합니다.
  - **YouTube 검색**: 클릭 시 해당 곡의 YouTube 검색 결과로 즉시 연결됩니다.
- **로컬 데이터 저장**: 사용자의 모든 기록은 브라우저의 `localStorage`에 보관되어 데이터가 유지됩니다.

---

## 🧱 기술 스택 (Tech Stack)

### Frontend
- **React (JavaScript)**: UI 및 상태 관리.
- **Framer Motion**: 부드러운 패널 슬라이드 및 리스트 토글 애니메이션.
- **Lucide React**: 일관된 디자인의 아이콘 시스템.
- **CSS Modules**: 컴포넌트 단위 스타일링.

### Infrastructure & AI
- **Google Cloud Platform (GCP)**: Cloud Storage(GCS)를 이용한 정적 호스팅 배포.
- **Gemini 1.5 Flash API**: 자연어 처리 기반 감정 분석 및 추천 엔진.
- **iTunes Search API**: 음악 메타데이터 및 아트워크 정보 제공.

---

## 📦 설치 및 실행

### 1) 환경 변수 설정
프로젝트 루트에 `.env` 파일을 생성하고 아래 내용을 추가합니다.
```env
REACT_APP_GEMINI_API_KEY=여러분의_제미나이_API_키
```
### 2) 개발 환경 구동
Bash
npm install
npm start
☁️ GCP 배포 및 트러블슈팅
본 프로젝트는 Google Cloud Storage (GCS) 버킷을 통해 호스팅되고 있습니다.

**🛠 배포 설정 (Checklist)**
정적 웹사이트 호스팅: index.html을 색인 페이지 및 오류(404) 페이지로 설정하여 SPA 라우팅을 지원합니다.

IAM 권한: allUsers에게 저장소 개체 뷰어 (Storage Object Viewer) 역할을 부여하여 공개 액세스를 허용합니다.

**🧯 트러블슈팅 (White Screen / 404 해결)**
절대 경로 이슈: index.html이 버킷 외부 경로를 참조할 경우 하얀 화면이 뜰 수 있습니다. package.json에 "homepage": "."를 추가하여 상대 경로로 빌드하는 것을 권장합니다.

파일 구조: build 폴더 내의 내용물(index.html, static 등)이 버킷의 최상위 경로에 위치해야 합니다.

**🤖 Gemini API 응답 포맷 (JSON)**
애플리케이션은 아래 정형화된 JSON 데이터를 바탕으로 UI를 구성합니다.

```JSON
{
  "emotion_summary": "오늘 하루 정말 고생 많으셨네요...",
  "emotion_tags": ["#따뜻한위로", "#편안한휴식", "#잔잔함"],
  "playlist": {
    "theme": "나를 위한 달콤한 위로, K-POP 힐링 플레이리스트",
    "description": "지친 마음을 어루만져 줄 감미로운 멜로디의 곡들입니다.",
    "accent_color": "#a855f7",
    "songs": [
      {"artist": "아이유", "title": "밤편지"},
      {"artist": "이하이", "title": "한숨"}
    ]
  }
}
```
📄 License
이 프로젝트는 MIT License를 따릅니다.
