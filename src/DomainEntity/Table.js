class Table {
    name;
    type;
    properties;

    validateName(){
        if(typeof this.name === "string"){
            return true;
        }
    }

    validateType(){
        if(typeof this.type === "string"){
            return true;
        }
    }
    
    validateProperties(){
        if(Array.isArray(this.properties)=== true){
            
            var length=0;
            for(let i=0; typeof this.properties[i]== "object"; i++){
                length++;
            }//looping through this.properties[] for object

            var keep=this.#validateDatatypes(length)
            return keep;

        }//if this.properties is an Array
    }

    #validateDatatypes(length){
        if(length == this.properties.length){
            var theObject;
            for(let i=0; i< length; i++){
                theObject=this.properties[i];
                if(typeof theObject.name !== "string" || typeof theObject.type !== "string"){
                    return undefined;
                }
            }//looping through this.properties[] for dataTypes of keys in objects
            return true;
        }//if variable named "length" is equals to this.properties.length
    }

}
