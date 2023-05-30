describe('The findItemsOver20 function' , function(){
    it('it should return an array that matches "results" when called with the array "itemList".' , function(){
        assert.deepEqual(results, findItemsOver20(itemList));
    });

    it('it should return an array that matches "results2" when called with the array "itemList2".' , function(){
        assert.deepEqual(results2, findItemsOver20(itemList2));
    });

    it('it should return an array that matches "results3" when called with the array "itemList3".' , function(){
        assert.deepEqual(results3, findItemsOver20(itemList3));
    });


});