
// devDependencies
const gulp = require('gulp');
const gulpSsh = require('gulp-ssh');
const inquirer = require('inquirer');
const ssh2SftpClient = require('ssh2-sftp-client');

// Tasks
function deployPasswordTask(sftpConfig) {
  return inquirer.prompt([{
    type: 'password',
    message: 'Enter password:',
    name: 'password',
    mask: '*',
  }])
    .then((responses) => {
      sftpConfig.password = responses.password;
    });
}
exports.deployPassword = deployPasswordTask;

function deployCleanTask(sftpConfig) {
  const sftp = new ssh2SftpClient(); /* eslint-disable-line new-cap */
  return sftp.connect(sftpConfig)
    .then(() => {
      return sftp.rmdir(sftpConfig.directory, true);
    })
    .then((data) => {
      console.log(data); /* eslint-disable-line no-console */
      return sftp.end();
    })
    .catch((err) => {
      console.log(err); /* eslint-disable-line no-console */
      return sftp.end();
    });
}
exports.deployClean = deployCleanTask;

function deployDistTask(sftpConfig) {
  const sftp = new gulpSsh({/* eslint-disable-line new-cap */
    ignoreErrors: false,
    sshConfig: sftpConfig,
  });
  return gulp.src(['dist/**/*', 'dist/**/.*'])
    .pipe(sftp.dest(sftpConfig.directory));
}
exports.deployDist = deployDistTask;
