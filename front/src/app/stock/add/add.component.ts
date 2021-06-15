import { ArticleService } from './../../services/article.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl('toto', [Validators.required]),
    price: new FormControl(2.56, [Validators.required]),
    qty: new FormControl(1, [Validators.required]),
  });

  constructor(private router: Router, private articleService: ArticleService) {}

  ngOnInit(): void {}

  submit() {
    console.log('submit');
    this.articleService.add(this.f.value as Article);
    this.router.navigateByUrl('/stock');
  }
}
