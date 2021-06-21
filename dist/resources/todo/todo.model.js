"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const Todo = new Schema({
    content: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        require: true,
        default: false,
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model('Todo', Todo);
//# sourceMappingURL=todo.model.js.map