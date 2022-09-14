import { getByUserId } from './handlers';
import { Transport } from '../common/Transport';
import { StorageMethods } from '../common/constants';

export const transport = new Transport();

(async () => {
  //console.log('before connected ' + StorageMethods.getUserById+'f: ' + getByUserId)
  try {
    await transport.connect();
    //console.log('connected ' + StorageMethods.getUserById+'f: ' + getByUserId)
    transport.subscribe(StorageMethods.getUserById, getByUserId);
  } catch (error) {
    console.log(error)
    console.error(error);
    process.exit(1);
  }
})();
