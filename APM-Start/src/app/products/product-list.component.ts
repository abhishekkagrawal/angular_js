import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Products List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string;
  // listFilter: string = 'cart';
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  filteredProducts: IProduct[];
  products: IProduct[] = [];

  // private _productService;
  // constructor(private _productService: ProductService) {
  //   this._productService = ProductService;
  // }
  constructor(private _productService: ProductService) {
    this.listFilter = 'cart';
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    console.log('In OnInit');
    this._productService.getProducts()
      .subscribe(products => {
      this.products = products,
        this.filteredProducts = this.products;
      },
        error => this.errorMessage = <any>error);
    // this.products = this._productService.getProducts();
  }
}

