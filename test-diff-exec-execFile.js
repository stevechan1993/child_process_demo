var child_process = require('child_process');
var execFile = child_process.execFile;
var exec = child_process.exec;

// exec(), execFile()最大的差别，在于是否创建了shell。
exec('ls -al .', function (error, stdout, stderr) {
  if (error) {
    throw error;
  }
  console.log(stdout);
});

execFile('ls -al .', { shell: '/bin/bash' }, function (error, stdout, stderr) {
  if (error) {
    throw error;
  }
  console.log(stdout);
});

