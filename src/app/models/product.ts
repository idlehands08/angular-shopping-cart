export class Product {
  _id: string;
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;

  constructor(_id, id, name, description = '', price = 0, imageUrl = 'https://media.wired.com/photos/60be799feaa210b2096c93fa/master/pass/games_keyboards_S2Y202.jpg') {
    this._id = _id;
    this.id = id;
    this.name = name
    this.description = description
    this.price = price
    this.imageUrl = imageUrl
  }
}
