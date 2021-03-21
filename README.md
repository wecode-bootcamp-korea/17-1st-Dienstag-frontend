# Dienstag
![main](https://user-images.githubusercontent.com/72085261/109430603-8ce3bf00-7a45-11eb-8123-e9eae234e756.gif)


'디엔스탁'은 학습 목적으로 제작된 '프라이탁' 홈페이지를 클론 프로젝트입니다. 재활용 소재로 만든 가방과 악세사리등을 만들고 각각의 제품들은 모두 다른 디자인이라는 특징을 가진 프라이탁 쇼핑몰의 기본적인 기능들을 구현했습니다. 사용된 이미지는 전부 직접 찍고 편집한 사진들임을 밝힙니다.

## 프로젝트 기간
2021.02.15(월) ~ 2021.02.26(금)

## 팀 구성
### 프론트엔드
- 강민지(PM) <a href="https://github.com/awaji0829">GitHub</a>
- 변미현 <a href="https://github.com/cocoball200">GitHub</a>
- 
### 백엔드  (<a href="https://github.com/wecode-bootcamp-korea/17-1st-Dienstag-backend">Repo</a>)
- 김하성 <a href="https://github.com/markkimjr">GitHub</a>
- 안재이 <a href="https://github.com/jaeyiahn">GitHub</a>
- 허정윤 <a href="https://github.com/banana1019">GitHub</a>

## 사용한 기술 스택

- 프론트엔드: html, css, Javscript, scss, react, CRA, context API 
- 백엔드: Python, Django, MySQL, AQueryTool, Git

## 프로젝트 진행 방식

- Trello, Slack 앱을 활용해 Scrum 방식으로 진행
![trello](https://user-images.githubusercontent.com/72085261/109430747-3c209600-7a46-11eb-9a5a-49780b91f427.gif)


## 프론트 엔드 구현목록


### 강민지 

### Main
- 레이아웃 구성 
- 하단 스크롤 기능

### Nav
- nav바 레이아웃
- nav바 모달창 구현
- 조건부 렌더링을 활용한 리스트 구현

### 상품리스트 페이지 및 상세박스
- 상품 카테고리 별 리스트 데이터 API통신
- 상품 클릭시 나타나는 상세박스 로직 구현
- 하단 악세서리 추천 UI 스크롤 기능 구현
- 하단 악세서리 데이터 API 통신

### filter
- filter nav 모달창 구현
- context API를 활용한 상품 컬러, 사이즈별 필터 로직 구현
- API통신으로 filter 된 데이터 리스트 페이지 및 상세박스 구현

### newsletter
- newletter 페이지 레이아웃 구현

### 변미현

### Login
- 로그인 레이아웃 구성
- 로그인 API 통신
- 로그인 후 상태메세지 변경 

### 회원가입
- 회원가입 레이아웃
- 회원가입 API 통신
- 비밀번호 유효성 검사 기능 구현

### 장바구니 
- 장바구니 추가 버튼 클릭시 장바구니에 바로 추가
- Nav에 위치한 장바구니 레이아웃 
- 장바구니에 담긴 물품의 가격 계산 
- 장바구니 추가 시 중복된 물품을 구매제한 하는 기능
- 필터에서 장바구니 추가하는 기능 

### CHECKOUT
- checkout 레이아웃 기능
- billing 주소와 shipping 주소가 다를 때 기능 구현
- billing과 shipping 주소를 처리하여 API 통신 
- 장바구니에 담긴 결과물 기능 구현

### MAP
- google-maps-react를 활용하여 지도 구현
- 페이지의 이미지와 비슷하게 지도의 스타일 변경. 

## Reference
- 이 프로젝트는 <a href="http://www.freitag.ch/">프라이탁</a> 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
