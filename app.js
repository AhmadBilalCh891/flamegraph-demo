var express = require('express');
var app = express();

app.get('/', (req, res, next) => {
	f1();
	res.json(['Tony', 'Lisa', 'Michael', 'Ginger', 'Food']);
});

app.listen(3000, () => {
	console.log('Server running on port 3000');
});

function f1() {
	function f2() {
		function f3() {
			function f4() {
				function f5() {
					function f6() {
						function f7() {
							function f8() {
								function f9() {
									function f10() {
										keepCpuBusy();
									}
									f10();
								}
								f9();
							}
							f8();
						}
						f7();
					}
					f6();
				}
				f5();
			}
			f4();
		}
		f3();
	}
	f2();
}

function keepCpuBusy() {
	for (let i = 0; i < 1000; i++) {
        console.log('i----------->', i);
	}
}
