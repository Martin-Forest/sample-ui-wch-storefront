import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StoreLocatorService } from '../../commerce/services/rest/transaction/storeLocator.service';

@Component({
	selector: 'store-locator',
	styleUrls: ['./storeLocator.scss'],
	templateUrl: './storeLocator.html'
})
export class StoreLocatorComponent {
	 msg:string;
	 Stores: Store[];

	constructor(private route: ActivatedRoute, private router: Router, private storeLocatorSvc: StoreLocatorService) {
		this.msg = "";
	}

	click(city:any) {
		console.log("...enter: click(): parameters:", city);
		//this.wcsResponse="";
		let parameters = {
			'storeId': '10201',
			'siteLevelStoreSearch':'false',
			'city': city
		};
		this.storeLocatorSvc.findGeoNodeByGeoLocation(parameters).toPromise()
			.then( response => 
				this.msg = response.body.PhysicalStore );
		//this.prepareResult(this.wcsResponse);
		console.log("...exit: click(): ");
	}

	getStores(city:any) {
		console.log("...enter: getStores(): parameters:", city);
		//this.wcsResponse = "";
		let parameters = {
			'storeId': '10201',
			'siteLevelStoreSearch':'false',
			'city': city
		};
		this.storeLocatorSvc.findGeoNodeByGeoLocation(parameters).toPromise()
			.then( response => 
				this.msg = response.body.PhysicalStore );
		//this.prepareResult(this.wcsResponse);
		console.log("...exit: getStores(): ");
		return false;		
	}


	prepareResult(resultList:any) {
		console.log("resultList : ", resultList);
	}

}

interface Store {
	name:string;
	addressLine:string;
	city:string;
	state:string;
	country:string;
	zipcode:string;
	telephone:string;
	hours:string
}
