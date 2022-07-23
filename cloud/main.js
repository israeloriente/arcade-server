const util = require('util');
const fs = require('fs');
const exec = util.promisify(require('child_process').exec);

Parse.Cloud.beforeSave("Game", async (req) => {
	try {
		const cd = await exec("ls -la");
		if (cd.stdout) console.log('stdout ', cd.stdout);
		if (cd.stderr)  console.log('sterr ', cd.stderr);
	} catch (e) {
		console.log('Algo deu errado ❌');
		console.log(e);
	}
});
