class Domain{
    name;
    properties;
    methods;
    selectedTables;

    validateName(){
        if(typeof this.name === "string"){
            return true;
        }else{
            return false;
        }
    }

    validateProperties(){
        if(Array.isArray(this.properties)=== true){
            
            var numOfObjects=0;
            for(let i=0; typeof this.properties[i]== "object" && i < this.properties.length; i++){
                numOfObjects++;
            }//looping through this.properties[] for object

            var funcReturnedVal=this.#validateDatatypes_for_validateProperties(numOfObjects)
            return funcReturnedVal;

        }//if this.properties is an Array
        else{
            return false;
        }
    }

    validateMethods(){
        if(Array.isArray(this.methods)=== true){
            
            var numOfObjects=0;
            for(let i=0; typeof this.methods[i]== "object" && i < this.methods.length; i++){
                numOfObjects++;
            }//looping through this.methods[] for object

            var funcReturnedVal = this.#validateDatatypes_for_validateMethods(numOfObjects)
            return funcReturnedVal;

        }//if this.methods is an Array
        else{
            return false;
        }
    }

    validateSelectedTables(){
        if(Array.isArray(this.selectedTables) != true){
            
            return false;
        
        }else if(this.selectedTables.length == 0){
            
            return false;

        }else{

            for(let i=0; i < this.selectedTables.length; i++){
                if(typeof this.selectedTables[i] !== "string"){
                    return false;
                }
            }
            return true;
        }
    }

    #validateDatatypes_for_validateProperties(numOfObjects){
        if(numOfObjects ==0){
            return false;
        }else if(numOfObjects == this.properties.length){
                    for(let i=0; i< numOfObjects; i++){
                        if(typeof this.properties[i].name !== "string" || typeof this.properties[i].type !== "string"){
                            return false;
                        }
                    }//looping through this.properties[] for dataTypes of keys in objects
                    return true;
                }//if variable named "numOfObjects" is equals to this.properties.length
                else{
                    return false;
                }
    }

    #validateDatatypes_for_validateMethods(numOfObjects){
        if(numOfObjects ==0){
            return false;
        }else if(numOfObjects == this.methods.length){
            var numOfObjects_methods= numOfObjects;
            
                    for(let i=0; i< numOfObjects_methods; i++){
                        if(typeof this.methods[i].name !== "string" || typeof this.methods[i].returnType !== "string" || Array.isArray(this.methods[i].inputParams) != true){
                            return false;
                        }//if this.methods[].name has not "string datatype" OR this.methods[].inputParams is not an array.
                        
                        numOfObjects=0;

                        for(let k=0; typeof this.methods[i].inputParams[k]== "object" && k < this.methods[i].inputParams.length; k++){
                            numOfObjects++;
                        }//looping through this.mehtods.inputParam[] to chack if all of it's elements are objects.

                        if(numOfObjects==0){
                            return false;
                        }else if(numOfObjects == this.methods[i].inputParams.length){
                            
                            for(let x=0;x < numOfObjects; x++){
                                if(typeof this.methods[i].inputParams[x].name !== "string" || typeof this.methods[i].inputParams[x].type !== "string"){
                                    return false;
                                }//if this.methods[].inputParams[].name OR this.methods[].inputParams[].type has datatype of string.
                            }//forloop
                            
                        }//if numOfObjects is equal to this.methods[].inputParams.length.
                        else{
                            return false;
                        }

                    }//looping through this.methods[] for dataTypes of keys in objects
                    return true;
                }//if variable named "numOfObjects" is equal to this.methods.length
                else{
                    return false;
                }
    }
}
