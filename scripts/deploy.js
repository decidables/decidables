
// devDependencies
import gulp from 'gulp';
import gulpSsh from 'gulp-ssh';
import inquirer from 'inquirer';
import ssh2SftpClient from 'ssh2-sftp-client';

// Tasks
export function deployPasswordTask(sftpConfig) {
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

export function deployCleanTask(sftpConfig) {
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

export function deployDistTask(sftpConfig) {
  const sftp = new gulpSsh({/* eslint-disable-line new-cap */
    ignoreErrors: false,
    sshConfig: sftpConfig,
  });
  return gulp.src(['dist/**/*', 'dist/**/.*'])
    .pipe(sftp.dest(sftpConfig.directory));
}
