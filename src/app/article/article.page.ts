import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticlesService } from '../articles.service';
import { Article } from '../article.model';

import { Router } from '@angular/router';


@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {

  article: Article;

  constructor(  
    private articlesService: ArticlesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
      this.activatedRoute.params.subscribe(params=>{
        this.getArticle(params['articleId']);
      });
    }
  
    getArticle(id): void {
      this.articlesService.getArticle(id).subscribe(
        (response: any) => {
          this.article = response.article;
        }
      );
    }

}
