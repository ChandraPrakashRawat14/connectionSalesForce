import { Injectable } from '@nestjs/common';
var jsforce = require('jsforce');

@Injectable()
export class AppService {
  getConnection() {
    try {
      var conn = new jsforce.Connection({
        loginUrl: 'https://login.salesforce.com/'
      });
      conn.login('cp@moreyeahs.com', 'moreyeahs@123' + 'zdKZRTBR8cOQ4PbymrsoBz58Y', function (err, res) {
        if (err) { return console.error(err); }
        else {
          console.log(res.id);
          console.log(res.organizationId);
        }
      });
    } catch (error) {

    }
  }
}
