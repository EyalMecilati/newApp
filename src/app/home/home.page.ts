import { Country } from '../../assets/countrys';
import { NewsApiService } from './../services/news-api.service';
import { Component } from '@angular/core';
import { Category } from 'src/assets/category';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
// declaration 
  public spinnerChecker: boolean = false;
  public articles_: any[];
  public countrys: Array<any> = Country;
  public selectedCountry: any = Country[19];
  public categorys: Array<any> = Category;
  public selectedCategory: string = "";
  public selectedArticle;



  constructor(private newsApiService: NewsApiService, private route: Router, ) {
    this.getArticle(this.selectedCountry.code, this.selectedCategory)
  }

  // featching the article from the api 
  public getArticle(CountryCode, categorys) {
    this.spinnerChecker = true;
    this.newsApiService.getHeadings(CountryCode, categorys).subscribe(articlesArray => {
      console.log('result', articlesArray);
      this.articles_ = articlesArray.articles.filter(article => article.urlToImage);
      this.spinnerChecker = false;
    });
  }


  public afterCountryChange() {

    this.getArticle(this.selectedCountry.code, this.selectedCategory)
  }
  public afterCategoryChange() {
    if (this.selectedCategory.length > 1) {
      console.log(this.selectedCategory);
    }
    console.log(this.categorys, this.categorys);
    this.getArticle(this.selectedCountry.code, this.selectedCategory)

  }

  public doRefresh(event) {
    this.getArticle(this.selectedCountry.code, this.selectedCategory)
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

    public goToMoreDetails(article){
      this.newsApiService.selectedArticle = article;
    this.route.navigate(['/article-details']);
    console.log(this.selectedArticle);
  }

  
 

}