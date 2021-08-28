import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { Initialmodel } from './initialmodel';
import { InitialserviceService } from './initialservice.service';
import { ProjectsPage } from './projects/projects.page';

@Component({
  selector: 'app-initialpage',
  templateUrl: './initialpage.page.html',
  styleUrls: ['./initialpage.page.scss'],
})
export class InitialpagePage implements OnInit {
//  @Input() name: string;
  //@Input() descrip: string;

  initialservice: Initialmodel[];
  todolist: any;
  name: any;
  descrip: any;
  // eslint-disable-next-line max-len
  constructor( private initialService: InitialserviceService ,private activatedRoute: ActivatedRoute,private router: Router,private modalCtrl: ModalController
 ) {
this.todolist={ name: '', descrip: ''

    };
  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
   // this.todolist =this.initialService.getAllinitials();
  }
 //goAnOtherPage(){
   // this.router.navigate(['/initialpage/projects']);
  //}
  async goAnOtherPage(){
    this.router.navigate(['/initialpage/projects']);
  const modal =  await this.modalCtrl.create({
    component: ProjectsPage
  } );
  modal.onDidDismiss().then((data: any)=>{
    console.log(data);
    if(data)
    {
      this.name = data.data;
      this.descrip = data.role;
    }
  }
  );

    return await modal.present();
  }
  }
