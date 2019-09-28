
// tslint:disable-next-line: class-name
export interface jsonProducts {
  'title': string;
  'img': string;
  'price': number;
}

export const products: jsonProducts[] = [
  {
    title: 'Cornfield',
    img: 'assets\img\cornfield.jpg',
    price: 123
  },
  {
    title: 'wheat',
    img: 'assets\img\wheat.jpg',
    price: 321
  }
];
