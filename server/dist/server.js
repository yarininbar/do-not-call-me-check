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
const express_1 = __importDefault(require("express"));
const checkNumber_1 = require("./checkNumber");
// Server configuration
const app = (0, express_1.default)();
const port = 8080;
app.use(express_1.default.json());
// CORS middleware
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
// API endpoint
app.post('/checkNumberOnDNC', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const phone = req.body.phone;
        const token = req.body.token;
        const name = req.body.name;
        const canCall = yield (0, checkNumber_1.checkCanCall)(phone, token, name);
        res.json(canCall);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}));
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
