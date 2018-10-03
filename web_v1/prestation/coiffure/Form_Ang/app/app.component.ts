import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container-fluid example-wrapper">
        <div class="row">
            <div class="col-xs-12 col-sm-4 example-col">
                <p>Service:</p>
                <kendo-dropdownlist
                    [data]="dataCategory"
                    [value]="selectedCategory"
                    [defaultItem]="defaultItemCategories"
                    [textField]="'categoryName'"
                    [valueField]="'categoryId'"
                    (valueChange)="handleCategoryChange($event)"
                >
                </kendo-dropdownlist>
            </div>
            <div class="col-xs-12 col-sm-4 example-col">
                <p>Sous-Services:</p>
                <kendo-dropdownlist
                    [disabled]="isDisabledProducts"
                    [defaultItem]="defaultItemProducts"
                    [data]="dataResultProducts"
                    [value]="selectedProduct"
                    [textField]="'productName'"
                    [valueField]="'productId'"
                    (valueChange)="handleProductChange($event)"
                >
                </kendo-dropdownlist>
            </div>
            <!--<div class="col-xs-12 col-sm-4 example-col">
                <p>Order:</p>
                <kendo-dropdownlist
                    [disabled]="isDisabledOrders"
                    [defaultItem]="defaultItemOrders"
                    [data]="dataResultOrders"
                    [value]="selectedOrder"
                    [textField]="'orderName'"
                    [valueField]="'orderId'"
                    (valueChange)="handleOrderChange($event)"
                >
                </kendo-dropdownlist>
            </div>-->
        </div>
    </div>
  `
})
export export class AppComponent {

    public isDisabledProducts: boolean = true;
    public isDisabledOrders: boolean = true;

    public defaultItemCategories: { categoryName: string, categoryId: number } = { categoryName: "Select category", categoryId: null };

    public defaultItemProducts: { productName: string, productId: number } = { productName: "Select product", productId: null };

    public defaultItemOrders: { orderName: string, orderId: number } = { orderName: "Select order", orderId: null };

    public dataCategory: Array<{ categoryName: string, categoryId: number }> = [
        { categoryName: "Coiffure", categoryId: 1 },
        { categoryName: "Ongles", categoryId: 2 },
        { categoryName: "Maquillage", categoryId: 3 }
    ];

    public dataProducts: Array<{ productName: string, productId: number,categoryId:number }> = [
        { productName: "Brushing", productId: 1,categoryId: 1 },
        { productName: "Keratine", productId: 2,categoryId: 1 },
        { productName: "Minicoiffure", productId: 3,categoryId: 1  },
        { productName: "Keratineapplication", productId: 4,categoryId: 1  },
        { productName: "Pedicure", productId: 5,categoryId: 2  },
        { productName: "Manicure", productId: 6,categoryId: 2  },
        {productName:"Posevernis", productId:7,categoryId: 2},
        {productName:"Posevernispermanent",productId:8, categoryId:2},
        {productName:"Gel", productId: 9,categoryId: 2},
        {productName:"Makeup", productId1:10,categoryId :3},
        {productName:"Makeup+fauxcils", productId: 11, categoryId:3},
    ];

    public dataOrders: Array<{ orderName: string,orderId:number, productId: number, }> = [
        { orderName: "Cunewalde", orderId: 1, productId: 1 },
        { orderName: "Albuquerque", orderId: 2, productId: 1 },
        { orderName: "Geneva", orderId: 3, productId: 2 },
        { orderName: "Graz", orderId: 4, productId: 2 },
        { orderName: "London", orderId: 5, productId: 3 },
        { orderName: "I. de Margarita", orderId: 6, productId: 3 },
        { orderName: "Barquisimeto", orderId: 7, productId: 4 },
        { orderName: "Brandenburg", orderId: 8, productId: 4 },
        { orderName: "Cunewalde", orderId: 9, productId: 5 },
        { orderName: "Mexico D.F.", orderId: 10, productId: 5 },
        { orderName: "Mexico D.F.", orderId: 11, productId: 6 },
        { orderName: "Rio de Janeiro", orderId:12, productId: 6 }
    ];

    public dataResultProducts: Array<{ productName: string, productId: number,categoryId:number }>;

    public dataResultOrders: Array<{ orderName: string,orderId:number, productId: number, }>;

    public selectedCategory: { categoryName: string, categoryId: number};
    public selectedProduct: { productName: string, productId: number};
    public selectedOrder: { orderName: string, orderId: number};

    handleCategoryChange(value) {
      this.selectedCategory = value;
      this.selectedProduct = undefined;
      this.selectedOrder = undefined;

      if(value.categoryId == this.defaultItemCategories.categoryId){
        this.isDisabledProducts = true;
        this.dataResultProducts = [];
      } else {
        this.isDisabledProducts = false;
        this.dataResultProducts = this.dataProducts.filter((s) => s.categoryId === value.categoryId )
      }

      this.isDisabledOrders = true;
      this.dataResultOrders = [];
    }

    handleProductChange(value) {
      this.selectedProduct = value;
      this.selectedOrder = undefined;

      if(value.productId == this.defaultItemProducts.productId){
        this.isDisabledOrders = true;
        this.dataResultOrders = [];
      } else {
        this.isDisabledOrders = false;
        this.dataResultOrders = this.dataOrders.filter((s) => s.productId === value.productId )
      }
    }

    handleOrderChange(value) {
      this.selectedOrder = value;
    }

}
