import { ArticleService } from './article.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(private http: HttpClient) {
    super();
    this.refresh();
  }

  refresh() {
    this.http.get<Article[]>('/api/articles').subscribe({
      next: (articles) => {
        console.log('articles: ', articles);
        this.articles = articles;
      },
      complete: () => {
        console.log('complete');
      },
      error: (err) => {
        console.error('err: ', err);
      },
    });
  }

  add(article: Article) {
    super.add(article);
    this.http.post<void>('/api/articles', article).subscribe({
      next: () => {
        this.refresh();
      },
      complete: () => {
        console.log('complete');
      },
      error: (err) => {
        console.error('err: ', err);
      },
    });
  }

  remove(articles: Set<Article>) {
    super.remove(articles);

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: [...articles].map((a) => a.id),
    };

    this.http.delete<void>('/api/articles', options).subscribe({
      next: () => {
        this.refresh();
      },
      complete: () => {
        console.log('complete');
      },
      error: (err) => {
        console.error('err: ', err);
      },
    });
  }
}
