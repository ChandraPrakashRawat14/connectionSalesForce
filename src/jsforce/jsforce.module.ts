import { Module } from '@nestjs/common';
import { JsforceService } from './jsforce.service';
import { JsforceController } from './jsforce.controller';
import { JsForceModule } from '@ntegral/nestjs-force';

@Module({imports:[ JsForceModule.forRoot({
  username: 'cp@moreyeahs.com',
  password: 'moreyeahs@123'+'zdKZRTBR8cOQ4PbymrsoBz58Y',
  // security_token: 'zdKZRTBR8cOQ4PbymrsoBz58Y',
  options: {
      loginUrl: 'https://moreyeahs4-dev-ed.develop.lightning.force.com'
  }
})],
  providers: [JsforceService],
  controllers: [JsforceController]
})
export class JsforceModule {}
