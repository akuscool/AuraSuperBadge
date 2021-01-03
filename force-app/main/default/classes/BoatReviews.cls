public with sharing class BoatReviews {

	@AuraEnabled
    public static List<BoatReview__c> getAll(Id boatId){
        
        return [Select Id,Name,Comment__c,Rating__c FROM BoatReview__c where Boat__c = :boatId];
        //return [Select Id,Name,Comment__c,Rating__c,LastModifiedDate,CreatedDate,CreatedBy.Name,CreatedBy.SmallPhotoUrl,CreatedBy.CompanyName FROM BoatReview__c where Boat__c = :boatId];
    }    
}