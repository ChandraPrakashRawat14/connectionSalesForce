"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
var jsforce = require('jsforce');
let AppService = class AppService {
    getConnection() {
        try {
            var conn = new jsforce.Connection({
                loginUrl: 'https://login.salesforce.com/'
            });
            conn.login('cp@moreyeahs.com', 'moreyeahs@123' + 'zdKZRTBR8cOQ4PbymrsoBz58Y', function (err, res) {
                if (err) {
                    return console.error(err);
                }
                else {
                    console.log(res.id);
                    console.log(res.organizationId);
                }
            });
        }
        catch (error) {
        }
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map