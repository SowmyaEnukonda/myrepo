import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../service/get-data.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{
  getParamValue:any;
  getProductData:any=[];
  filterProductData : any =[];
  getSubCategoryOption : any =[];
  constructor(private route:ActivatedRoute, private getData:GetDataService){}
  ngOnInit(): void {
    
      this.getParamValue = this.route.snapshot.paramMap.get('name');
       this.getData.productData.filter((app:any)=>{
        if(app.pdCategory == this.getParamValue){
          this.getProductData.push(app);
          this.filterProductData.push(app);
          console.log("pro",this.getProductData);
        }
      });

      this.getData.subCategoriesFilterData.filter((app:any)=>{
        if(app.categories == this.getParamValue){
          this.getSubCategoryOption.push(app);
          console.log("sub",this.getSubCategoryOption);
        }
      });

  }

  filterSelect(data:any){
    this.filterProductData = [];
    var getFilterValue = data.target.value;
    console.log(getFilterValue);
    if(getFilterValue !='all'){
      this.getData.productData.filter((app:any)=>{
        if(app.pdSubCategory == getFilterValue){
          this.filterProductData.push(app);
          console.log("filter",this.filterProductData);
        }
      });
    }
    else{
      this.filterProductData = this.getProductData;
    }

}
}
