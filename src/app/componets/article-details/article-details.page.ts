import { HomePage } from './../../home/home.page';
import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.page.html',
  styleUrls: ['./article-details.page.scss'],
})
export class ArticleDetailsPage implements OnInit {

  public selectedArticle:string
  constructor(private newsApiService:NewsApiService ) {
    this.selectedArticle = newsApiService.selectedArticle
    console.log(this.selectedArticle);
  }

  ngOnInit() {
  }

}
