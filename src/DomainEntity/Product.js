class Product{
    name;
    description;
    #arrayForErrors=[];

    validateName(){
        if(this.name==undefined){
            this.#arrayForErrors.push("error: no value given to 'name'")
        }
        else if(typeof this.name!== "string"){
            this.#arrayForErrors.push("error: 'name' has invalid datatype")
        }
    }
    validateDescription(){
        if(this.description==undefined){
            this.#arrayForErrors.push("error: no value given to 'description'")
        }
        else if(typeof this.description!=="string"){
            this.#arrayForErrors.push("error: 'description' has invalid datatype")
        }
    }
    validate(){
        this.validateName()
        this.validateDescription()
        if(this.#arrayForErrors.length!=0){
            return this.#arrayForErrors;
        }
    }
}