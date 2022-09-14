import { CARRIER } from '../common/constants';

export interface User {
  id: string;
  name: string;
}

export type Msg<D = Object> = {
  [CARRIER]?: { [key: string]: string };
} & D;
