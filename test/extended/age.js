import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, gender, age, storyTypes} from '../../data/testData';
import {inputValues4, clearInput} from'../../helpers/methods';

describe('Age field', function () {

            before('Open App', function () {
            browser.url('');
            });

            beforeEach(() => {
            browser.refresh()
            });

    describe('Placeholder', function () {

        it('TC-055 Age Field placeholder = "Hero \'s age"', function () {
            let placeholder = $(sel.age).getAttribute('placeholder');
            expect(placeholder).toEqual(exp.agePlaceholder);
        });

        describe('Positive cases', function () {

            it('TC-056 Age field accept  "1"', function () {
                $(sel.age).setValue('oneDigit');
                let errorMessage = $("div[role='alert']").isDisplayed();
                expect(errorMessage).toEqual(false);
            });

            it('TC-057 Age field accept  12 digits', function () {
                $(sel.age).setValue('12Digits');
                let errorMessage = $("div[role='alert']").isDisplayed();
                expect(errorMessage).toEqual(false);
            });

            it('TC-058 Age field accept "1234567890"', function () {
                $(sel.age).setValue('default');
                let errorMessage = $("div[role='alert']").isDisplayed();
                expect(errorMessage).toEqual(false);
            });


            it('TC-059 Age field accept space', function () {
                $(sel.age).setValue('spaceIsTrimmed');
                let errorMessage = $("div[role='alert']").isDisplayed();
                expect(errorMessage).toEqual(false);
            });

            it('TC-060 Age field accept 0 on the left', function () {
                $(sel.age).setValue('zeroIsTrimmed');
                let errorMessage = $("div[role='alert']").isDisplayed();
                expect(errorMessage).toEqual(false);
            });

            it('TC-061 Age field accept spin up', function () {
                $(sel.spinUpAge).click();
                let age = $(sel.age).getValue();
                expect(age).toEqual(exp.spinUp1);
            });

            it('TC-062 Age field accept 1 -> spin up', function () {
                $(sel.age).setValue(age.oneDigit);
                $(sel.spinUpAge).click();
                let ages = $(sel.age).getValue();
                expect(ages).toEqual(exp.spinUp2);
            });

            it('TC-202 Enter the age field 5 after deletion 5 shows - Required.', function () {
                $(sel.age).setValue(age.spindown);
                clearInput();
                let message = $(sel.errorMessage).waitForDisplayed();
                expect(message).toEqual(true);
            });

            it('TC-63 Age field accept 2 -> spin down', function () {
                $(sel.age).setValue(age.spindown);
                $(sel.spinDownAge).click();
                let ages = $(sel.age).getValue();
                expect(ages).toEqual(exp.spinDown4);
            });

        });

        describe('Negative cases', function () {
        //  it('TC-064 Age field doesn\'t accept 0', function () {
        //     $(sel.age).setValue('zeroInput');
        //     let errorMessage = $("div[role='alert']").isDisplayed();
        //     expect(errorMessage).toEqual(true);
        // });

            it('TC-65 Age field doesn\'t accept 13 digits', function () {
                $(sel.age).setValue(age.digits13);
                let errorMessage = $("div[role='alert']").waitForDisplayed();
                expect(errorMessage).toEqual(true);
            });

            it('TC-66 Age field doesn\'t accept letters', function () {
                $(sel.age).setValue(age.letters);
                let errorMessage = $("div[role='alert']").waitForDisplayed();
                expect(errorMessage).toEqual(true);
            });

            it('TC-67 Age field doesn\'t accept symbols', function () {
                $(sel.age).setValue(age.symbols);
                let errorMessage = $("div[role='alert']").waitForDisplayed();
                expect(errorMessage).toEqual(true);
            });

            it('TC-68 Age field doesn\'t accept negative digits', function () {
                $(sel.age).setValue(age.negative);
                let errorMessage = $("div[role='alert']").waitForDisplayed();
                expect(errorMessage).toEqual(true);
            });

            it('TC-69 Age field doesn\'t accept float digits', function () {
                $(sel.age).setValue(age.float);
                let errorMessage = $("div[role='alert']").waitForDisplayed();
                expect(errorMessage).toEqual(true);
            });

            it('TC-71 Age field doesn\'t accept spin down when field is empty', function () {
                $(sel.spinDownAge).click();
                let errorMessage = $("div[role='alert']").waitForDisplayed();
                expect(errorMessage).toEqual(true);

            });

         });
    });

});
