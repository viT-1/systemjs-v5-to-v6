import http from 'http';
import fs from 'fs';
import path from 'path';

const port = 3000;
const defaultHtml = 'index.html';
const baseDirectory = './dist';
const mimeTypes = {
	'.html': 'text/html',
	'.jpeg': 'image/jpeg',
	'.jpg': 'image/jpeg',
	'.png': 'image/png',
	'.js': 'text/javascript',
	'.json': 'application/json',
	'.css': 'text/css',
};

const staticServe = function (req, res) {
	try {
		const resolvedBase = path.resolve(baseDirectory);
		const safeSuffix = path.normalize(req.url).replace(/^(\.\.[\/\\])+/, '');

		var fsPath = path.join(resolvedBase, safeSuffix);

		if (safeSuffix === '\\')
			fsPath += defaultHtml;

		const fileStream = fs.createReadStream(fsPath);
		fileStream.on('error', function (e) {
			res.writeHead(404); // assume the file doesn't exist
			res.write(`404: File ${req.url} not Found!`);
			res.end();
		});

		fileStream.pipe(res);
		fileStream.on('open', function () {
			const mimeKey = path.extname(fsPath);
			// console.log(mimeKey);
			const mimeType = mimeTypes[mimeKey];
			res.writeHead(200, { 'Content-Type': mimeType });
		});
		
	} catch (e) {
		res.writeHead(500);
		res.end(); // end the response so browsers don't hang
		console.log(`Trying to reqwest: ${req.url}`);
		console.log(e.stack);
	}
}

http.createServer(staticServe).listen(port)

console.log(`listening on port ${port}`);
