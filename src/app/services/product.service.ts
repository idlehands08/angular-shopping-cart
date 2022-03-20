import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

//   products: Product[] = [
//     new Product(1, 'Product1', 'This is Product1 description. Custom mechanical keyboard', 3200, 'https://media.wired.com/photos/60be799feaa210b2096c93fa/master/pass/games_keyboards_S2Y202.jpg'),
//     new Product(2, 'Product2', 'This is Product2 description. Superlight gaming mouse', 5800, 'https://cdn.shopify.com/s/files/1/0355/8296/7943/products/61WRvXLabPL._AC_SL1500_800x.jpg?v=1608264029'),
//     new Product(3, 'Product3', 'This is Product3 description. 49" Curved Monitor', 70200, 'https://images.samsung.com/is/image/samsung/ph-odyssey-g9-lc49g95tssexxp-frontwhite-307878031?$2160_1728_PNG$'),
//     new Product(4, 'Product4', 'This is Product4 description. High-spec gaming pc', 80850, 'https://m.media-amazon.com/images/I/91LSF1iZUFL._AC_SL1500_.jpg'),
//     new Product(5, 'Product5', 'This is Product5 description. Random product', 3899),
//     new Product(6, 'Product6', 'This is Product6 description. Random product', 4200,),
//     new Product(7, 'Product7', 'This is Product7 description. Random product', 3400,),
//     new Product(8, 'Product8', 'This is Product8 description. Random product', 6200,)
//  ]
  
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    //TODO: Populate products from an API and return an Observable
    console.log( this.http.get<Product[]>(apiUrl));
    return this.http.get<Product[]>(apiUrl);
  }
}
