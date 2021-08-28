import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Initialmodel } from '../initialmodel';
import { InitialserviceService } from '../initialservice.service';
@Component({
  selector: 'app-initial-detail',
  templateUrl: './initial-detail.page.html',
  styleUrls: ['./initial-detail.page.scss'],
})
export class InitialDetailPage implements OnInit {
  loadedinitial: Initialmodel;

  constructor(private activatedRoute: ActivatedRoute ,
     private initialservice: InitialserviceService,
     private router: Router,
     private alertCtrl: AlertController  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('initialId')) {
        // redirect
        this.router.navigate(['/initialpage']);
        return;
      }
      const recipeId = paramMap.get('initialId');
      this.loadedinitial = this.initialservice.getinitial(recipeId);
    });
  }
onDeleteinitial() {
  this.alertCtrl.create({header: 'Are you sure ?', message: 'Do you really want to delete the project?',
  buttons: [{
    text: 'Cancel',
    role: 'cancel'
  },{
    text: 'Delete',
    handler: () => {
      this.initialservice.deleteinitial(this.loadedinitial.id);
      this.router.navigate(['/initialpage']);
    }
  }

  ] }).then(alertEl => {
    alertEl.present();
  });
  this.initialservice.deleteinitial(this.loadedinitial.id);
  this.router.navigate(['/initialpage']);
}

}
