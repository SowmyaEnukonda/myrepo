import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../service/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  bannerImgs = [
    {
      id: 1,
      img: 'assets/images/banner/banner_one.jpg'
    },
    {
      id: 2,
      img: 'assets/images/banner/banner_two.jpg'
    },
    {
      id: 3,
      img: 'assets/images/banner/banner_three.jpg'
    }
  ];
  getCategoriesData:any;
  getApplianceProductData : any;
  getFashionProductData : any = [];
  constructor(private getData:GetDataService){}
  ngOnInit(): void {
      this.getCategoriesData = this.getData.categoriesData;
      this.getApplianceProductData = [];
      this.getData.productData.filter((app:any)=>{
        if(app.pdCategory == 'appliance')
        {
          this.getApplianceProductData.push(app);
        }
        if(app.pdCategory == 'fashion'){
          this.getFashionProductData.push(app);
        }
      })
  }

}
