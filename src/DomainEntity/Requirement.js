class Requirement{
    code;
    description;
    #arrayForErrors=[]

    constructor(code, description){
        this.code=code;
        this.description=description;
    }
    

    validateCode(){
        if(this.code==undefined){
            this.#arrayForErrors.push("error: no value given to 'code'");
        }
        else if(typeof this.code != "string"){
            this.#arrayForErrors.push("error: 'code' has invalid datatype")
        }
    }

    validateDescription(){
        if(this.description==undefined){
            this.#arrayForErrors.push("error: no value given to 'description'")
        }
        else if(typeof this.description != "string"){
            this.#arrayForErrors.push("error: 'description' has invalid datatype")
        }
    }

    validate(){
        this.validateCode();
        this.validateDescription()
        if(this.#arrayForErrors.length!=0){
            return this.#arrayForErrors;
        }
    }

    FuncForErrors(errorMessage){
        this.#arrayForErrors.push(errorMessage);
    }

    returnArrayForErrors() {
        return this.#arrayForErrors;
    }
    
}

class Non_Functional_Req extends Requirement{
    type;

    constructor(code, description, type){
        super(code, description)
        this.type=type;
    }

    validateType(){
        if(this.type ==undefined){
            this.FuncForErrors("error: no value given to 'type'");
        }
        else if(typeof this.type != "string"){
            this.FuncForErrors("error: 'type' has invalid datatype")
        }
    }

    validate() {

        super.validateCode();
        super.validateDescription();
        this.validateType();

        if (this.returnArrayForErrors().length != 0) {
            return this.returnArrayForErrors();
        }
    }

}

class Functional_Req extends Requirement{

    constructor(code, description){
        super(code, description);
    }
    
}

export {
    Functional_Req,
    Non_Functional_Req
};