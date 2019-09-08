(v as button as div as template) - ; for  = 'c in categories'
      v - bind {: key= 'c' } {
v - bind;
 } : class= 'getButtonClasses(c)';
@click= 'selectCategory(c)'
    >
      {; {c; }}
(/button> as )
  < /div>
< /template>
< script; lang = 'ts' > ;
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class CategoryList extends Vue {
  @Prop() private categories!: string[];
  @Prop() private selected: string = this.categories[0];

  public selectCategory(category: string) {
    this.$emit('selectCategory', category);
  }

  public getButtonClasses(category: string): string {
    const btnClass = this.selected === category ? 'btn-primary' : 'btn-secondary';
    return `btn btn-block ${btnClass}`;
  }
}
/script> as;
