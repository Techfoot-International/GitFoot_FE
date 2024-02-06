class Module {
    name;
    description;
    features=[];
    #arrayForErrors=[];

    constructor(name, description){
        this.name=name;
        this.description=description;
    }

    addFeature(feature){
        this.features.push(feature);
    }

    validateFeature(){
        if(this.features.length===0){
            this.#arrayForErrors.push("error: 'features' array is empty")
        }
        else{
            this.modules.forEach(F => {
                if(F.validate()){
                    this.#arrayForErrors.push(F, F.validate())
                }
            });
        }
    }

    validateName(){
        if(this.name==undefined){
            this.#arrayForErrors.push("error: 'name' is undefined")
        }
        else if(typeof this.name!=="string"){
            this.#arrayForErrors.push("error: 'name' has invalid datatype")
        }
    }

    validateDescription(){
        if(this.description==undefined){
            this.#arrayForErrors.push("error: 'description' is undefined")
        }
        else if(typeof this.description!=="string"){
            this.#arrayForErrors.push("error: 'description' has invalid datatype")
        }
    }

    validate(){
        this.validateName()
        this.validateDescription()
        this.validateFeature()
        if(this.#arrayForErrors.length!=0){
            return this.#arrayForErrors;
        }
    }
}

export default Module;