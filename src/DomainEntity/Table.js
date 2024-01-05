class Table {
    name;
    description;
    columns;
    #arrayForErrors=[];

    validateName(){
        if(this.name== undefined){
            this.#arrayForErrors.push("error: no value given to 'name'");
        }
        else if(typeof this.name !== "string"){
                this.#arrayForErrors.push("error: 'name' has invalid datatype")
            }
    }

    validateDescription(){
        if(this.description == undefined){
            this.#arrayForErrors.push("error: no value given to 'description'")
        }
        else if(typeof this.description !== "string"){
                this.#arrayForErrors.push("error: 'description' has invalid datatype")
            }
    }


    validateColumns(){
        if(Array.isArray(this.columns)=== true){
            if(this.columns.length==0){
                this.#arrayForErrors.push("error: 'columns' array is empty");
            }//if this.columns.length is equal to 0 
            else{
                var numOfObjects=[];
                var notObjects=[];
                for(let i=0; i < this.columns.length; i++){
                    if(typeof this.columns[i]== "object"){
                        numOfObjects.push(i); //storing this,columns array indexes where there's an object.
                    }
                    else{
                        notObjects.push(i); //storing this.columns array indexes where there isn't an object
                    }
                }//looping through this.columns[] for object

                this.#validateDatatypes_for_validateColumns(numOfObjects,notObjects)
            }//else
        }//if this.columns is an Array
        else{
            this.#arrayForErrors.push("error: 'columns' should be an array")
        }
    }

    #validateDatatypes_for_validateColumns(numOfObjects, notObjects){
        
        if(numOfObjects.length==0){
            this.#arrayForErrors.push(`error: all elements of 'columns' array have invalid datatypes`)
        }//if numOfObjects is equal to 0
        else if(numOfObjects.length == this.columns.length){

            this.#loop_Through_Columns(numOfObjects);
            
        }//if variable named "numOfObjects" is equal to this.columns.length
        else{
            this.#arrayForErrors.push(`error: ${notObjects.length} elements of 'columns' array have invalid datatypes`)
            
            this.#loop_Through_Columns(numOfObjects);
        }
    }//#validateDatatypes_for_validateColumns(numOfObjects, notObjects)

    #loop_Through_Columns(numOfObjects){

        for(let i=0; i< numOfObjects.length; i++){
            
            if(this.columns[numOfObjects[i]].name == undefined && this.columns[numOfObjects[i]].type == undefined){

                this.#arrayForErrors.push(`error: 'columns[${numOfObjects[i]}].name' AND 'columns[${numOfObjects[i]}].type' are undefined`)
                
            }//if this.columns[].name and this.column.type is undefined
            else if(this.columns[numOfObjects[i]].name == undefined){
                this.#arrayForErrors.push(`error: 'columns[${numOfObjects[i]}].name' is undefined`)

                if(typeof this.columns[numOfObjects[i]].type !== "string"){
                    this.#arrayForErrors.push(`error: 'columns[${numOfObjects[i]}].type' has invalid datatype`)
                }//if datatype of this.columns[].type is not "string"

            }//if this.columns[].name is undefined
            else if(this.columns[numOfObjects[i]].type == undefined){
                this.#arrayForErrors.push(`error: 'columns[${numOfObjects[i]}].type' is undefined`)

                if(typeof this.columns[numOfObjects[i]].name !== "string"){
                    this.#arrayForErrors.push(`error: 'columns[${numOfObjects[i]}].name' has invalid datatype`)
                }//if datatype of this.columns[].name is not "string"
            
            }//if this.columns[].type is undefined
            else{
                if(typeof this.columns[numOfObjects[i]].name !== "string" && typeof this.columns[numOfObjects[i]].type !== "string"){
                    this.#arrayForErrors.push(`error: 'columns[${numOfObjects[i]}].name' AND 'columns[${numOfObjects[i]}].type' have invalid datatypes`)
                    
                }//if datatype of this.columns[].name AND datatype of this.columns[].type is not "string"
                else if(typeof this.columns[numOfObjects[i]].name !== "string"){
                    this.#arrayForErrors.push(`error: 'columns[${numOfObjects[i]}].name' has invalid datatype`)
                }//if datatype of this.columns[].name is not "string"
                else if(typeof this.columns[numOfObjects[i]].type !== "string"){
                    this.#arrayForErrors.push(`error: 'columns[${numOfObjects[i]}].type' has invalid datatype`)
                }//else
            }//else
        }//looping through this.columns[] for dataTypes of keys in objects
    }//#loop_Through_Columns(numOfObjects)


    validate(){
        if(this.#arrayForErrors.length!=0){
            return this.#arrayForErrors;
        }
    }

}