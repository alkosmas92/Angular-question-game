import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.page.html',
  styleUrls: ['./simple-modal.page.scss'],
})
export class SimpleModalPage  {
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


}
