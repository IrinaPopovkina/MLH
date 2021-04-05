import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, gender, age, storyTypes, labels} from '../../data/testData';

describe('StoryType field', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh()
    });

    describe('Placeholder', function () {

        it('TC-072 Story Type placeholder = "Type of the story"', function () {
            let placeholder = $(sel.story).getText();
            expect(placeholder).toEqual(exp.storyPlaceholder);
        });
    });

    describe('Positive cases', function () {

        it('TC-073 The expanded list appears in the dropdown', function () {
            $(sel.story).click();
            const list = $(sel.storyDropDown).isDisplayed();
            expect(list).toEqual(true);
        });
        it('TC-075 Label "Overcoming the Monster" is correct', function () {
            $(sel.story).click();
            let label = $$(sel.storyType)[storyTypes.overcomingTheMonster].waitForDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-076 Label "Rebirth"  is correct', function () {
            $(sel.story).click();
            let label = $$(sel.storyType)[storyTypes.rebirth].waitForDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-077 Label "Quest"  is correct', function () {
            $(sel.story).click();
            let label = $$(sel.storyType)[storyTypes.quest].waitForDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-078 Label "Journey and Return"  is correct', function () {
            $(sel.story).click();
            let label = $$(sel.storyType)[storyTypes.journeyAndReturn].waitForDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-079 Label "Rags and Riches"  is correct', function () {
            $(sel.story).click();
            let label = $$(sel.storyType)[storyTypes.ragsAndRiches].waitForDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-080 Label "Tragedy"  is correct', function () {
            $(sel.story).click();
            let label = $$(sel.storyType)[storyTypes.tragedy].waitForDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-081 Label "Comedy" is correct', function () {
            $(sel.story).click();
            let label = $$(sel.storyType)[storyTypes.comedy].waitForDisplayed();
            expect(label).toEqual(true);
        });
    });
});
