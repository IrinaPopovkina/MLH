// import sel from '../../data/selectors';
// import exp from '../../data/expected.json';
// import {name, gender, age, storyTypes, labels} from '../../data/testData';
//
// describe('StoryType field', function () {
//
//     before('Open App', function () {
//         browser.url('');
//     });
//
//     beforeEach(() => {
//         browser.refresh()
//     });
//
//     describe('Positive cases. Type of the story', function () {
//
//         it('TC-082 Choose only one story type at a time: "Overcoming the Monster"', function () {
//             $(sel.story).click();
//             let type = $$(sel.storyType)[storyTypes.overcomingTheMonster].getAttribute('title');
//             expect(type).toEqual(exp.storyType1);
//         });
//
//         it('TC-083 The dropdown is in a collapsed way after choosing "Overcoming the Monster"', function () {
//             $(sel.story).click();
//             $$(sel.storyType)[storyTypes.overcomingTheMonster].click();
//             let dropDownMenu = $(sel.storyDropDown).isDisplayed();
//             expect(dropDownMenu).toEqual(false);
//         });
//         it('TC-084 Choose only one story type at a time: "Rebirth"', function () {
//             $(sel.story).click();
//             let type = $$(sel.storyType)[storyTypes.rebirth].getAttribute('title');
//             expect(type).toEqual(exp.storyType2);
//         });
//
//         it('TC-085 The dropdown is in a collapsed way after choosing "Rebirth"', function () {
//             $(sel.story).click();
//             $$(sel.storyType)[storyTypes.rebirth].click();
//             let dropDownMenu = $(sel.storyDropDown).isDisplayed();
//             expect(dropDownMenu).toEqual(false);
//         });
//         it('TC-086 Choose only one story type at a time: "Quest"', function () {
//             $(sel.story).click();
//             let type = $$(sel.storyType)[storyTypes.quest].getAttribute('title');
//             expect(type).toEqual(exp.storyType3);
//         });
//
//         it('TC-087 The dropdown is in a collapsed way after choosing "Quest"', function () {
//             $(sel.story).click();
//             $$(sel.storyType)[storyTypes.quest].click();
//             let dropDownMenu = $(sel.storyDropDown).isDisplayed();
//             expect(dropDownMenu).toEqual(false);
//         });
//         it('TC-088 Choose only one story type at a time: "Journey and Return"', function () {
//             $(sel.story).click();
//             let type = $$(sel.storyType)[storyTypes.journeyAndReturn].getAttribute('title');
//             expect(type).toEqual(exp.storyType4);
//         });
//
//         it('TC-089 The dropdown is in a collapsed way after choosing "Journey and Return"', function () {
//             $(sel.story).click();
//             $$(sel.storyType)[storyTypes.journeyAndReturn].click();
//             let dropDownMenu = $(sel.storyDropDown).isDisplayed();
//             expect(dropDownMenu).toEqual(false);
//         });
//         it('TC-090 Choose only one story type at a time: "Rags and Reaches"', function () {
//             $(sel.story).click();
//             let type = $$(sel.storyType)[storyTypes.ragsAndRiches].getAttribute('title');
//             expect(type).toEqual(exp.storyType5);
//         });
//
//         it('TC-091 The dropdown is in a collapsed way after choosing "Rags and Reaches"', function () {
//             $(sel.story).click();
//             $$(sel.storyType)[storyTypes.ragsAndRiches].click();
//             let dropDownMenu = $(sel.storyDropDown).isDisplayed();
//             expect(dropDownMenu).toEqual(false);
//         });
//         it('TC-092 Choose only one story type at a time: "Tragedy"', function () {
//             $(sel.story).click();
//             let type = $$(sel.storyType)[storyTypes.tragedy].getAttribute('title');
//             expect(type).toEqual(exp.storyType6);
//         });
//
//         it('TC-093 The dropdown is in a collapsed way after choosing "Tragedy"', function () {
//             $(sel.story).click();
//             $$(sel.storyType)[storyTypes.tragedy].click();
//             let dropDownMenu = $(sel.storyDropDown).isDisplayed();
//             expect(dropDownMenu).toEqual(false);
//         });
//         it('TC-094 Choose only one story type at a time: "Comedy"', function () {
//             $(sel.story).click();
//             let type = $$(sel.storyType)[storyTypes.comedy].getAttribute('title');
//             expect(type).toEqual(exp.storyType7);
//         });
//
//         it('TC-095 The dropdown is in a collapsed way after choosing "Comedy"', function () {
//             $(sel.story).click();
//             $$(sel.storyType)[storyTypes.comedy].click();
//             let dropDownMenu = $(sel.storyDropDown).isDisplayed();
//             expect(dropDownMenu).toEqual(false);
//         });
//         it('TC-096 Change the type of the story from "Comedy" to "Tragedy"', function () {
//             $(sel.story).click();
//             $$(sel.storyList)[storyTypes.comedy].click();
//             $(sel.story).click();
//             $$(sel.storyList)[storyTypes.tragedy].click();
//             let storyType = $(sel.story).getText();
//             expect(storyType).toEqual(exp.storyType6);
//         });
//         it('TC-097 Change the type of the story from "Tragedy" to "Rags and Riches"', function () {
//             $(sel.story).click();
//             $$(sel.storyList)[storyTypes.tragedy].click();
//             $(sel.story).click();
//             $$(sel.storyList)[storyTypes.ragsAndRiches].click();
//             let storyType = $(sel.story).getText();
//             expect(storyType).toEqual(exp.storyType5);
//
//         });
//         it('TC-098 Change the type of the story from "Rags and Riches" to "Journey and Return"', function () {
//             $(sel.story).click();
//             $$(sel.storyList)[storyTypes.ragsAndRiches].click();
//             $(sel.story).click();
//             $$(sel.storyList)[storyTypes.journeyAndReturn].click();
//             let storyType = $(sel.story).getText();
//             expect(storyType).toEqual(exp.storyType4);
//         });
//         it('TC-099 Change the type of the story from "Journey and Return" to "Quest"', function () {
//             $(sel.story).click();
//             $$(sel.storyList)[storyTypes.journeyAndReturn].click();
//             $(sel.story).click();
//             $$(sel.storyList)[storyTypes.quest].click();
//             let storyType = $(sel.story).getText();
//             expect(storyType).toEqual(exp.storyType3);
//         });
//         it('TC-100 Change the type of the story from "Quest" to "Rebirth"', function () {
//             $(sel.story).click();
//             $$(sel.storyList)[storyTypes.quest].click();
//             $(sel.story).click();
//             $$(sel.storyList)[storyTypes.rebirth].click();
//             let storyType = $(sel.story).getText();
//             expect(storyType).toEqual(exp.storyType2);
//         });
//         it('TC-101 Change the type of the story from "Rebirth to "Overcoming the monster"', function () {
//             $(sel.story).click();
//             $$(sel.storyList)[storyTypes.rebirth].click();
//             $(sel.story).click();
//             $$(sel.storyList)[storyTypes.overcomingTheMonster].click();
//             let storyType = $(sel.story).getText();
//             expect(storyType).toEqual(exp.storyType1);
//         });
//         it('TC-102 Change the type of the story from "Overcoming the monster" to "Comedy"', function () {
//             $(sel.story).click();
//             $$(sel.storyList)[storyTypes.overcomingTheMonster].click();
//             $(sel.story).click();
//             $$(sel.storyList)[storyTypes.comedy].click();
//             let storyType = $(sel.story).getText();
//             expect(storyType).toEqual(exp.storyType7);
//         });
//         describe('Negative cases', function () {
//
//             it('TC-104 Story Type field is required ', function () {
//                 $(sel.name).setValue(name.default);
//                 $$(sel.radioButtons)[gender.she].click();
//                 $(sel.age).setValue(age.default);
//                 let submitBtn = $(sel.submit).isEnabled();
//                 expect(submitBtn).toEqual(false);
//             });
//         });
//     });
// });
