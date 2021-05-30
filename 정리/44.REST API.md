# REST API
REST는 HTTP를 기반으로 클라이언트가 서버의 리소스에 접근하는 방식을 규정한 아키텍처고, REST API는 REST를 기반으로 서비스 API를 구현한 것을 의미한다.

## 1. REST API의 구성
* 자원 : URI
* 행위 : HTTP 요청 메서드
* 표현 : 행위의 구체적 내용(페이로드)

## 2. REST API 설계 원칙
1)URI는 리소스를 표현해야한다 - URI는 리소스를 식별하는데 중점을 두어야 한다. 동사보다는 __명사__ 를 사용한다.

    # bad
    GET /getTodos/1
    GET /todos/show/1

    # good
    GET /todos/1

2)리소스에 대한 행위는 HTTP 요청 메서드로 표현한다 - 서버에세 요청의 종류와 목적을 알리는 방법으로 HTTP 요청 메서드를 사용한다.
* GET : 모든/특정 리소스 취득 (페이로드X)
* POST : 리소스 생성 (페이로드O)
* PUT : 리소스 전체 교체 (페이로드O)
* PATCH : 리소스 일부 수정 (페이로드O)
* DELETE : 모든/특정 리소스 삭제 (페이로드X)

**페이로드 : 전송의 근본적인목적이 되는 데이터의 일부분(헤더와 메타데이터와 같은 데이터는 제외)

    # bad
    GET /todos/delete/1

    # good
    DELETE /todos/1

## JSON Server를 이용한 REST API 실습
vscode 터미널에 명령어 입력

    $ mkdir json-server-exam && cd json-server-exam
    $ npm init -y
    $ npm install json-server --save-dev

    $ json-server --watch db.json  //기본 포트 3000, watch 옵션 적용