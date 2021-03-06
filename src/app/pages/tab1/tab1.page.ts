import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataLocalService } from '../../services/data-local.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  swiperOptions = {
    allowsSlidePrev: false,
    allowSlideNext: false
  }
  constructor(private barcodeScanner: BarcodeScanner, private dataLocal: DataLocalService) { }

  ionViewWillEnter() {
    console.log('viewWillEnter');
  }
  ionViewWillLeave() {
    console.log('viewWillLeave');
  }
  ionViewDidEnter() {
    console.log('viewDidEnter');
  }
  ionViewDidLeave() {
    console.log('viewDidLeave');
  }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      if (!barcodeData.cancelled) {
        this.dataLocal.guardarRegistro(barcodeData.format, barcodeData.text);
      }

    }).catch(err => {
      console.log('Error', err);
      this.dataLocal.guardarRegistro('QRCode', 'https://www.google.com');
    });
  }

}
