"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 557. 反转字符串中的单词 III https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
function reverseWord(str) {
    return str.split(' ').map(function (word) {
        return word.split('').reverse().join('');
    }).join(' ');
}
exports.default = reverseWord;
