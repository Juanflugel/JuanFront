angular.module('auxiliarFuctions', [])
.factory('auxiliarFuctions', handleInformationFunctions);

function handleInformationFunctions (){

    // reset the insert property to false in a collection
    var resetCollection = function(collection){
        var resetedCollection = [];
        _.each(collection,function (obj){
            obj.insert = false;
            resetedCollection.push(obj);
        });
        return resetedCollection;
    };
	// this is a function to ensure the csv files has all the properties it need to be consistent
	var normalizeData = function(collection){ 
        var readyForOrder = [];
        _.each(collection,function (obj){
                var orderObj = {};
                orderObj.itemCode = obj.itemCode;
                orderObj.itemName = obj.itemName || 'NONE';
                orderObj.itemType = obj.itemType || 'NONE';
                orderObj.itemProvider = obj.itemProvider || 'NONE';
                orderObj.itemAssemblyName = obj.itemAssemblyName || 'NONE';
                orderObj.itemAmount = obj.itemAmount;
                orderObj.remainingAmount = Math.abs(obj.remainingAmount) ;
                readyForOrder.push(orderObj);
        });   
        return readyForOrder;
    };


    return {
    	normalizeData :normalizeData,
        resetCollection : resetCollection 
    };
};