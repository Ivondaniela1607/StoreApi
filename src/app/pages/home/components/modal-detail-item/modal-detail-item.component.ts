import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-detail-item',
  templateUrl: './modal-detail-item.component.html',
  styleUrls: ['./modal-detail-item.component.css']
})
export class ModalDetailItemComponent implements OnInit {
@Input() item!:any;
  constructor(
    public readonly modal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }


}
