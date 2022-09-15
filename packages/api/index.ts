import * as express from 'express';
import { Transport } from '../common/Transport';
import { User } from '../interfaces';
import { StorageMethods } from '../common/constants';
import { EmptyObj } from '../storage/handlers';

(async () => {

  const transport = new Transport();
  const port = 5000;

  await transport.connect();
  const api = express();
  api.use(express.json())

  api.get('/api/test', async (request, response) => {
    const result = await transport.publish<EmptyObj, User[]>(StorageMethods.getUsers, {});

    response.send(result);

    return result;
  });
  api.listen(port, () => {
    console.info(`Server started on port ${port}`);
  });
})();