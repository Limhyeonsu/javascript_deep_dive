const arr = [1,2,3];

//alert함수는 브라우저에서만 동작하는 클라이언트 사이트 Web API로 브라우저 환경에서만 유효하다.
arr.forEach(alert);  //ReferenceError: alert is not defined

//Code Runner확장 플러그인 설치. (ctrl+alt+N) 단축키를 사용해 현재 자바스크립트를 실행할 수 있다.