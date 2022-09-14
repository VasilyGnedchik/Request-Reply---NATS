import * as express from 'express';
import { Transport } from '../common/Transport';
import { User } from '../interfaces';
import { StorageMethods } from '../common/constants';
import { GetByUserId } from '../storage/handlers';


(async () => {

  const transport = new Transport();
  const port = 5000;

  await transport.connect();
  const api = express();

  api.get('/api/test/:userId', async (request, response) => {
    console.log(request.params.userId)
    const result = await transport.publish<GetByUserId, User[]>(StorageMethods.getUserById, {
      userId: request.params.userId,
    });

    response.send(result);

    return result;
  });
  api.listen(port, () => {
    console.info(`Server started on port ${port}`);
  });
})();