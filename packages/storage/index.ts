import { getUsers } from './handlers';
import { Transport } from '../common/Transport';
import { StorageMethods } from '../common/constants';
import { myDataSource } from './app-data-source';

export const transport = new Transport();

(async () => {
  try {
    myDataSource
      .initialize()
      .then(() => {
        console.log("Data Source has been initialized!")
      })
      .catch((err) => {
        console.error("Error during Data Source initialization:", err)
      })
    await transport.connect();
    transport.subscribe(StorageMethods.getUsers, getUsers);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();