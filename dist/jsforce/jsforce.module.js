"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsforceModule = void 0;
const common_1 = require("@nestjs/common");
const jsforce_service_1 = require("./jsforce.service");
const jsforce_controller_1 = require("./jsforce.controller");
const nestjs_force_1 = require("@ntegral/nestjs-force");
let JsforceModule = exports.JsforceModule = class JsforceModule {
};
exports.JsforceModule = JsforceModule = __decorate([
    (0, common_1.Module)({ imports: [nestjs_force_1.JsForceModule.forRoot({
                username: 'cp@moreyeahs.com',
                password: 'moreyeahs@123' + 'zdKZRTBR8cOQ4PbymrsoBz58Y',
                options: {
                    loginUrl: 'https://moreyeahs4-dev-ed.develop.lightning.force.com'
                }
            })],
        providers: [jsforce_service_1.JsforceService],
        controllers: [jsforce_controller_1.JsforceController]
    })
], JsforceModule);
//# sourceMappingURL=jsforce.module.js.map