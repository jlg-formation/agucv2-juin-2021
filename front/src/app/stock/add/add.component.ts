import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor() {}

  ngOnInit(): void {}
}
