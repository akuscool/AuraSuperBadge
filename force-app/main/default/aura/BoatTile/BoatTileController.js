({
	dofunc : function(component, event, helper) {
        alert('picture URL.  ');
		alert(component.get("v.boat.Picture__c"));
	},
    
    onBoatClick : function(component, event, helper){
        
		var eventName = component.getEvent("BoatSelect");
        //alert('selected boat id. ' +component.get("v.boat.Id") );
        eventName.setParams({
            "boatId" : component.get("v.boat.Id")
        });
        eventName.fire();
        
        //var eventSelected = component.getEvent("BoatSelected");
        var eventSelected = $A.get("e.c:BoatSelected")
        eventSelected.setParams({
            "boat" : component.get("v.boat")
        });
        //alert('from Boat tile firing the event. '+component.get("v.boat"));
        eventSelected.fire();
        
        var mapEvent = $A.get("e.c:PlotMapMarker");
        mapEvent.setParams({
            "sObjectId" : component.get("v.boat.Id"),
            "lat" : component.get("v.boat.Geolocation__Latitude__s"),
            "long" : component.get("v.boat.Geolocation__Longitude__s"),
            "label" : component.get("v.boat.Name")
        });
        mapEvent.fire();
        
    }
})