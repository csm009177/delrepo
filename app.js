const fs = require('fs');
const http = require('http');

fs.writeFile(
  './delrepo.html',
  `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>누르지마세요 후회합니다</h1>
        <button id="bnt">누르세요</button> 
    </body>
    <script>
    let root = document.getElementById('root');
    root.style.alignItems = "center";
    root.style.justifyContent = "center";
    root.style.justifyItems = "center";
    let bnt = document.getElementById('bnt');
    bnt.style.position = "absolute";
    bnt.style.top = "52vh";
    bnt.style.width = "30vw";
    bnt.style.height = "10vh";
    bnt.style.background = "rgba(1,1,1,0.2)";
    bnt.addEventListener('click', function(event){
        
    });
  </script>
    </html>`,
        
    'utf8',

  function(err){
    if (err === null) {
        console.log('success');
    } else {
        console.log('fail');
    }
});

