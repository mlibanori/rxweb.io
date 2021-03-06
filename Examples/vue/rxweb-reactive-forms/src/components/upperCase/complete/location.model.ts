import {  upperCase, } from   "@rxweb/reactive-forms"   

export class Location {

	@upperCase() 
	countryName: string;
	
	
	//If you want to apply conditional expression of type 'function'
	@upperCase({conditionalExpression:(x,y) => x.countryName == "INDIA"  }) 
	stateName: string;
	
	
	//If you want to apply conditional expression of type 'string'
	@upperCase({conditionalExpression:'x => x.countryName == "INDIA"' }) 
	cityName: string;
	
	
	//Shows custom message
	@upperCase({message:'You can enter only upperCase letters.' }) 
	colonyName: string;
	
	
	@upperCase({messageKey:'upperCaseMessageKey' }) 
	streetName: string;
	
	
}
