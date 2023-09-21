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
exports.checkCanCall = void 0;
const axios_1 = __importDefault(require("axios"));
const phoneValidator_1 = require("./phoneValidator");
function checkCanCall(phone, token, name) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!token || !name) {
            throw new Error('TOKEN_OR_NAME_ARE_MISSING');
        }
        const validPhoneNumberList = (0, phoneValidator_1.validatePhoneNumber)(phone);
        // Request body
        const requestData = {
            data: validPhoneNumberList,
        };
        // Request headers 
        const config = {
            headers: {
                token: token,
                name: name,
                'Content-Type': 'application/json',
            },
        };
        try {
            // Request
            const response = yield axios_1.default.post("https://pverification.fta.gov.il/restricted/phone-list-verification", requestData, config);
            // Check the response and return the result
            if (response.data.data.length !== 0) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    });
}
exports.checkCanCall = checkCanCall;
