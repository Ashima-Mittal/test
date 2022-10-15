fetch("closure.js", {})
.then(x => x.text())
.then(y => console.log(y));
