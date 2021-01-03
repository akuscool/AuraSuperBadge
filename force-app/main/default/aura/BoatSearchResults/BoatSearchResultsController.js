({
	doInit : function(component, event, helper) {
        //component.set("v.")
		//helper.onSearch(component);
		//
		var b;
		var action = component.get("c.getBoats");
        action.setParams({
            "boatTypeId" : ''
        });
        
        action.setCallback(this, function(response){
        var state= response.getState();
            console.log(state);
           console.log(response.getReturnValue);
            console.log(response);
        if(state==="SUCCESS")
        {
            console.log("success");
            component.set("v.boat", response.getReturnValue());
            
        } else {
                        console.log("Error");
            component.set("v.resultsNotFound", true);
            
        }
                           
                           });
        $A.enqueueAction(action);
	},
    doSearch : function(component, event, helper) {
        var params = event.getParam('arguments');
        //alert("from Boat Search Result. "+ params.boatTypeId);
        component.set("v.boatTypeIdentifier", params.boatTypeId);
		helper.onSearch(component);
	},
    onBoatSelect : function(component, event, helper){
        var boatId = event.getParam("boatId");
        alert('boat Id from BoatSearch Controller. ' + boatId);
        component.set("v.selectedBoatId", boatId);
    }
})