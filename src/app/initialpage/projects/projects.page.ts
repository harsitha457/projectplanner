import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm,FormControl,Validators, FormControlName, FormGroup, MinValidator } from '@angular/forms';
import { InitialserviceService } from '../initialservice.service';
import { ModalController, NavController } from '@ionic/angular';
import { InitialpagePage } from '../initialpage.page';
import { InitialpagePageModule } from '../initialpage.module';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {
  @ViewChild('f') form: any;
 finaldata: any;
  data: any;
  isSubmitted = false;
  taskobject;
  ptitle: any;
  pdescrip: any;
  constructor(  private router: Router,public modalCtrl: ModalController) {
    this.data = {
      ptitle: '',
      pdescrip: ''
    };
    this.finaldata=this.data;
}
  ngOnInit(){
  }
 onSubmit(f) {
  console.log('onSubmit');
  console.log(f);
this.isSubmitted = true;
this.finaldata.ptitle = f.value.ptitle;
this.finaldata.pdescrip = f.value.pdescrip;
this.goToAboutPage();
}
//edit()
//{
  //this.router.navigate(['/initialpage']);
//}
 //async edit(){
  //const modal =  await this.modalCtrl.create({
  //component: InitialpagePage,
   //componentProps:{ name:this.finaldata.ptitle ,descrip:this.finaldata.pdescrip}
   //});
   //modal.onDidDismiss().then((data: any)=>{
    //this.finaldata = data;
  // }
   //);
  //return await modal.present();

// }

//this.modalCtrl.create({
  //  component: InitialpagePage,
    //componentProps: this.finaldata
//}).then(modalres =>{modalres.present();
  // modalres.onDidDismiss().then(res =>{if (res.data!=null){
   //  this.finaldata = this.data;
  // }});});
//

close()
{
  this.modalCtrl.dismiss(this.finaldata.ptitle,this.finaldata.pdescrip);
}
goToAboutPage()
{
  this.router.navigate(['/initialpage']);
}
}
