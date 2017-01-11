angular.module('auxiliarFuctions', [])
.factory('auxiliarFuctions', handleInformationFunctions);

function handleInformationFunctions (){
    // 
    var getJustCodes = function(collection){
            var codeCol = [];
            _.each(collection,function (obj){
                var a = obj.itemCode;
                codeCol.push(a);
            });
            return codeCol;
    };

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

     var addResumeInsertedAndPending = function(colStock,colResume){ // to show the total assmebled and  pending amounts to be assembled in open projects 
            
            var objsWithResumedAmounts = [];
            _.each(colStock,function (stockObj){
                _.each(colResume,function (resumeObj) {
                    if(resumeObj.itemCode === stockObj.itemCode){
                        stockObj.totalPendingAmount = resumeObj.totalPendingAmount || 0;
                        stockObj.insertedAmount = resumeObj.insertedAmount || 0;
                        stockObj.neto = stockObj.itemAmount - stockObj.totalPendingAmount;
                        objsWithResumedAmounts.push(stockObj);
                    }
                });

                if(!stockObj.totalPendingAmount && !stockObj.insertedAmount){
                  stockObj.totalPendingAmount = 0;
                  stockObj.insertedAmount = 0;
                  stockObj.neto = stockObj.itemAmount - stockObj.totalPendingAmount;
                  objsWithResumedAmounts.push(stockObj);
                }                
            });
    };

    return {
    	normalizeData :normalizeData,
        resetCollection : resetCollection,
        addResumeInsertedAndPending :addResumeInsertedAndPending,
        getJustCodes:getJustCodes
    };
};