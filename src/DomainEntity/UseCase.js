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

    validateName() {
        return typeof this.name === "string" ? null : "Name must be a string.";
    }

    validateDescription() {
        return typeof this.description === "string" ? null : "Description must be a string.";
    }

    validateActors() {
        return typeof this.actors === "string" ? null : "Actors must be a string.";
    }

    validatePreConditions() {
        return typeof this.preConditions === "string" ? null : "Pre-conditions must be a string.";
    }

    validatePostConditions() {
        return typeof this.postConditions === "string" ? null : "Post-conditions must be a string.";
    }

    validateSteps() {
        if (!Array.isArray(this.steps) || !this.steps.every(step => typeof step === "string")) {
            return "Steps must be an array of strings.";
        }
        return null;
    }

    validateTestCases() {
        if (!Array.isArray(this.testCases) || !this.testCases.every(testCase => typeof testCase === "string")) {
            return "Test cases must be an array of strings.";
        }
        return null;
    }

    validatePicture() {
        return this.picture !== undefined ? null : "Picture is required.";
    }

    validateAssignedDomainEntity() {
        if (!Array.isArray(this.assignedDomainEntity) || !this.assignedDomainEntity.every(entity => typeof entity === "string")) {
            return "Assigned domain entity must be an array of strings.";
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
            this.validateAssignedDomainEntity()
        ].filter(error => error !== null);

        return errors.length === 0 ? null : errors;
    }
}

// Example usage:
const useCase = new UseCase("Use Case 1", "Description...", "Actor 1", "Pre-condition...", "Post-condition...",
    ["Step 1", "Step 2"], ["Test Case 1", "Test Case 2"], "picture.jpeg", ["Table"]);
const validationErrors = useCase.validate();
console.log(validationErrors);
