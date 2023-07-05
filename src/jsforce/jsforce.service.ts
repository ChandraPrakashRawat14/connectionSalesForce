import { Injectable } from '@nestjs/common';
import { Client, InjectJsForce } from '@ntegral/nestjs-force';

@Injectable()
export class JsforceService {
    public constructor(@InjectJsForce() private readonly client: Client) {
        console.log( this.client.conn)
       }
}
