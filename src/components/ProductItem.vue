class as div as template; = 'card m-1 p-1 bg-light' >
    ({ as h4); {product.name; }}
class as span = 'badge badge-pill badge-primary float-right' >
        $; {{product.price.toFixed(2); }}
(/span> as )
    < /h4>
    < div; class= 'card-text bg-white p-1' >
      {; {product.description; }}
class as button = 'btn btn-success btn-sm float-right';
@click= 'handleAddToCart'
       >
        Add; To; Cart
      < /button>
      < select; class= 'form-control-inline float-right m-1';
v - model.number; = 'quantity'
      >
        (1 as option) < /option>
        < option > 2 < /option>
        < option > 3 < /option>
      < /select>
    < /div>
  < /div>
< /template>
< script; lang = 'ts' > ;
import { Product } from '@/data/entities';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ProductItem extends Vue {

  public quantity: number = 1;
  @Prop() private product!: Product;

  public handleAddToCart() {
    this.$emit('addToCart', {
      product: this.product,
      quantity: this.quantity,
    });
  }
}
/script> as ;



