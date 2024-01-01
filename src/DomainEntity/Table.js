class Table {
    name;
    type;
    properties;

    validateName(){
        if(typeof this.name === "string"){
            return true;
        }else{
            return false;
        }
    }

    validateType(){
        if(typeof this.type === "string"){
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

            var funcReturnedVal=this.#validateDatatypes(numOfObjects)
            return funcReturnedVal;

        }//if this.properties is an Array
        else{
            return false;
        }
    }

    #validateDatatypes(numOfObjects){
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

}
