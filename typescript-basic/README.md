# 1. Typescript 란? 

    
*    프로그래밍 언어다.
*    타입스크립트는 ‘Compiled Language' 
    *  전통적인 compiled language 차이가 있다.  
    * 그래서 Transpile 용어를 사용
* 자바스크립트는 Interpreted Language 

# 2. 설치 및 실행
npm i -g typescript 

```js
$ ./node_modules/.bin/tsc test.js

"scripts": {
"transpile": "tsc test.ts",
"test": "echo \"Error: no test specified\" && exit 1"
},
$ npm run transpile
```
## 3.Compiler Options
        
*  compileOnSave
    * true / false (default false)
    * 최상단에 설정!
    * vscode & atom ( 저장시 자동 컴파일 기능)
*  extends
    * 파일 경로명 : string
    * 상속받아서 바꿔서 쓸 경우 사용 용이

셋다 설정이 없으면 모두다 컴파일
* files
    * files -> 상대 혹은 절대 경로의 리스트 배열 ( exclude 보다 강력)
* include
    * exclude보다 약하다
    * * 같은걸 사용하면 .ts / .tsx / .d.ts 만 include (allowJS)
* exclude
    * 설정 안하면 ( node_modules, bower_components, jspm_packages, <outDir>) default 로 제외
    * <outDir> 항상 제외 !!! ( include에 있어도 !!)
glob 패턴 .gitignore 유사)