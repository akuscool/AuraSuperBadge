public with sharing class BoatSearchResults {

    @AuraEnabled
    public static List<BoatType__c> showBoatTypesResults(){
        
        List<BoatType__c> boatTypeList = new List<BoatType__c>();
        boatTypeList = [SELECT Id,Name FROM BoatType__c];
        System.debug(boatTypeList);
       // return [SELECT Id,Name FROM BoatType__c];
       return boatTypeList;
    }
    
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        
        System.debug(boatTypeId);
        System.debug('Is blank  '+String.isBlank(boatTypeId));
        if(String.isBlank(boatTypeId)){
            System.debug('1');
            List<Boat__c> boatListAll = new List<Boat__c>();
       		boatListAll = [Select Id,Name,BoatType__c,Contact__c,Picture__c from Boat__c];
        	System.debug(boatListAll);

            //System.debug([Select id,name,BoatType__c,Contact__c,Description__c,Geolocation__c,Length__c,Picture__c,Price__c,Year_Built__c from Boat__c]);
        	//return [Select id,name,BoatType__c,Contact__c,Description__c,Geolocation__c,Length__c,Picture__c,Price__c,Year_Built__c from Boat__c];
        	return boatListAll;
        }
        else {
                        System.debug('2');
            List<Boat__c> boatListAllFiltered = new List<Boat__c>();
            boatListAllFiltered = [Select Id,Name,BoatType__c,Contact__c,Picture__c from Boat__c where BoatType__c=:boatTypeId];
        	System.debug(boatListAllFiltered);
        	//return [Select id,name,BoatType__c,Contact__c,Description__c,Geolocation__c,Length__c,Picture__c,Price__c,Year_Built__c from Boat__c where BoatType__c=:boatTypeId ];
        	//
        	return boatListAllFiltered;

           }
    }
    

}