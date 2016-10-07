var fs = require('fs');

fs.createReadStream('./node_modules/angular-precommit/index.js').pipe(fs.createWriteStream('./.git/hooks/commit-msg'));