import {Product, Order} from './entities';
import Axios from 'axios';

const protocol = 'http';
const hostname = 'localhost';
const port = 4600;

const urls = {
  products: `${protocol}://${hostname}:${port}/products`,
  orders: `${protocol}://${hostname}:${port}/orders`,
};

export class HttpHandler {
  public loadProducts(): Promise < Product[] > {
    return Axios.get < Product[] > (urls.products).then((res) => res.data);
  }
  public storeOrder(order: Order): Promise < number > {
    const orderData = {
      lines: [
        ...order
          .orderLines
          .values(),
      ].map((ol) => ({productId: ol.product.id, productName: ol.product.name, quantity: ol.quantity})),
    };

    return Axios.post < {
      id: number,
    } > (urls.orders, orderData).then((res) => res.data.id);
  }

}
