/**
 * JavaScript教程
 */

/**
 * 入门篇
 * 基本语法
 */

// 4. 注释
function countdown(n) {
	while (n --> 0) console.log(n); // 注：n --> 0 会被当做 n-- > 0
}
countdown(3);
// 2
// 1
// 0


// 6.3 switch结构
var x = 1;
// 注：switch 语句内部采用的是"严格相等运算符(===)"
switch(x) {
	case true:
		console.log('x 发生类型转换');
		break;
	default:
		console.log('x 没有发生类型转换');
}
// x 没有发生类型转换


// 7.5 标签(label)
// 标签通常与 break 语句和 continue 语句配合使用，跳出特定的循环。
top:
for(var i = 0; i < 3; i++) {
	for(var j = 0; j < 3; j++) {
		if(i === 1 && j === 1) continue top;
		console.log('i=' + i + ', j=' + j);
	}
}
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
// i=2, j=0
// i=2, j=1
// i=2, j=2


/**
 * 数据类型
 * 字符串
 */
// 3 Base64 转码
function b64Encode(str) {
	return btoa(encodeURIComponent(str));
}

function b64Decode(str) {
	return decodeURIComponent(atob(str));
}

b64Encode('你好'); // "JUU0JUJEJUEwJUU1JUE1JUJE"
b64Decode(); // "你好"


/**
 * 数据类型
 * 函数
 */

// 1.2 函数的重复声明
function f() {
	console.log(1);
}
f(); // 2
function f() {
	console.log(2);
}
f(); // 2

// 注： 上面代码中，后一次的函数声明覆盖了前面一次。而且，由于函数名的提升，前一次声明在任何时候都是无效的，这一点要特别注意。


// 1.3 圆括号运算符，return 语句和递归
// 斐波那契数列 - 斐波那契数列数列从第3项开始，每一项都等于前两项之和。
function fib(num) {
	if (num === 0) return 0;
	if(num === 1) return 1;
	return fib(num - 2) + fib(num - 1);
}
fib(6); // 8
/*
 * fib(6) = fib(4) + fib(5);
 * 		  = fib(2) + fib(3) + fib(3) + fib(4);
 * 		  = fib(0) + fib(1) + fib(1) + fib(2) + fib(1) + fib(2) + fib(2) + fib(3);
 * 		  = 8
 * 		  fib(0) = 0
 * 		  fib(1) = 1
 * 		  fib(2) = 0 + 1 = 1
 * 		  fib(3) = 0 + 1 + 1 = 2
 * 		  fib(4) = 0 + 1 + 0 + 1 + 1 = 3
 * 		  fib(5) = 0 + 1 + 1 + 0 + 1 + 0 + 1 + 1 = 5
 * 		  fib(6) = 0 + 1 + 0 + 1 + 1 + 0 + 1 + 1 + 0 + 1 + 0 + 1 + 1 = 8
 */

/**
 * 运算符
 * 二进制位运算符
 */

// 5 异或运算符
// “异或运算”有一个特殊运用，连续对两个数a和b进行三次异或运算，a^=b; b^=a; a^=b;，可以互换它们的值
var a = 10;
var b = 99;

a ^= b, b ^= a, a ^= b; // 这是互换两个变量的值得最快方法。

a; // 99
b; // 10

/**
 * 语法专题
 * 错误处理机制
 */

// 6 finally 代码块
// try...catch结构允许在最后添加一个finally代码块，表示不管是否出现错误，都必需在最后运行的语句。
// 下面的例子充分反映了 try...catch...finally 这三者之间的执行顺序。
function f() {
	try {
		console.log(0);
		throw 'bug';
	} catch(e) {
		console.log(1);
		return true; // 这句原本会延迟到 finally 代码块结束再执行
		console.log(2); // 不会运行
	} finally {
		console.log(3);
		return false; // 这句会覆盖掉前面那句 return
		console.log(4); // 不会运行
	}

	console.log(5); // 不会运行
}

var result = f();
// 0
// 1
// 3

result;
// false


/**
 * 语法专题
 * 编程风格
 */

// 12 switch...case 结构

// switch...case结构要求，在每一个case的最后一行必须是break语句，否则会接着运行下一个case。这样不仅容易忘记，还会造成代码的冗长。

// 而且，switch...case不使用大括号，不利于代码形式的统一。此外，这种结构类似于goto语句，容易造成程序流程的混乱，使得代码结构混乱不堪，不符合面向对象编程的原则。

function doAction(action) {
	switch(action) {
		case 'hack':
			return 'hack';
		case 'slash':
			return 'slash';
		case 'run':
			return 'run';
		default:
			throw new Error('Invalid action.');
	}
}

// 改写成对象结构
function doActionOop(action) {
	var actions = {
		'hack': function () {
			return 'hack';
		},
		'slash': function () {
			return 'slash';
		},
		'run': function () {
			return 'run';
		}
	};

	if (typeof actions[action] !== 'function'){
		throw new Error('Invalid action.');
	}

	return actions[action]();
}


/**
 * 标准库
 * Array 对象
 */

// 3.16 链式使用
var users = [
	{name: 'tom', email: 'tom@example.com'},
	{name: 'peter', email: 'peter@example.com'}
];

users
	.map(function (user) {
		return user.email;
	})
	.filter(function (email) {
		return /^t/.test(email);
	})
	.forEach(function (email) {
		console.log(email);
	});


/**
 * Math 对象
 */

// 2.9 Math.random() [返回随机字符]

function random_str(length) {
	var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	ALPHABET += 'abcdefghijklmnopqrstuvwxyz';
	ALPHABET += '0123456789-_';
	var str = '';
	for (var i = 0; i < length; ++i) {
		var rand = Math.floor(Math.random() * ALPHABET.length);
		str += ALPHABET.substring(rand, rand + 1);
	}
	return str;
}





