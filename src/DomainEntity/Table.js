class Table {
    name;
    description;
    columns;
    #arrayForErrors=[];

    validateName(){
        if(this.name== undefined){
            this.#arrayForErrors.push("error: no value given to this.name");
        }
        else if(typeof this.name !== "string"){
                this.#arrayForErrors.push("error: invalid datatype of this.name")
            }
    }

    validateDescription(){
        if(this.description == undefined){
            this.#arrayForErrors.push("error: no value given to this.description")
        }
        else if(typeof this.description !== "string"){
                this.#arrayForErrors.push("error: invalid datatype of this.description")
            }
    }


    validateColumns(){
        if(Array.isArray(this.columns)=== true){
            if(this.columns.length==0){
                this.#arrayForErrors.push("error: this.columns array is empty");
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
            this.#arrayForErrors.push("error: invalid datatype, --Expected this.columns to be an array--")
        }
    }

    #validateDatatypes_for_validateColumns(numOfObjects, notObjects){
        var breakForLoop=true;
        if(numOfObjects.length == 0 && notObjects.length == 0){
            this.#arrayForErrors.push("error: this.columns array is empty")
        }//if numOfObjects and notObjects.length is equal to 0
        else if(numOfObjects.length==0){
            this.#arrayForErrors.push(`error: all elements of this.columns array are of invalid datatypes`)
        }//if numOfObjects is equal to 0
        else if(numOfObjects.length == this.columns.length){

            this.#loop_Through_Columns(numOfObjects);
            
        }//if variable named "numOfObjects" is equal to this.columns.length
        else{
            this.#arrayForErrors.push(`error: ${notObjects.length} elements of this.columns array are of invalid datatypes`)
            
            this.#loop_Through_Columns(numOfObjects);
        }
    }//#validateDatatypes_for_validateColumns(numOfObjects, notObjects)

    #loop_Through_Columns(numOfObjects){
        for(let i=0; i< numOfObjects.length; i++){
            
            if(this.columns[numOfObjects[i]].name == undefined && this.columns[numOfObjects[i]].type == undefined){

                this.#arrayForErrors.push(`error: both this.columns[${numOfObjects[i]}].name AND this.columns[${numOfObjects[i]}].type are undefined`)
                
            }//if this.columns[].name and this.column.type is undefined
            else if(this.columns[numOfObjects[i]].name == undefined){
                this.#arrayForErrors.push(`error: this.columns[${numOfObjects[i]}].name is undefined`)

                if(typeof this.columns[numOfObjects[i]].type !== "string"){
                    this.#arrayForErrors.push(`error: invalid datatype of this.columns[${numOfObjects[i]}].type, --Expected datatype is 'string'`)
                }//if datatype of this.columns[].type is not "string"

            }//if this.columns[].name is undefined
            else if(this.columns[numOfObjects[i]].type == undefined){
                this.#arrayForErrors.push(`error: this.columns[${numOfObjects[i]}].type is undefined`)

                if(typeof this.columns[numOfObjects[i]].name !== "string"){
                    this.#arrayForErrors.push(`error: invalid datatype of this.columns[${numOfObjects[i]}].name, --Expected datatype is 'string'`)
                }//if datatype of this.columns[].name is not "string"
            
            }//if this.columns[].type is undefined
            else{
                if(typeof this.columns[numOfObjects[i]].name !== "string" && typeof this.columns[numOfObjects[i]].type !== "string"){
                    this.#arrayForErrors.push(`error: invalid datatypes of this.columns[${numOfObjects[i]}].name AND this.columns[${numOfObjects[i]}].type, --Expected datatype is 'string'`)
                    
                }//if datatype of this.columns[].name AND datatype of this.columns[].type is not "string"
                else if(typeof this.columns[numOfObjects[i]].name !== "string"){
                    this.#arrayForErrors.push(`error: invalid datatype of this.columns[${numOfObjects[i]}].name, --Expected datatype is 'string'`)
                }//if datatype of this.columns[].name is not "string"
                else if(typeof this.columns[numOfObjects[i]].type !== "string"){
                    this.#arrayForErrors.push(`error: invalid datatype of this.columns[${numOfObjects[i]}].type, --Expected datatype is 'string'`)
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