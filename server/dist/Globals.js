"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Globals {
}
class DevelopmentGlobals extends Globals {
    constructor() {
        super(...arguments);
        this.urls = {
            phoneQuery: "https://pverification.fta.gov.il/restricted/phone-list-verification"
        };
    }
}
class ProductionGlobals extends Globals {
    constructor() {
        super(...arguments);
        this.urls = {
            phoneQuery: "https://pverification.fta.gov.il/restricted/phone-list-verification"
        };
    }
}
const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals : new DevelopmentGlobals;
exports.default = globals;
