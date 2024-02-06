class Feature{
    name;
    description;
    useCases=[];
    #arrayForErrors=[];

    constructor(name, description){
        this.name=name;
        this.description=description;
    }

    addUseCase(useCase){
        this.useCases.push(useCase);
    }

    validateUseCase(){
        if(this.useCases.length===0){
            this.#arrayForErrors.push("error: 'useCases' array is empty")
        }
        else{
            this.useCases.forEach(U => {
                if(U.validate()){
                    this.#arrayForErrors.push(U, U.validate())
                }
            });
        }
    }

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
        this.validateUseCase()
        if(this.#arrayForErrors.length!=0){
            return this.#arrayForErrors;
        }
    }
}

export default Feature;