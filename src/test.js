function suma(a, b, cb) {
	return cb(a, b);
}

suma(1, 3, (a, b) => {
	return a + b;
});
