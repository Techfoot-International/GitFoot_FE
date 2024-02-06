class Domain{
    name;
    properties;
    methods;
    #arrayForErrors=[];
    
    constructor(name, properties, methods){
        this.name=name;
        this.properties=properties;
        this.methods=methods;
    }

    validateName(){
        if(this.name ==undefined){
            this.#arrayForErrors.push("error: no value given to 'name'");
        }
        else if(typeof this.name !== "string"){
            this.#arrayForErrors.push("error: 'name' has invalid datatype")
        }
    }


    validateProperties(){
        if(this.properties==undefined){
            this.#arrayForErrors.push("error: no value given to 'properties'")
        }
        else if(Array.isArray(this.properties)=== true){
            if(this.properties.length==0){
                this.#arrayForErrors.push("error: 'properties' array is empty");
            }//if this.properties.length is equal to 0 
            else{
                var numOfObjects=[];
                var notObjects=[];
                for(let i=0; i < this.properties.length; i++){
                    if(typeof this.properties[i]== "object"){
                        numOfObjects.push(i); //storing this,properties array indexes where there's an object.
                    }
                    else{
                        notObjects.push(i); //storing this.properties array indexes where there isn't an object
                    }
                }//looping through this.properties[] for object
               
                this.#validateDatatypes_for_validateProperties(numOfObjects,notObjects)
            }//else
        }//if this.properties is an Array
        else{
            this.#arrayForErrors.push("error: 'properties' has invalid datatype")
        }
    }// validateProperties()

    validateMethods(){
        if(this.methods==undefined){
            this.#arrayForErrors.push("error: no value given to 'methods'")
        }
        else if(Array.isArray(this.methods)=== true){
            if(this.methods.length ==0){
                this.#arrayForErrors.push("error: 'methods' array is empty")
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
            this.#arrayForErrors.push("error: 'methods' has invalid datatype")
        }
    }

   

    validate(){
        this.validateName()
        this.validateProperties()
        this.validateMethods()
        if(this.#arrayForErrors.length!=0){
            return this.#arrayForErrors;
        }
    }

    

    #validateDatatypes_for_validateMethods(numOfObjects, notObjects){
        
        if(numOfObjects.length == 0){
            this.#arrayForErrors.push("error: all elements of 'methods' array have invalid datatypes")
        }//if numOfObjects.length is equal to 0 
        else if(numOfObjects.length == this.methods.length){

            this.#loop_Through_Methods(numOfObjects);
                    
        }//if variable named "numOfObjects" is equal to this.methods.length
        else{
            this.#arrayForErrors.push(`error: ${notObjects.length} elements of 'methods' array have invalid datatypes`)
            
            this.#loop_Through_Methods(numOfObjects);
        }
    }

    #loop_Through_Methods(numOfObjects){
        
        for(let i=0; i< numOfObjects.length; i++){
            

            if(this.methods[numOfObjects[i]].name ==undefined && this.methods[numOfObjects[i]].returnType == undefined && this.methods[numOfObjects[i]].inputParams == undefined){
                this.#arrayForErrors.push(`error: no value given to methods[${numOfObjects[i]}].name AND methods[${numOfObjects[i]}].returnType AND methods[${numOfObjects[i]}].inputParams`);
            }//if all 3 keys of this.methods are undefined
            else if(this.methods[numOfObjects[i]].name ==undefined && this.methods[numOfObjects[i]].returnType != undefined && this.methods[numOfObjects[i]].inputParams != undefined){
                this.#arrayForErrors.push(`error: no value given to methods[${numOfObjects[i]}].name`)
                if(typeof this.methods[numOfObjects[i]].returnType !== "string" && typeof this.methods[numOfObjects[i].inputParams !="object"]){
                    this.#arrayForErrors.push(`error: methods[${numOfObjects[i]}].returnType AND methods[${numOfObjects[i]}].inputParams have invalid datatypes`)
                }//if datatypes of this.methods[].return AND this.methods[].inputParams are invalid
                else if(typeof this.methods[numOfObjects[i]].returnType ==="string" && typeof this.methods[numOfObjects[i]].inputParams != "object"){
                    this.#arrayForErrors.push(`error: methods[${numOfObjects[i]}].inputParams has invalid datatype`)
                }//if datatype of this.methods[].inputParams is not invalid
                else if(typeof this.methods[numOfObjects[i]].returnType !== "string" && typeof this.methods[numOfObjects[i]].inputParams =="object"){
                    this.#arrayForErrors.push(`error: methods[${numOfObjects[i]}].returnType has invalid datatype`)
                }//if datatype of this.methods[].returnType is not invalid
            }//if this.methods[].name is undefined
            
            else if(this.methods[numOfObjects[i]].name ==undefined && this.methods[numOfObjects[i]].returnType == undefined && this.methods[numOfObjects[i]].inputParams != undefined){
                this.#arrayForErrors.push(`error: no value given to methods[${numOfObjects[i]}].name AND methods[${numOfObjects[i]}].returnType`)
                if(typeof this.methods[numOfObjects[i]].inputParams != "object"){
                    this.#arrayForErrors.push(`error: methods[${numOfObjects[i]}].inputParams has invalid datatype`)
                }//if datatype of this.methods[].inputParams is not valid
            }//if this.methods[].name AND this.methods[].returnType are undefined

            else if(this.methods[numOfObjects[i]].name !=undefined && this.methods[numOfObjects[i]].returnType == undefined && this.methods[numOfObjects[i]].inputParams == undefined){
                this.#arrayForErrors.push(`error: no value given to methods[${numOfObjects[i]}].returnType AND methods[${numOfObjects[i]}].inputParams`)
                if(typeof this.methods[numOfObjects[i]].name !=="string"){
                    this.#arrayForErrors.push(`error: methods[${numOfObjects[i]}].name has invalid datatype`)
                }//if datatype of this.methods[].name is "string"
            }//if this.methods[].returnType AND this.methods[].inputParams are undefined

            else if(this.methods[numOfObjects[i]].name !=undefined && this.methods[numOfObjects[i]].returnType != undefined && this.methods[numOfObjects[i]].inputParams == undefined){
                this.#arrayForErrors.push(`error: no value given to methods[${numOfObjects[i]}].inputParams`)
                
                if(typeof this.methods[numOfObjects[i]].name !== "string" && this.methods[numOfObjects[i]].returnType !=="string"){
                    this.#arrayForErrors.push(`error: methods[${numOfObjects[i]}].name AND methods[${numOfObjects[i]}].returnType have invalid datatype`)
                
                }//if datatype of this.methods[].name AND this.methods[].returnType is "string"
                else if(typeof this.methods[numOfObjects[i]].name ==="strings" && this.methods[numOfObjects[i]].returnType !=="string"){
                    this.#arrayForErrors.push(`error: methods[${numOfObjects[i]}].returnType has invalid datatype`)
                }//if datatype of this.methods[].returnType is not "string"
                else if(typeof this.methods[numOfObjects[i]].name !== "string" && this.methods[numOfObjects[i]].returnType ==="string"){
                    this.#arrayForErrors.push(`error: methods[${numOfObjects[i]}].name has invalid datatype`)
                }//if datatype of this.methods[].name is not string
            }//if this.methods[].inputParams is undefined
            
            else if(this.methods[numOfObjects[i]].name !=undefined && this.methods[numOfObjects[i]].returnType == undefined && this.methods[numOfObjects[i]].inputParams != undefined){
                this.#arrayForErrors.push(`error: no value give to methods[${numOfObjects[i]}].returnType`)
                if(typeof this.methods[numOfObjects[i]].name !== "string" && typeof this.methods[numOfObjects[i]].inputParams !="object"){
                    this.#arrayForErrors.push(`error: methods[${numOfObjects[i]}].name AND methods[${numOfObjects[i]}].inputParams have invalid datatypes`)
                }//if datatypes of this.methods[].name AND this.methods[].inputParams are invalid
                else if(typeof this.methods[numOfObjects[i]].name ==="string" && typeof this.methods[numOfObjects[i]].inputParams !="object"){
                    this.#arrayForErrors.push(`error: methods[${numOfObjects[i]}].inputParams has invalid datatype`)
                }//if datatype of this.methods[].inputParams is invalid
            }//if this.methods[].returnType is undefind
            
            else if(this.methods[numOfObjects[i]].name ==undefined && this.methods[numOfObjects[i]].returnType != undefined && this.methods[numOfObjects[i]].inputParams == undefined){
                this.#arrayForErrors.push("error: no value given to methods[].name AND methods[].inputParams")
                if(typeof this.methods[numOfObjects[i]].returnType !== "string"){
                    this.#arrayForErrors.push(`error: methods[${numOfObjects[i]}].returnType has invalid datatype`)
                }
            }//if this.methods[].name AND this.methods[].inputParams are undefined
            else{
                this.#methods_keys_datatypes(numOfObjects,i);
            }
                 
        }//looping through this.methods[] for dataTypes of keys in objects
    }

    #methods_keys_datatypes(numOfObjects, i){
        if(typeof this.methods[numOfObjects[i]].name !== "string" && typeof this.methods[numOfObjects[i]].returnType !=="string" && typeof this.methods[numOfObjects[i]].inputParams != "object"){
            this.#arrayForErrors.push(`error: methods[${numOfObjects[i]}].name AND methods[${numOfObjects[i]}].returnType AND methods[${numOfObjects[i]}].inputParams have invalid datatypes`)
        }//if datatypes of all 3 keys of this.methods are invalid
        else if(typeof this.methods[numOfObjects[i]].name === "string" && typeof this.methods[numOfObjects[i]].returnType !=="string" && typeof this.methods[numOfObjects[i]].inputParams != "object"){
            this.#arrayForErrors.push(`error: methods[${numOfObjects[i]}].returnType AND methods[${numOfObjects[i]}].inputParams have invalid datatypes`)
        }//if datatypes of this.methods[].returnType AND this.methods[].inputParams are invalid
        else if(typeof this.methods[numOfObjects[i]].name === "string" && typeof this.methods[numOfObjects[i]].returnType =="string" && typeof this.methods[numOfObjects[i]].inputParams != "object"){
            this.#arrayForErrors.push(`error: methods[${numOfObjects[i]}].inputParams has invalid datatype`)
        }//if datatype of this.methods[].inputParams is invalid
        else if(typeof this.methods[numOfObjects[i]].name !== "string" && typeof this.methods[numOfObjects[i]].returnType !=="string" && typeof this.methods[numOfObjects[i]].inputParams == "object"){
            this.#arrayForErrors.push(`error: methods[${numOfObjects[i]}].name AND methods[${numOfObjects[i]}].returnType have invalid datatypes`)

            this.#loop_Through_inputParamsAndMore(numOfObjects, i);

        }//if datatypes of this.methods[].name AND this.methods[].returnType are invalid
        else if(typeof this.methods[numOfObjects[i]].name !== "string" && typeof this.methods[numOfObjects[i]].returnType ==="string" && typeof this.methods[numOfObjects[i]].inputParams == "object"){
            this.#arrayForErrors.push(`error: methods[${numOfObjects[i]}].name has invalid datatype`)
        
            this.#loop_Through_inputParamsAndMore(numOfObjects, i);
        
        }//if datatype of this.methods[].name is invalid
        else if(typeof this.methods[numOfObjects[i]].name !== "string" && typeof this.methods[numOfObjects[i]].returnType ==="string" && typeof this.methods[numOfObjects[i]].inputParams != "object"){
            this.#arrayForErrors.push(`error: methods[${numOfObjects[i]}].name AND methods[${numOfObjects[i]}].inputParams have invalid datatypes`)
        }//if datatypes of this.methods[].name AND this.methods[].inputParams are invalid
        else if(typeof this.methods[numOfObjects[i]].name === "string" && typeof this.methods[numOfObjects[i]].returnType !=="string" && typeof this.methods[numOfObjects[i]].inputParams == "object"){
            this.#arrayForErrors.push(`error: methods[${numOfObjects[i]}].returnType has invalid datatype`)
        
            this.#loop_Through_inputParamsAndMore(numOfObjects, i);
        
        }//if datatype of this.methods[].returnType is invalid
        else if(typeof this.methods[numOfObjects[i]].name === "string" && typeof this.methods[numOfObjects[i]].returnType ==="string" && typeof this.methods[numOfObjects[i]].inputParams == "object"){
            this.#loop_Through_inputParamsAndMore(numOfObjects, i);
        }//if all 3 keys of this.methods[] are of valid datatypes
   
    }//#methods_keys_datatypes(numOfObjects, i)

    #loop_Through_inputParamsAndMore(numOfObjects, i){
        
        if(Array.isArray(this.methods[numOfObjects[i]].inputParams) == true){
            if(this.methods[numOfObjects[i]].inputParams.length ==0){
                this.#arrayForErrors.push(`error: methods[${numOfObjects[i]}].inputParams array is empty`)
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
                    this.#arrayForErrors.push(`error: all elements of methods[${numOfObjects[i]}].inputParams array have invalid datatypes`)
                }
                else if(TotalObjects.length == this.methods[numOfObjects[i]].inputParams.length){
                    
                    this.#loop_Through_inputParams_Repetition(numOfObjects, i, TotalObjects);/////////CALLED loop_Through_inputParams_repetition()
                    
                }//if TotalObjects.length is equal to this.methods[].inputParams.length.
                else{
                    this.#arrayForErrors.push(`error: ${notObjects.length} elements in methods[${numOfObjects[i]}].inputParams array have invalid datatypes`)
                    this.#loop_Through_inputParams_Repetition(numOfObjects, i, TotalObjects);
                }//else
                }
        
        }//if this.methods.inputParams is an array 
        else{
            this.#arrayForErrors.push(`error: methods[${numOfObjects[i]}].inputParams has invalid datatype`)
        }
    }//#loop_Through_inputParamsAndMore(numOfObjects, i)

    #loop_Through_inputParams_Repetition(numOfObjects, i, TotalObjects){
        for(let x=0;x < TotalObjects.length; x++){
                    
            if(this.methods[numOfObjects[i]].inputParams[TotalObjects[x]].name == undefined && this.methods[numOfObjects[i]].inputParams[TotalObjects[x]].type == undefined){
                this.#arrayForErrors.push(`error: no value given to methods[${numOfObjects[i]}].inputParams[${TotalObjects[x]}].name AND methods[${numOfObjects[i]}].inputParams[${TotalObjects[x]}].type`)
            }//if this.methods[].inputParams.name AND this.methods[].type is undefined
            
            else if(this.methods[numOfObjects[i]].inputParams[TotalObjects[x]].name != undefined && this.methods[numOfObjects[i]].inputParams[TotalObjects[x]].type ==undefined){
                this.#arrayForErrors.push(`error: no value given to methods[${numOfObjects[i]}].inputParams[${TotalObjects[x]}].type`)
                if(typeof this.methods[numOfObjects[i]].inputParams[TotalObjects[x]].name !="strings"){
                    this.#arrayForErrors.push(`error: methods[${numOfObjects[i]}].inputParams[${TotalObjects[x]}].name has invalid datatype`)
                }//if datatype of this.methods[].inputParams[].name is invalid
           
            }//if this.methods[].inputParams[].type is undefined
            else if(typeof this.methods[numOfObjects[i]].inputParams[TotalObjects[x]].name != undefined && typeof this.methods[i].inputParams[TotalObjects[x]].type != undefined){

                if(typeof this.methods[numOfObjects[i]].inputParams[TotalObjects[x]].name !== "string" && typeof this.methods[numOfObjects[i]].inputParams[TotalObjects[x]].type !== "string"){
                    this.#arrayForErrors.push(`error: methods[${numOfObjects[i]}].inputParams[${TotalObjects[x]}].name AND methods[${numOfObjects[i]}].inputParams[${TotalObjects[x]}].type have invalid datatypes`)
                }//if datatype of this.methods[].inputParams[].namd AND this.methods[].inputParams[].type is invalid
                else if(typeof this.methods[numOfObjects[i]].inputParams[TotalObjects[x]].name === "string" && typeof this.methods[numOfObjects[i]].inputParams[TotalObjects[x]].type !== "string"){
                    this.#arrayForErrors.push(`error: methods[${numOfObjects[i]}].inputParams[${TotalObjects[x]}].type has invalid datatype`)
                }//if datatype of this.methods[].inputParams[].type is invalid
                else if(typeof this.methods[numOfObjects[i]].inputParams[TotalObjects[x]].name !=="string" && typeof this.methods[numOfObjects[i]].inputParams[TotalObjects[x]].type ==="string"){
                    this.#arrayForErrors.push(`error: methods[${numOfObjects[i]}].inputParams[${TotalObjects[x]}].name has invalid datatype`)
                }//if datatype of this.methods[].inputParams[].name is invalid

            }//if this.methods[].inputParams[].name OR this.methods[].inputParams[].type has datatype of string.
        
        }//forloop
    }//#loop_Through_inputParams_Repetition(numOfObjects, i, TotalObjects)


    #validateDatatypes_for_validateProperties(numOfObjects, notObjects){
        
        if(numOfObjects.length==0){
            this.#arrayForErrors.push(`error: all elements of properties array have invalid datatypes`)
        }//if numOfObjects is equal to 0
        else if(numOfObjects.length == this.properties.length){

            this.#loop_Through_Properties(numOfObjects);
            
        }//if variable named "numOfObjects" is equal to this.properties.length
        else{
            this.#arrayForErrors.push(`error: ${notObjects.length} elements of 'properties' array have invalid datatypes`)
            
            this.#loop_Through_Properties(numOfObjects);
        }
    }//#validateDatatypes_for_validateproperties(numOfObjects, notObjects)

    #loop_Through_Properties(numOfObjects){
        for(let i=0; i< numOfObjects.length; i++){
            
            if(this.properties[numOfObjects[i]].name == undefined && this.properties[numOfObjects[i]].type == undefined){

                this.#arrayForErrors.push(`error: no value given to properties[${numOfObjects[i]}].name AND properties[${numOfObjects[i]}].type`)
                
            }//if this.properties[].name and this.column.type is undefined
            else if(this.properties[numOfObjects[i]].name == undefined){
                this.#arrayForErrors.push(`error: no value given to properties[${numOfObjects[i]}].name`)

                if(typeof this.properties[numOfObjects[i]].type !== "string"){
                    this.#arrayForErrors.push(`error: properties[${numOfObjects[i]}].type has invalid datatype`)
                }//if datatype of this.properties[].type is not "string"

            }//if this.properties[].name is undefined
            else if(this.properties[numOfObjects[i]].type == undefined){
                this.#arrayForErrors.push(`error: no value given to properties[${numOfObjects[i]}].type`)

                if(typeof this.properties[numOfObjects[i]].name !== "string"){
                    this.#arrayForErrors.push(`error: properties[${numOfObjects[i]}].name has invalid datatype`)
                }//if datatype of this.properties[].name is not "string"
            
            }//if this.properties[].type is undefined
            else{
                if(typeof this.properties[numOfObjects[i]].name !== "string" && typeof this.properties[numOfObjects[i]].type !== "string"){
                    this.#arrayForErrors.push(`error: properties[${numOfObjects[i]}].name AND properties[${numOfObjects[i]}].type have invalid datatypes`)
                    
                }//if datatype of this.properties[].name AND datatype of this.properties[].type is not "string"
                else if(typeof this.properties[numOfObjects[i]].name !== "string"){
                    this.#arrayForErrors.push(`error: properties[${numOfObjects[i]}].name has invalid datatype`)
                }//if datatype of this.properties[].name is not "string"
                else if(typeof this.properties[numOfObjects[i]].type !== "string"){
                    this.#arrayForErrors.push(`error: properties[${numOfObjects[i]}].type has invalid datatype`)
                }//else
            }//else
        }//looping through this.properties[] for dataTypes of keys in objects
    }//#loop_Through_properties(numOfObjects)

}


export default Domain;