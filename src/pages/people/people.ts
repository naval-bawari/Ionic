import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {PeopleService} from '../../providers/people-service/people-service';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
 
 
/**
 * Generated class for the PeoplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html'
})

export class PeoplePage {

  public myString:any;	
  public people : any;	
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public loadingCtrl: LoadingController) {
	  //this.loadPeople();
	  
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();	  
	  
	this.http.get('https://randomuser.me/api/?results=10').map(res => res.json()).subscribe(data => {
        this.people = data.results;
		console.log(this.people);
		loader.dismiss();
		
    });
	this.myString="Naval";
	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeoplePage');
  }

}
