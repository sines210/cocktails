import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-cart',
  templateUrl: './modal-cart.page.html',
  styleUrls: ['./modal-cart.page.scss'],
})
export class ModalCartPage implements OnInit {

       @Input() title!: string;
       @Input() article!: number;
       @Input() total!: number;
       @Input() submit!: string;

  constructor() { }

  ngOnInit() {
  }

}
