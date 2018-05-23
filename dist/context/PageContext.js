"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = require("puppeteer");
class PageContext {
    constructor() {
    }
    static getInstance() {
        if (!PageContext.instance) {
            PageContext.instance = new PageContext();
            // ... any one time initialization goes here ...
        }
        return PageContext.instance;
    }
    getPage() {
        return this._page;
    }
    initPage() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._initialized) {
                this._initialized = true;
                this._browser = yield puppeteer_1.launch({ headless: false, args: ['--start-maximized'] });
                const page = yield this._browser.newPage();
                page.setViewport({
                    height: 800, width: 1820
                });
                this._page = page;
                this._page.on("requestfinished", () => { this._lastRequest = Date.now(); });
            }
        });
    }
    getLastRequest() {
        return this._lastRequest;
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._page.close();
            yield this._browser.close();
        });
    }
}
exports.PageContext = PageContext;
//# sourceMappingURL=PageContext.js.map