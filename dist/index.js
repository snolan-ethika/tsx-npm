"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNumber = exports.IsNullOrEmpty = void 0;
function IsNullOrEmpty(str) {
    return str === null || str.trim().length === 0;
}
exports.IsNullOrEmpty = IsNullOrEmpty;
function IsNumber(num) {
    return !isNaN(Number(num));
}
exports.IsNumber = IsNumber;
