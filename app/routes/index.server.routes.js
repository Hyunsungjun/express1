module.exports = function(app) {
    const index = require('../controllers/index.server.controller');
    app.get('/', index.render);
}
// // 라우팅 파일은 app 을 인자로 받는다. 이 app 은 당연히 express 모듈이다. 
// 그리고 위 작성한 controller 파일을 require 시킨 뒤 app.get 으로 render를 수행하고 있다. 
// 이번엔 express 모듈을 구성하기 위한 파일을 만들기 위해 최상의 폴더로 가서 config 폴더를 만들자.
// config 폴더에 express_config.js 파일을 만들고 다음 코드를 적자. 
