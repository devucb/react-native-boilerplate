const parseChangelog = require('changelog-parser');
const fs = require('fs');

parseChangelog(
  {
    filePath: './CHANGELOG.md',
    removeMarkdown: true,
  },
  function (err, result) {
    if (err) throw err;
    let { body } = result.versions[0];
    body = body.replace(/\s*\([^()]*\)/g, '');
    body = body.replace(/\s*\([^()]*\)/g, '');
    body = body.replace(':wrench:', '🚿');
    body = body.replace(':sparkles:', '✨');
    body = body.replace(':bug:', '🔥');
    body = body.replace(/###/g, '');
    fs.writeFile('./release-notes.txt', body, function (err) {
      if (err) {
        return console.log(err);
      }
    });
  },
);
