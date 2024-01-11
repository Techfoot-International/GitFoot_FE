class UseCase {
    name;
    description;
    actors;
    preConditions;
    postConditions;
    steps;
    testCases;
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
            this.#arrayForErrors.push("error: Name must be a string.");
        }
    }

    validateDescription() {
        if (typeof this.description !== "string") {
            this.#arrayForErrors.push("error: Description must be a string.");
        }
    }

    validateActors() {
        if (typeof this.actors !== "string") {
            this.#arrayForErrors.push("error: Actors must be a string.");
        }
    }

    validatePreConditions() {
        if (typeof this.preConditions !== "string") {
            this.#arrayForErrors.push("error: Pre-conditions must be a string.");
        }
    }

    validatePostConditions() {
        if (typeof this.postConditions !== "string") {
            this.#arrayForErrors.push("error: Post-conditions must be a string.");
        }
    }

    validateSteps() {
        if (!Array.isArray(this.steps) || !this.steps.every(step => typeof step === "string")) {
            this.#arrayForErrors.push("error: Steps must be an array of strings.");
        }
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
            this.#arrayForErrors.push("error: Assigned domain entity must be an array of strings.");
        }
    }

    validate() {
        this.#arrayForErrors = []; // Clear any previous errors

        this.validateName();
        this.validateDescription();
        this.validateActors();
        this.validatePreConditions();
        this.validatePostConditions();
        this.validateSteps();
        this.validateTestCases();
        this.validatePicture();
        this.validateAssignedDomainEntity();

        return this.#arrayForErrors.length === 0 ? null : this.#arrayForErrors;
    }
}

// Example usage:
const useCase = new UseCase("Use Case 1", "Description...", "Actor 1", "Pre-condition...", "Post-condition...",
    ["Step 1", "Step 2"], ["Test Case 1", "Test Case 2"], "picture.jpeg", ["Table"]);
const validationErrors = useCase.validate();
console.log(validationErrors);