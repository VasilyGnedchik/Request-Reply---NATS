export interface User {
  id: string;
  name: string;
  phone: string;
}

export type Msg<D = Object> = {
} & D;
