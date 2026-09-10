export type RoomType = {
  id ?: number
  idUser ?: number
  image: string | File | Blob;
  name: string;
  type: string;
  number: number;
  price: number;
  capacity: number;
  nbBed: string;
  wifi: string;
  airConditioning: string;
  tv: string;
  avaible: string;
};