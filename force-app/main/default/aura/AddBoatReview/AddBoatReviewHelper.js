({
	OnInit : function(component, event) {
        
        component.find("service").getNewRecord(
        "BoatReview__c",
            null,
            false,
            $A.getCallback(function(){
                var rec = component.get("v.boatReview");
                var error = component.get("v.recordError");
                if(error || (rec === null)){
                    console.log("Error in record template initializing : " + error);
                    return;
                }
               rec.Boat__c = component.get("v.boat").Id;
               component.set("v.boatReview",rec);
                
            })
        );
		
	}
})