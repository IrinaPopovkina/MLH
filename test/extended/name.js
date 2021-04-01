import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, gender, age, storyTypes} from '../../data/testData';


describe('Name field', function () {
        before('Open App', function () {
        browser.url('');
        });

        beforeEach(() => {
        browser.refresh()
        });

    describe('Placeholder', function () {

        it('TC-028 Name field placeholder  = \'Hero\'s name\'', function () {
            let placeholder = $(sel.name).getAttribute('placeholder');
            expect(placeholder).toEqual(exp.namePlaceholder);
        });

    });

    describe('Positive cases', function () {

        it('TC-029 Name field accept one symbol', function () {
            $(sel.name).setValue('oneSymbol');
            let error = $("div[role='alert']").isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-030 Name field accepts 70 symbols', function () {
            $(sel.name).setValue('symbols70');
            let error = $("div[role='alert']").isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-031 Name  field accepts letters ', function () {
            $(sel.name).setValue('letters');
            let error = $("div[role='alert']").isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-032 Name field accepts letters (lower case/upper case', function () {
            $(sel.name).setValue('lowUpCase');
            let error = $("div[role='alert']").isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-033 Name field accepts digits', function () {
            $(sel.name).setValue('digits');
            let error = $("div[role='alert']").isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-034 Name field accepts special symbols', function () {
            $(sel.name).setValue('specSymbol');
            let error = $("div[role='alert']").isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-035 Name field accepts letters with space', function () {
            $(sel.name).setValue('lettersSpace');
            let error = $("div[role='alert']").isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-036 Name field accepts russian letters', function () {
            $(sel.name).setValue(name.rusLetters);
            let error = $(sel.errorMessage).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-037 Name field accepts copy/paste functionality', function () {
            $(sel.name).setValue(name.copyPast);
            let error = $(sel.errorMessage).isDisplayed();
            expect(error).toEqual(false);
        });

    });

    describe('Negative cases', function () {

    // it('TC-038 Name field accepts SQL/XML code', function () {
    //     $(sel.name).setValue(name.);
    //     let errorAlert = $(sel.errorMessage).waitForDisplayed();
    //     expect(errorAlert).toEqual(true);
    // });


    // it('TC-039 Empty name field', function () {
    //     $(sel.name).setValue(name.emptyField);
    //     let error = $(sel.errorMessage).waitForDisplayed();
    //     expect(error).toEqual(true);
    // });

        it('TC-040 Name field doesn\'t accepts 71 symbol', function () {
            $(sel.name).setValue(name.symbol71);
            let error = $(sel.errorMessage).waitForDisplayed();
            expect(error).toEqual(true);
        });
    });
});
