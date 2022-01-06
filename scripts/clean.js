
// devDependencies
import del from 'del';

// Tasks
export function cleanLib() {
  return del(['lib/**/*', 'lib/**/.*']);
}

export function cleanLocal() {
  return del(['local/**/*', 'local/**/.*']);
}

export function cleanDist() {
  return del(['dist/**/*', 'dist/**/.*']);
}
