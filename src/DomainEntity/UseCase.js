class UseCase {
    name;
    description;
    actors = []; 
    preConditions = []; // array of strings
    postConditions = []; // array of strings
    steps = []; // array of strings 
    testCases = []; // array of strings
    picture;
    assignedDomainEntity;
    requirements = [];
    #numOfElements=0;
    #arrayForErrors = [];
    


    constructor(name, description, actors, preConditions, postConditions, steps, testCases, picture, assignedDomainEntity) {
        this.name = name;
        this.description = description;
        this.actors = actors;
        this.preConditions = preConditions;
        this.postConditions = postConditions;
        this.steps = steps;
        this.testCases = testCases;
        this.picture = picture;
        this.assignedDomainEntity = assignedDomainEntity;
    }

    
    addRequirement(requirement) {
        this.requirements.push(requirement);
    }

    validateRequirements() {
        this.requirements.forEach(requirement => {
            const requirementErrors = requirement.validate();
            if (requirementErrors) {
                this.#arrayForErrors.push(requirement,requirementErrors)
            }
        });
    }
    validateName() {
        if(this.name==undefined){
            this.#arrayForErrors.push("error: 'name' is undefined")
        }
        else if (typeof this.name !== "string") {
            this.#arrayForErrors.push("error: Name must be a string.")
        }
    }

    validateDescription() {
        if(this.description==undefined){
            this.#arrayForErrors.push("error: 'description' has invalid datatype.")
        }
        else if (typeof this.description !== "string") {
            this.#arrayForErrors.push("error: Description must be a string.")
        }
    }

    validateActors() {
        if(this.actors==undefined){
            this.#arrayForErrors.push("error: 'actors' is undefined")
        }
        else if(!Array.isArray(this.actors)){
            this.#arrayForErrors.push("error: 'actors' must be an array")
        }
        else if(this.actors.length==0){
            this.#arrayForErrors.push("error: 'actors' array is empty")
        }
        else if(!this.actors.every(actor => typeof actor === "string")){
            for (let i = 0; i < this.actors.length; i++) {
                if(typeof this.actors[i]!="string"){
                    this.#numOfElements++
                }   
            }
            if(this.#numOfElements!=0){
                this.#arrayForErrors.push(`error: ${this.#numOfElements} 'actors' have invalid datatype`)
                this.#numOfElements=0;
            }
        }
    }

    validatePreConditions() {
        if(this.preConditions==undefined){
            this.#arrayForErrors.push("error: 'preConditions' is undefined.")
        }
        else if(!Array.isArray(this.preConditions)){
            this.#arrayForErrors.push("error: 'preConditions' must be an array.")
        }
        else if(this.preConditions.length==0){
            this.#arrayForErrors.push("error: 'preConditions' array is empty.")
        }
        else if(!this.preConditions.every(condition => typeof condition === "string")){
            for (let i = 0; i < this.preConditions.length; i++) {
                if(typeof this.preConditions[i]!="string"){
                    this.#numOfElements++
                }   
            }
            if(this.#numOfElements!=0){
                this.#arrayForErrors.push(`error: ${this.#numOfElements} 'preConditions' have invalid datatype`)
                this.#numOfElements=0;
            }
        }
    }

    validatePostConditions() {

        if(this.postConditions==undefined){
            this.#arrayForErrors.push("error: 'postConditions' is undefined.")
        }
        else if(!Array.isArray(this.postConditions)){
            this.#arrayForErrors.push("error: 'postConditions' must be an array.")
        }
        else if(this.postConditions.length==0){
            this.#arrayForErrors.push("error: 'postConditions' array is empty.")
        }
        else if(!this.postConditions.every(condition => typeof condition === "string")){
            for (let i = 0; i < this.postConditions.length; i++) {
                if(typeof this.postConditions[i]!="string"){
                    this.#numOfElements++
                }   
            }
            if(this.#numOfElements!=0){
                this.#arrayForErrors.push(`error: ${this.#numOfElements} 'postConditions' have invalid datatype`)
                this.#numOfElements=0;
            }
        }
    }

    validateSteps() {
        if(this.steps==undefined){
            this.#arrayForErrors.push("error: 'steps' is undefined")
        }
        else if(!Array.isArray(this.steps)){
            this.#arrayForErrors.push("error: 'steps' must be an array")
        }
        else if(this.steps.length==0){
            this.#arrayForErrors.push("error: 'steps' array is empty")
        }
        else if(!this.steps.every(steps => typeof steps === "string")){
            for (let i = 0; i < this.steps.length; i++) {
                if(typeof this.steps[i]!="string"){
                    this.#numOfElements++
                }   
            }
            if(this.#numOfElements!=0){
                this.#arrayForErrors.push(`error: ${this.#numOfElements} 'steps' have invalid datatype`)
                this.#numOfElements=0;
            }
        }
    }


    validateTestCases() {
        if(this.testCases==undefined){
            this.#arrayForErrors.push("error: 'testCases' is undefined")
        }
        else if(!Array.isArray(this.testCases)){
            this.#arrayForErrors.push("error: 'testCases' must be an array")
        }
        else if(this.testCases.length==0){
            this.#arrayForErrors.push("error: 'testCases' array is empty")
        }
        else if(!this.testCases.every(testCase => typeof testCase === "string")){
            for (let i = 0; i < this.testCases.length; i++) {
                if(typeof this.testCases[i]!="string"){
                    this.#numOfElements++
                }   
            }
            if(this.#numOfElements!=0){
                this.#arrayForErrors.push(`error: ${this.#numOfElements} 'testCases' have invalid datatype`)
                this.#numOfElements=0;
            }
        }
    }

    validatePicture() {
        if (this.picture === undefined) {
            this.#arrayForErrors.push("error: Picture is required.");
        }
    }

    validateAssignedDomainEntity() {
        if(this.assignedDomainEntity==undefined){
            this.#arrayForErrors.push("error: 'assignedDomainEntity' is undefined")
        }
        else if(!Array.isArray(this.assignedDomainEntity)){
            this.#arrayForErrors.push("error: 'assignedDomainEntity' must be an array")
        }
        else if(this.assignedDomainEntity.length==0){
            this.#arrayForErrors.push("error: 'assignedDomainEntity' array is empty")
        }
        else if(!this.assignedDomainEntity.every(entity => typeof entity === "string")){
            for (let i = 0; i < this.assignedDomainEntity.length; i++) {
                if(typeof this.assignedDomainEntity[i]!="string"){
                    this.#numOfElements++
                }   
            }
            if(this.#numOfElements!=0){
                this.#arrayForErrors.push(`error: ${this.#numOfElements} 'assignedDomainEntity' have invalid datatype`)
                this.#numOfElements=0;
            }
        }
    }

    validate() {
        this.validateName(),
        this.validateDescription(),
        this.validateActors(),
        this.validatePreConditions(),
        this.validatePostConditions(),
        this.validateSteps(),
        this.validateTestCases(),
        this.validatePicture(),
        this.validateAssignedDomainEntity(),
        this.validateRequirements()

        if(this.#arrayForErrors.length!==0){
            return this.#arrayForErrors;
        }   
    }
}

// Example usage:
/*
const useCase = new UseCase("Use Case 1", "Description...", "Actor 1", "Pre-condition...", "Post-condition...",
    ["Step 1", "Step 2"], ["Test Case 1", "Test Case 2"], "picture.jpeg", ["Table"]);

const functionalReq = new Functional_Req("F1", "Functional Requirement 1");
const nonFunctionalReq = new Non_Functional_Req("NF1", "Non-Functional Requirement 1", "Performance");


useCase.addRequirement(functionalReq);
useCase.addRequirement(nonFunctionalReq);

const validationErrors = useCase.validate();
console.log(validationErrors);
*/

export default UseCase;