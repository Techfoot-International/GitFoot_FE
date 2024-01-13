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
    #arrayForErrors = [];
    requirements = [];


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
        const errors = [];

        this.requirements.forEach(requirement => {
            const requirementErrors = requirement.validate();
            if (requirementErrors) {
                errors.push({ requirement, errors: requirementErrors });
            }
        });

        return errors.length === 0 ? null : errors;
    }
    validateName() {
        if (typeof this.name !== "string") {
            return "error: Name must be a string.";
        }
        return null;
    }

    validateDescription() {
        if (typeof this.description !== "string") {
            return "error: Description must be a string.";
        }
        return null;
    }

    validateActors() {
        if (!Array.isArray(this.actors) || !this.actors.every(actor => typeof actor === "string")) {
            return "error: Actors must be an array of strings.";
        }
        return null;
    }

    validatePreConditions() {
        if (!Array.isArray(this.preConditions) || !this.preConditions.every(condition => typeof condition === "string")) {
            return "error: Pre-conditions must be an array of strings.";
        }
        return null;
    }

    validatePostConditions() {
        if (!Array.isArray(this.postConditions) || !this.postConditions.every(condition => typeof condition === "string")) {
            return "error: Post-conditions must be an array of strings.";
        }
        return null;
    }

    validateSteps() {
        if (!Array.isArray(this.steps) || !this.steps.every(step => typeof step === "string")) {
            return "error: Steps must be an array of strings.";
        }
        return null;
    }

    validateTestCases() {
        if (!Array.isArray(this.testCases) || !this.testCases.every(testCase => typeof testCase === "string")) {
            return "error: Test cases must be an array of strings.";
        }
        return null;
    }
    validateTestCases() {
        if (!Array.isArray(this.testCases) || !this.testCases.every(testCase => typeof testCase === "string")) {
            this.#arrayForErrors.push("error: Test cases must be an array of strings.");
        }
    }

    validatePicture() {
        if (this.picture === undefined) {
            this.#arrayForErrors.push("error: Picture is required.");
        }
    }

    validateAssignedDomainEntity() {
        if (!Array.isArray(this.assignedDomainEntity) || !this.assignedDomainEntity.every(entity => typeof entity === "string")) {
            return "error: Assigned domain entity must be an array of strings.";
        }
        return null;
    }

    validate() {
        const errors = [
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
        ].filter(error => error !== null);

        return errors.length === 0 ? null : errors;
    }
}

// Example usage:
const useCase = new UseCase("Use Case 1", "Description...", "Actor 1", "Pre-condition...", "Post-condition...",
    ["Step 1", "Step 2"], ["Test Case 1", "Test Case 2"], "picture.jpeg", ["Table"]);

const functionalReq = new Functional_Req("F1", "Functional Requirement 1");
const nonFunctionalReq = new Non_Functional_Req("NF1", "Non-Functional Requirement 1", "Performance");

useCase.addRequirement(functionalReq);
useCase.addRequirement(nonFunctionalReq);

const validationErrors = useCase.validate();
console.log(validationErrors);