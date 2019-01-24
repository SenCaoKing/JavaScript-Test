/* 入门篇 - 基本语法 */

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
for(var i = 0; i < 3; i++){
	for(var j = 0; j < 3; j++){
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



