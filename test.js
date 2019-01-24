/* 入门篇 - 基本语法 */

// ④ 注释
function countdown(n) {
	while (n --> 0) console.log(n); // 注：n --> 0 会被当做 n-- > 0
}
countdown(3);
// 2
// 1
// 0

// ⑥ switch结构
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



