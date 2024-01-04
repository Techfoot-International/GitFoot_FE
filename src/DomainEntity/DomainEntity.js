class Domain{
    name;
    columns;
    methods;
    selectedTables;
    #arrayForErrors=[];

    validateName(){
        if(this.name ==undefined){
            this.#arrayForErrors.push("error: no value given to this.name");
        }
        else if(typeof this.name !== "string"){
            this.#arrayForErrors.push("error: invalid datatype of this.name")
        }
    }

    validateSelectedTables(){
        if(Array.isArray(this.selectedTables) != true){
            
            this.#arrayForErrors.push("error: expected this.selectedTables to be an array")
        
        }//if this.selectedTables is not an array 
        else if(this.selectedTables.length == 0){
            
            this.#arrayForErrors.push("error: this.selectedTables array is empty")

        }//if this.selected.length is equal to 0
        else{

            for(let i=0; i < this.selectedTables.length; i++){
                if(typeof this.selectedTables[i] !== "string"){
                    this.#arrayForErrors.push(`error: invalid datatype of this.selectedTables[${i}]`)
                }
            }
        }//else
    } //validateSelectedTables()

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

    validateMethods(){
        if(Array.isArray(this.methods)=== true){
            if(this.methods.length ==0){
                this.#arrayForErrors.push("error: this.methods array is empty")
            }//if this.methods.length is equal to 0
            else{
                var numOfObjects=[];
                var notObjects=[];
                for(let i=0; i < this.methods.length; i++){
                    if(typeof this.methods[i] == "object"){
                        numOfObjects.push(i);
                    }
                    else{
                        notObjects.push(i);
                    }     
                }//looping through this.methods[] for object

                this.#validateDatatypes_for_validateMethods(numOfObjects, notObjects)
            }//else
        }//if this.methods is an Array
        else{
            this.#arrayForErrors.push("error: invalid datatype, --Expected this.methods to be an array--")
        }
    }

   

    validate(){
        if(this.#arrayForErrors.length==0){
            return "--no errors are found--";
        }else{
            return this.#arrayForErrors;
        }
    }

    

    #validateDatatypes_for_validateMethods(numOfObjects, notObjects){
        
        if(numOfObjects.length == 0){
            this.#arrayForErrors.push("error: all elements of this.methods array are of invalid datatypes")
        }//if numOfObjects.length is equal to 0 
        else if(numOfObjects.length == this.methods.length){

            this.#loop_Through_Methods(numOfObjects);
                    
        }//if variable named "numOfObjects" is equal to this.methods.length
        else{
            this.#arrayForErrors.push(`error: ${notObjects.length} elements of this.methods array are of invalid datatypes`)
            
            this.#loop_Through_Methods(numOfObjects);
        }
    }

    #loop_Through_Methods(numOfObjects){
        
        for(let i=0; i< numOfObjects.length; i++){
            

            if(this.methods[numOfObjects[i]].name ==undefined && this.methods[numOfObjects[i]].returnType == undefined && this.methods[numOfObjects[i]].inputParams == undefined){
                this.#arrayForErrors.push(`error: all 3 this.methods[${numOfObjects[i]}].name, this.methods[${numOfObjects[i]}].returnType, and this.methods[${numOfObjects[i]}].inputParams are undefined`);
            }//if all 3 keys of this.methods are undefined
            else if(this.methods[numOfObjects[i]].name ==undefined && this.methods[numOfObjects[i]].returnType != undefined && this.methods[numOfObjects[i]].inputParams != undefined){
                this.#arrayForErrors.push(`error: this.methods[${numOfObjects[i]}].name is undefined`)
                if(typeof this.methods[numOfObjects[i]].returnType !== "string" && typeof this.methods[numOfObjects[i].inputParams !="object"]){
                    this.#arrayForErrors.push(`error: invalid datatypes of this.methods[${numOfObjects[i]}].returnType AND this.methods[${numOfObjects[i]}].inputParams`)
                }//if datatypes of this.methods[].return AND this.methods[].inputParams are invalid
                else if(typeof this.methods[numOfObjects[i]].returnType ==="string" && typeof this.methods[numOfObjects[i]].inputParams != "object"){
                    this.#arrayForErrors.push(`error: invalid datatype of this.methods[${numOfObjects[i]}].inputParams`)
                }//if datatype of this.methods[].inputParams is not invalid
                else if(typeof this.methods[numOfObjects[i]].returnType !== "string" && typeof this.methods[numOfObjects[i]].inputParams =="object"){
                    this.#arrayForErrors.push(`error: invalid datatype of this.methods[${numOfObjects[i]}].returnType`)
                }//if datatype of this.methods[].returnType is not invalid
            }//if this.methods[].name is undefined
            
            else if(this.methods[numOfObjects[i]].name ==undefined && this.methods[numOfObjects[i]].returnType == undefined && this.methods[numOfObjects[i]].inputParams != undefined){
                this.#arrayForErrors.push(`error: this,methods[${numOfObjects[i]}].name AND this.methods[${numOfObjects[i]}].returnType are undefined`)
                if(typeof this.methods[numOfObjects[i]].inputParams != "object"){
                    this.#arrayForErrors.push(`error: invalid datatype of this.methods[${numOfObjects[i]}].inputParams,--Expected this.methods.inputParams to be array--`)
                }//if datatype of this.methods[].inputParams is not valid
            }//if this.methods[].name AND this.methods[].returnType are undefined

            else if(this.methods[numOfObjects[i]].name !=undefined && this.methods[numOfObjects[i]].returnType == undefined && this.methods[numOfObjects[i]].inputParams == undefined){
                this.#arrayForErrors.push(`error: this.methods[${numOfObjects[i]}].returnType AND this.methods[${numOfObjects[i]}].inputParams are undefined`)
                if(typeof this.methods[numOfObjects[i]].name !=="string"){
                    this.#arrayForErrors.push(`error: invalid datatype of this.methods[${numOfObjects[i]}].name`)
                }//if datatype of this.methods[].name is "string"
            }//if this.methods[].returnType AND this.methods[].inputParams are undefined

            else if(this.methods[numOfObjects[i]].name !=undefined && this.methods[numOfObjects[i]].returnType != undefined && this.methods[numOfObjects[i]].inputParams == undefined){
                this.#arrayForErrors.push(`error: this,methods[${numOfObjects[i]}].inputParams is undefined`)
                
                if(typeof this.methods[numOfObjects[i]].name !== "string" && this.methods[numOfObjects[i]].returnType !=="string"){
                    this.#arrayForErrors.push(`error: invalid datatype of this.methods[${numOfObjects[i]}].name AND this.methods[${numOfObjects[i]}].returnType`)
                
                }//if datatype of this.methods[].name AND this.methods[].returnType is "string"
                else if(typeof this.methods[numOfObjects[i]].name ==="strings" && this.methods[numOfObjects[i]].returnType !=="string"){
                    this.#arrayForErrors.push(`error: invalid datatype of this.methods[${numOfObjects[i]}].returnType, --Expected datatype is 'sting'`)
                }//if datatype of this.methods[].returnType is not "string"
                else if(typeof this.methods[numOfObjects[i]].name !== "string" && this.methods[numOfObjects[i]].returnType ==="string"){
                    this.#arrayForErrors.push(`error: invalid datatype of this.methods[${numOfObjects[i]}].name`)
                }//if datatype of this.methods[].name is not string
            }//if this.methods[].inputParams is undefined
            
            else if(this.methods[numOfObjects[i]].name !=undefined && this.methods[numOfObjects[i]].returnType == undefined && this.methods[numOfObjects[i]].inputParams != undefined){
                this.#arrayForErrors.push(`error: this.methods[${numOfObjects[i]}].returnType is undefined`)
                if(typeof this.methods[numOfObjects[i]].name !== "string" && typeof this.methods[numOfObjects[i]].inputParams !="object"){
                    this.#arrayForErrors.push(`error: invalid datatypes of this.methods[${numOfObjects[i]}].name AND this.methods[${numOfObjects[i]}].inputParams`)
                }//if datatypes of this.methods[].name AND this.methods[].inputParams are invalid
                else if(typeof this.methods[numOfObjects[i]].name ==="string" && typeof this.methods[numOfObjects[i]].inputParams !="object"){
                    this.#arrayForErrors.push(`error: invalid datatype of this.methods[${numOfObjects[i]}].inputParams, --Expected this.methods.inputParams to be an array`)
                }//if datatype of this.methods[].inputParams is invalid
            }//if this.methods[].returnType is undefind
            
            else if(this.methods[numOfObjects[i]].name ==undefined && this.methods[numOfObjects[i]].returnType != undefined && this.methods[numOfObjects[i]].inputParams == undefined){
                this.#arrayForErrors.push("error: this.methods[].name AND this.methods[].inputParams are undefined")
                if(typeof this.methods[numOfObjects[i]].returnType !== "string"){
                    this.#arrayForErrors.push(`error: invalid datatype of this.methods[${numOfObjects[i]}].returnType`)
                }
            }//if this.methods[].name AND this.methods[].inputParams are undefined
            else{
                this.#methods_keys_datatypes(numOfObjects,i);
            }
                 
        }//looping through this.methods[] for dataTypes of keys in objects
    }

    #methods_keys_datatypes(numOfObjects, i){
        if(typeof this.methods[numOfObjects[i]].name !== "string" && typeof this.methods[numOfObjects[i]].returnType !=="string" && typeof this.methods[numOfObjects[i]].inputParams != "object"){
            this.#arrayForErrors.push(`error: invalid datatypes of this.methods[${numOfObjects[i]}].name, this.methods[${numOfObjects[i]}].returnType, and this.methids[${numOfObjects[i]}].inputParams`)
        }//if datatypes of all 3 keys of this.methods are invalid
        else if(typeof this.methods[numOfObjects[i]].name === "string" && typeof this.methods[numOfObjects[i]].returnType !=="string" && typeof this.methods[numOfObjects[i]].inputParams != "object"){
            this.#arrayForErrors.push(`error: invalid datatypes of this.methods[${numOfObjects[i]}].returnType, this,methods[${numOfObjects[i]}].inputParams`)
        }//if datatypes of this.methods[].returnType AND this.methods[].inputParams are invalid
        else if(typeof this.methods[numOfObjects[i]].name === "string" && typeof this.methods[numOfObjects[i]].returnType =="string" && typeof this.methods[numOfObjects[i]].inputParams != "object"){
            this.#arrayForErrors.push(`error: invalid datatype of this.methods[${numOfObjects[i]}].inputParams, --Expected this.method.inputParams to be an array--`)
        }//if datatype of this.methods[].inputParams is invalid
        else if(typeof this.methods[numOfObjects[i]].name !== "string" && typeof this.methods[numOfObjects[i]].returnType !=="string" && typeof this.methods[numOfObjects[i]].inputParams == "object"){
            this.#arrayForErrors.push(`error: invalid datatype of this.methods[${numOfObjects[i]}].name AND this.methods[${numOfObjects[i]}].returnType, --Expected datatype is string--`)

            this.#loop_Through_inputParamsAndMore(numOfObjects, i);

        }//if datatypes of this.methods[].name AND this.methods[].returnType are invalid
        else if(typeof this.methods[numOfObjects[i]].name !== "string" && typeof this.methods[numOfObjects[i]].returnType ==="string" && typeof this.methods[numOfObjects[i]].inputParams == "object"){
            this.#arrayForErrors.push(`error: invalid datatype of this.methods[${numOfObjects[i]}].name, --Expected datatype is string--`)
        
            this.#loop_Through_inputParamsAndMore(numOfObjects, i);
        
        }//if datatype of this.methods[].name is invalid
        else if(typeof this.methods[numOfObjects[i]].name !== "string" && typeof this.methods[numOfObjects[i]].returnType ==="string" && typeof this.methods[numOfObjects[i]].inputParams != "object"){
            this.#arrayForErrors.push(`error: invalid datatypes of this.methods[${numOfObjects[i]}].name AND this.methods[${numOfObjects[i]}].inputParams`)
        }//if datatypes of this.methods[].name AND this.methods[].inputParams are invalid
        else if(typeof this.methods[numOfObjects[i]].name === "string" && typeof this.methods[numOfObjects[i]].returnType !=="string" && typeof this.methods[numOfObjects[i]].inputParams == "object"){
            this.#arrayForErrors.push(`error: invalid datatype of this.method[${numOfObjects[i]}].returnType, --Expected datatype is string--`)
        
            this.#loop_Through_inputParamsAndMore(numOfObjects, i);
        
        }//if datatype of this.methods[].returnType is invalid
        else if(typeof this.methods[numOfObjects[i]].name === "string" && typeof this.methods[numOfObjects[i]].returnType ==="string" && typeof this.methods[numOfObjects[i]].inputParams == "object"){
            this.#loop_Through_inputParamsAndMore(numOfObjects, i);
        }//if all 3 keys of this.methods[] are of valid datatypes
   
    }//#methods_keys_datatypes(numOfObjects, i)

    #loop_Through_inputParamsAndMore(numOfObjects, i){

        if(Array.isArray(this.methods[numOfObjects[i]].inputParams) == true){
            if(this.methods[numOfObjects[i]].inputParams.length ==0){
                this.#arrayForErrors.push(`error: this.methods[${numOfObjects[i]}].inputParams array is empty`)
            }
            else{
                var TotalObjects=[];
                var notObjects=[];

                for(let k=0; k < this.methods[numOfObjects[i]].inputParams.length; k++){
                    if(typeof this.methods[numOfObjects[i]].inputParams[k] =="object"){
                        TotalObjects.push(k);
                    }//if datatype of this.methods[].inputParams[] is an object
                    else{
                        notObjects.push(k);
                    }
                }//looping through this.mehtods.inputParam[] to chack if all of it's elements are objects.

                if(TotalObjects.length ==0){
                    this.#arrayForErrors.push(`error: all elements of this.methods[${numOfObjects[i]}].inputPrams array are invalid`)
                }
                else if(TotalObjects.length == this.methods[numOfObjects[i]].inputParams.length){
                    
                    this.#loop_Through_inputParams_Repetition(numOfObjects, i, TotalObjects);/////////CALLED loop_Through_inputParams_repetition()
                    
                }//if TotalObjects.length is equal to this.methods[].inputParams.length.
                else{
                    this.#arrayForErrors.push(`error: ${notObjects.length} elements in this.methods[${numOfObjects[i]}].inputParams array are of invalid datatypes`)
                    this.#loop_Through_inputParams_Repetition(numOfObjects, i, TotalObjects);
                }//else
                }
        
        }//if this.methods.inputParams is an array 
        else{
            this.#arrayForErrors.push(`error: invalid datatype of this.methods[${numOfObjects[i]}].inputParams, --Expected this.methods.inputParams to be an array--`)
        }
    }//#loop_Through_inputParamsAndMore(numOfObjects, i)

    #loop_Through_inputParams_Repetition(numOfObjects, i, TotalObjects){
        for(let x=0;x < TotalObjects.length; x++){
                    
            if(this.methods[numOfObjects[i]].inputParams[TotalObjects[x]].name == undefined && this.methods[numOfObjects[i]].inputParams[TotalObjects[x]].type == undefined){
                this.#arrayForErrors.push(`error: both this.methods[${numOfObjects[i]}].inputParams[${TotalObjects[x]}].name AND this.methods[${numOfObjects[i]}].inputParams[${TotalObjects[x]}].type are undefined`)
            }//if this.methods[].inputParams.name AND this.methods[].type is undefined
            
            else if(this.methods[numOfObjects[i]].inputParams[TotalObjects[x]].name != undefined && this.methods[numOfObjects[i]].inputParams[TotalObjects[x]].type ==undefined){
                this.#arrayForErrors.push(`error: this.methods[${numOfObjects[i]}].inputParams[${TotalObjects[x]}].type is undefined`)
                if(typeof this.methods[numOfObjects[i]].inputParams[TotalObjects[x]].name !="strings"){
                    this.#arrayForErrors.push(`error: invalid datatype of this.methods[${numOfObjects[i]}].inputParams[${TotalObjects[x]}].name`)
                }//if datatype of this.methods[].inputParams[].name is invalid
           
            }//if this.methods[].inputParams[].type is undefined
            else if(typeof this.methods[numOfObjects[i]].inputParams[TotalObjects[x]].name != undefined && typeof this.methods[i].inputParams[TotalObjects[x]].type != undefined){

                if(typeof this.methods[numOfObjects[i]].inputParams[TotalObjects[x]].name !== "string" && typeof this.methods[numOfObjects[i]].inputParams[TotalObjects[x]].type !== "string"){
                    this.#arrayForErrors.push(`error: invalid datatypes of this.methods[${numOfObjects[i]}].inputParams[${TotalObjects[x]}].name AND this.methods[${numOfObjects[i]}].inputParams[${TotalObjects[x]}].type, --Expected datatype is 'string'--`)
                }//if datatype of this.methods[].inputParams[].namd AND this.methods[].inputParams[].type is invalid
                else if(typeof this.methods[numOfObjects[i]].inputParams[TotalObjects[x]].name === "string" && typeof this.methods[numOfObjects[i]].inputParams[TotalObjects[x]].type !== "string"){
                    this.#arrayForErrors.push(`error: invalid datatype of this.methods[${numOfObjects[i]}].inputParams[${TotalObjects[x]}].type, --Expected datatype is 'string'--`)
                }//if datatype of this.methods[].inputParams[].type is invalid
                else if(typeof this.methods[numOfObjects[i]].inputParams[TotalObjects[x]].name !=="string" && typeof this.methods[numOfObjects[i]].inputParams[TotalObjects[x]].type ==="string"){
                    this.#arrayForErrors.push(`error: invalid datatype of this.methods[${numOfObjects[i]}].inputParams[${TotalObjects[x]}].name, --Expected datatype is 'string'--`)
                }//if datatype of this.methods[].inputParams[].name is invalid

            }//if this.methods[].inputParams[].name OR this.methods[].inputParams[].type has datatype of string.
        
        }//forloop
    }//#loop_Through_inputParams_Repetition(numOfObjects, i, TotalObjects)


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


    
}