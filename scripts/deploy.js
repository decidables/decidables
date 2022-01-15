
// devDependencies
import glob from 'glob';
import gulp from 'gulp';
import gulpSsh from 'gulp-ssh';
import inquirer from 'inquirer';
import ssh2SftpClient from 'ssh2-sftp-client';

// Tasks
export function deployPasswordTask(sftpConfig) {
  return function deployPassword () {
    return inquirer.prompt([{
      type: 'password',
      message: 'Enter password:',
      name: 'password',
      mask: '*',
    }])
      .then((responses) => {
        sftpConfig.password = responses.password;
      });
  };
}

export function deployCleanTask(sftpConfig, site = null) {
  return function deployClean() {
    if (site) {
      sftpConfig.directory = `/www/${site}`;
    }
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
  };
}

export function deployDistTask(sftpConfig, site = null) {
  return function deployDist() {
    let localPath = '';
    if (site) {
      sftpConfig.directory = `/www/${site}`;
      localPath = `sites/${site}/`;
    }
    const sftp = new gulpSsh({/* eslint-disable-line new-cap */
      ignoreErrors: false,
      sshConfig: sftpConfig,
    });
    return gulp.src(`${localPath}dist/**/{*,.*}`)
      .pipe(sftp.dest(sftpConfig.directory));
  };
}

export function deployAllTask() {
  const sites = glob.sync('*', {cwd: 'sites/'});
  const sftpConfig = {
    host: 'web.uvic.ca',
    port: 22,
    username: 'akrawitz',
    password: null,
    directory: '/www',
  };
  const series = [
    deployPasswordTask(sftpConfig),
  ]

  sites.forEach((site) => {
    series.push(deployCleanTask(sftpConfig, site));
    series.push(deployDistTask(sftpConfig, site));
  });

  return gulp.series(...series);
}
