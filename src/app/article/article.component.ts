import { Component, OnInit } from '@angular/core';
import {Article} from "../article";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article = {};
  articles: Article[] = [
    {
      title: 'The Evolution of Java',
      url: 'https://gpcoder.com/4975-huong-dan-java-design-pattern-dependency-injection/'
    },
    {
      title: 'Lập trình đa luồng trong Java (Java Multi-threading)',
      url: 'https://gpcoder.com/3484-lap-trinh-da-luong-trong-java-java-multi-threading/'
    },
    {
      title: 'Hướng dẫn tạo và sử dụng ThreadPool trong Java',
      url: 'https://gpcoder.com/3548-huong-dan-tao-va-su-dung-threadpool-trong-java/'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addNewArticle() {
    this.articles.push(this.article);
  }

}
