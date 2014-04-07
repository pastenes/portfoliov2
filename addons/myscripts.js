console.group("Page links");
console.dir(document.querySelectorAll('a'));
console.groupEnd();

console.groupCollapsed("Tables");
console.dir(document.querySelectorAll('tr'));
console.groupEnd();

console.time("Bigloop");
	for (var i = 1000000 - 1; i >= 0; i-- ) {

	};
console.timeEnd("Bigloop");