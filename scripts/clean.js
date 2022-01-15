
// devDependencies
import del from 'del';

// Tasks
export function cleanLib() {
  return del('lib/**/{*,.*}');
}

export function cleanLocal() {
  return del('local/**/{*,.*}');
}

export function cleanDist() {
  return del('dist/**/{*,.*}');
}
