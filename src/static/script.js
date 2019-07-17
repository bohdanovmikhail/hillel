async function run() {
    await fetch('/random-string')
        .then(response => response.text())
        .then(result => {
            console.log('Random string: ', result);
        });

    await timer(3000);

    await fetch('/random-int')
        .then(response => response.text())
        .then(result => {
            console.log('Random int: ', result);
        });

    await timer(3000);

    await fetch('/random-string')
        .then(response => response.text())
        .then(result => {
            console.log('Random string: ', result);
        });
}

run();

function timer(time) {
	return new Promise((resolve, reject) => {
  	setTimeout(() => resolve('Hello world'), time);
  });
}
