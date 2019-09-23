var exec = require('child_process').exec;

// success
exec('ls -al', function (error, stdout, stderr) {
  if (error) {
    console.error('error: ' + error);
    return;
  }
  console.log('stdout: ' + stdout);
  console.log('stderr: ' + typeof stderr);
});

// faild
exec('ls hello.txt', function (error, stdout, stderr) {
  if (error) {
    console.error('error: ' + error);
    return;
  }
  console.log('stdout: ' + stdout);
  console.log('stderr: ' + stderr);
})
