import validator from 'validator';

class FormValidator {
    constructor(rules) {
        this.rules = rules;
        this.validation = {
            isValid: true
        };
        Object.keys(this.rules).map((key) => {
            this.validation[key] = { isValid: true, message: '' };

            return this.validation;
        });
    }

    validate(state) {
        Object.keys(state).map((field) => {
            const value = state[field];
            const rule = this.rules[field];

            if (rule !== undefined) {
                rule.validators.map(ruleValidator => {
                    const validation_method = validator[ruleValidator.method];

                    if (validation_method(value) === true) {
                        this.validation[field] = { isValid: false, message: ruleValidator.message };
                        this.validation.isValid = false;
                    }

                    return this.validation;
                });
            }

            return this.validation;
        });

        return this.validation;
    }

    validateField(field) {
        const fieldRule = this.rules[field.name];
        var validationFieldResult = {};

        fieldRule.validators.map(ruleValidator => {
            const validationMethod = validator[ruleValidator.method];

            if (validationMethod(field.value) === true) {
                validationFieldResult = {
                    isValid: false,
                    message: ruleValidator.message
                }
            } else {
                validationFieldResult = {
                    isValid: true,
                    message: ''
                }
            }

            return validationFieldResult;
        });

        return validationFieldResult;
    }
}

export default FormValidator;