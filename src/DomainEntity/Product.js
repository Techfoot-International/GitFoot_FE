class Product{
    name;
    description;
    modules=[]
    #arrayForErrors=[];

    constructor(name, description){
        this.name=name;
        this.description=description;
    }

    addModule(module){
        this.modules.push(module)
    }

    validateModule(){
        if(this.modules.length===0){
            this.#arrayForErrors.push("error: 'module' array is empty")
        }
        else{
            this.modules.forEach(M => {
                if(M.validate()){
                    this.#arrayForErrors.push(M, M.validate())
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
        this.validateModule()
        if(this.#arrayForErrors.length!=0){
            return this.#arrayForErrors;
        }
    }
}

export default Product;