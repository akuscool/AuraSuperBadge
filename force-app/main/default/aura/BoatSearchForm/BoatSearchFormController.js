({
	createNewBoat : function(component, event, helper) {
        
        var createRecordEvent = $A.get("e.force:createRecord");
        var boatType = component.find("BoatTypeSelect").get("v.value");
        createRecordEvent.setParams({
            "entityApiName" : "Boat__c",
            "defaultFieldValues" :{
                'BoatType__c' : boatType
        }
            
        });
        
        createRecordEvent.fire();
		
	},
    
    doInit : function(component, event, helper) {
        
        var showButton = $A.get("e.force:createRecord");
        if(showButton != null){
            component.set("v.showButton", true);
        }
        
        helper.initBoatTypes(component);
    },
    
    onFormSubmit: function(component, event, helper) {
        
        var a = component.find("BoatTypeSelect").get("v.value");
        var data = {
            
            "boatTypeId" : a
        };
        var action = component.getEvent("formsubmit");
        action.setParams({
            
            "formData" : data
            
        });
       action.fire(); 
        
    }
})