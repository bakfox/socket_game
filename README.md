# 클라이언트 기획

## 사용 도구

1. client - unity
2. server - node express
3. 통신 - websocket.io

## 장르 및 시놉시스

```
횡스크롤 리듬 액션 게임 2D
```
## 시스템 구성 

게임 시작 

서버 연결-
로그인시 누구 로그인했는지 브로드 캐스트 보내줌 

스테이지 선택 
지정된 현재 내 스테이지 세션 데이터와 저장 스테이지 데이터를 불러와서 보여줌
스테이지 변경시 애니메이션 과 호출 

인게임 
게임 시작시 이전 인게임 세션 삭제후 새로운 세션 재작 후 게임 시작 
플레이어가 공격을 적중했을때 서버도 동일한 결과를 받고 검증을해서 인게임 세션에 저장
맞을 경우 클라와 서버 모두 콤버 0로 초기화.
끝나면 서버와 클라 결과를 비교해서 결과 보여주고 stage 세션에 저장 


## 랭킹 시스템

- [ ] 내용
- [ ] 2. 랭킹 데이터는 서버로 ~~ 구조로 만들어서 보낸다
- [ ] 3. 서버 Express및 DB를 통해서 랭킹을 구하고 client로 보낸다
- [ ] 4. 받은 데이터를 클라이언트에서 보여준다.

## 공격 패턴, 기획

1. 몬스터 타이밍에 맞춰서 공격!
2. 트리거 기준으로 나와 그 몬스터 사이의 positon 갑을 기준으로 타이밍 체크해서
3. 범위 밖에서 공격시 공격에 쿨타임이 걸림
4. 몬스터 타입은 두종류 붉은색 보라색임!

## 스테이지 시스템

- [x] 1. 스테이지 기능 1~9까지
- [ ] 2. 각 스테이지 마다 다른 노래

## 스코어 시스템

- [x] 1. no GOOD GREAT Excellent 에 따른 차별화적인 점수
- [x] 2. 콤버 시스템 특별한건 아직 없다. 보여주기 용도.

## 게임 시스템 ( 클라이언트 )

1. 모든 매니저는 GameManger에서 관리
2. 솔리드 원칙을 지켜서 제작한다.
3. UI 는 GUI MVP 패턴 적용
4. 플레이어 공격시 서버호출 지금 몬스터 위치와 플레이어 어택 위치 비교해서 체크 맞다면 다시 보내주기 status : "succes" 아니면 "fail "
5. 몬스터 배경 등 반복적인건 오브젝트 pooling 사용해서
6. 콤버 이벤트 걸어서 어디에서나 부를수 있게 하자 action 이용해서!
   ( 이벤트를 써서 이득을 볼수 있는 구조인지 생각해보자. 공격을 이벤트를 걸어봤자 어짜피 플레이어내에서만 쓰는데 굳이? 콤보는 ui에서 플레이어가 불러와서 써야하니까 쓰는거지..! 플레이어 hit는 고민중 )
7.

## 스토리 라인

```
몬스터 웨이브를 막아서 마을을 지키자
몇개 놓치면 실패
```
