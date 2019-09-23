var child_process = require('child_process');

// 默认情况，silent为false，子进程的stdout等从父进程继承
// output: output from the child
child_process.fork('./child.js', {
  silent: false
});

// silent为true，子进程的stdout等pipe向父进程
// output: output from the silent child
child_process.fork('./silentChild.js', {
  silent: true
});

// output: output from another silent child
var child = child_process.fork('./anotherSilentChild.js', {
  silent: true
});

child.stdout.setEncoding('utf8');
child.stdout.on('data', function (data) {
  console.log(data);
})
