//Word Handling Module

var wordHandler = (function () { 
    // ... all vars and functions are in this scope only 
    // still maintains access to all globals

    var my = {}, 
        privateVariable = 1; 
     
    function test() { 
        privateVariable +=1;
        return privateVariable;
    } 
     
    my.moduleProperty = 1; 
    my.test2 = function () { 
        privateVariable +=1;
        return privateVariable;
    }; 
    my.test3 = function () { 
        my.moduleProperty +=1;
        return my.moduleProperty; 
    }; 
     
    return my; 
     
}());