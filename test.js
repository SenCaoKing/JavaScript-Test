/* 入门篇 - 基本语法 */

// ④ 注释
function countdown(n) {
	while (n --> 0) console.log(n); // n --> 0 会被当做 n-- > 0
}
countdown(3);
// 2
// 1
// 0