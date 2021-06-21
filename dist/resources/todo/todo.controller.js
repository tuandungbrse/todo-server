"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOne = exports.deleteOne = exports.createOne = exports.getOne = exports.getAll = void 0;
const todo_model_1 = __importDefault(require("./todo.model"));
function getAll(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const todos = yield todo_model_1.default.find({});
            res.status(200).json({ data: todos });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.getAll = getAll;
function getOne(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const todo = yield todo_model_1.default.findById(id);
            res.status(200).json({ data: todo });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.getOne = getOne;
function createOne(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { content } = req.body;
            const todo = yield todo_model_1.default.create({ content });
            res.status(201).json({ data: todo });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.createOne = createOne;
function deleteOne(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const todo = yield todo_model_1.default.findByIdAndDelete(id);
            res.status(200).json({ data: todo });
        }
        catch (error) {
            next(error);
        }
    });
}
exports.deleteOne = deleteOne;
function updateOne(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const todo = yield todo_model_1.default.findById(id);
            const todo1 = yield todo_model_1.default.findByIdAndUpdate(id, { status: true });
            res.status(200).json(todo);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.updateOne = updateOne;
//# sourceMappingURL=todo.controller.js.map