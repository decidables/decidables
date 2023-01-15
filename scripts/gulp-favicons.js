
// devDependencies
import favicons from 'favicons';
import through2 from 'through2';
import Vinyl from 'vinyl';

// Based on https://github.com/itgalaxy/favicons/blob/v6.2.2/src/index.js#L177
export default function gulpFavicons(params, handleHtml) {
  return through2.obj(function transform(file, encoding, callback) {
    if (file.isNull()) {
      return callback(null, file);
    }

    if (file.isStream()) {
      return callback(new Error('Streaming not supported'));
    }

    const {html: path, pipeHTML, ...options} = params;

    return favicons(file.contents, options)
      .then(({images, files, html}) => {
        [...images, ...files].forEach((asset) => {
          this.push(new Vinyl({
            path: asset.name,
            contents: Buffer.isBuffer(asset.contents)
              ? asset.contents
              : Buffer.from(asset.contents),
          }));
        });

        if (handleHtml) {
          handleHtml(html);
        }

        if (pipeHTML) {
          this.push(new Vinyl({
            path,
            contents: Buffer.from(html.join('\n')),
          }));
        }

        callback(null);
      })
      .catch(callback);
  });
}
