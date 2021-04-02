import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, gender, age, storyTypes, labels} from '../../data/testData';
import {inputValues4, clearInput} from '../../helpers/methods';

    describe('Gender field', function () {
        before('Open App', function () {
        browser.url('');
        });

        beforeEach(() => {
        browser.refresh()
        });

    describe('Positive cases', function () {

        it('TC-042 Radio button "he" is selected after clicking on it', function () {
            $$(sel.radioButtons)[gender.he].click();
            let buttonHe = $(sel.radioBtnHe).isSelected();
            expect(buttonHe).toEqual(true);
        });

        it('TC-043 Radio button "she" is selected after clicking on it', function () {
            $$(sel.radioButtons)[gender.she].click();
            let buttonShe = $(sel.radioBtnShe).isSelected();
            expect(buttonShe).toEqual(true);
        });

        it('TC-044 Radio button "it" is selected after clicking on it', function () {
            $$(sel.radioButtons)[gender.it].click();
            let buttonIt = $(sel.radioBtnIt).isSelected();
            expect(buttonIt).toEqual(true);
        });

        it('TC-045.a User can choose only one button ("he") at the time', function () {
            $$(sel.radioButtons)[gender.he].click();
            const buttonIt = $(sel.radioBtnIt).isSelected();
            expect(buttonIt).toEqual(false);
        });

        it('TC-045.b User can choose only one button ("he") at the time', function () {
            $$(sel.radioButtons)[gender.he].click();
            const buttonShe = $(sel.radioBtnShe).isSelected();
            expect(buttonShe).toEqual(false);
        });

        it('TC-046.a User can choose only one button ("she") at the time', function () {
            $$(sel.radioButtons)[gender.she].click();
            let buttonHe = $(sel.radioBtnHe).isSelected();
            expect(buttonHe).toEqual(false);
        });

        it('TC-046.b User can choose only one button ("she") at the time', function () {
            $$(sel.radioButtons)[gender.she].click();
            let buttonIt = $(sel.radioBtnIt).isSelected();
            expect(buttonIt).toEqual(false);
        });

        it('TC-047.a User can choose only one button ("it") at the time', function () {
            $$(sel.radioButtons)[gender.it].click();
            let buttonShe = $(sel.radioBtnShe).isSelected();
            expect(buttonShe).toEqual(false);
        });

        it('TC-047.b User can choose only one button ("it") at the time', function () {
            $$(sel.radioButtons)[gender.it].click();
            let buttonHe = $(sel.radioBtnHe).isSelected();
            expect(buttonHe).toEqual(false);
        });

        it('TC-048.a User can change the choice by clicking on another button ( "it" -> "she")', function () {
            $$(sel.radioButtons)[gender.it].click();
            $$(sel.radioButtons)[gender.she].click();
            let buttonShe = $(sel.radioBtnShe).isSelected();
            expect(buttonShe).toEqual(true);
        });

        it('TC-048.b User can change the choice by clicking on another button ( "it" -> "he")', function () {
            $$(sel.radioButtons)[gender.it].click();
            $$(sel.radioButtons)[gender.he].click();
            const buttonHe = $(sel.radioBtnHe).isSelected();
            expect(buttonHe).toEqual(true);
        });

        it('TC-049.a User can change the choice by clicking on another button ( "he" -> "she")', function () {
            $$(sel.radioButtons)[gender.he].click();
            $$(sel.radioButtons)[gender.she].click();
            const buttonShe = $(sel.radioBtnShe).isSelected();
            expect(buttonShe).toEqual(true);
        });

        it('TC-049.b User can change the choice by clicking on another button ( "he" -> "it")', function () {
            $$(sel.radioButtons)[gender.he].click();
            $$(sel.radioButtons)[gender.it].click();
            const buttonIt = $(sel.radioBtnIt).isSelected();
            expect(buttonIt).toEqual(true);
        });

        it('TC-050.a User can change the choice by clicking on another button ( "she" -> "it")', function () {
            $$(sel.radioButtons)[gender.she].click();
            $$(sel.radioButtons)[gender.it].click();
            const buttonIt = $(sel.radioBtnIt).isSelected();
            expect(buttonIt).toEqual(true);
        });

        it('TC-050.b User can change the choice by clicking on another button ( "she" -> "he")', function () {
            $$(sel.radioButtons)[gender.she].click();
            $$(sel.radioButtons)[gender.he].click();
            const buttonHe = $(sel.radioBtnHe).isSelected();
            expect(buttonHe).toEqual(true);
        });
    });

    describe('Negative cases', function () {

        it('TC-051 Not chosen button', function () {
            $(sel.name).setValue(name.default);
            $(sel.age).setValue(age.default);
            $(sel.storyType).click();
            $$(sel.storyList)[storyTypes.comedy].click();
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });
    });

});
