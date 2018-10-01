const assert = require('assert');
var _selectors = require('./selectors')

const {
    title
} = require('taiko');

step("Assert ok <table>", async function(table) {
	await assert.ok(_selectors.getElement(table))
});

step("Assert title to be <userTitle>", async function(userTitle) {
	assert.ok((await title()).includes(userTitle))
});

step("Assert Exists <table>", async function(table){
	assert.equal("Exists",(await _selectors.getElement(table).exists()).description);
});

step("assert text to be <text> <table>", async function(text, table) {
	assert.equal(await _selectors.getElement(table).text(),text)
});

step("Assert text is not empty <table>", async function(table) {
	assert.ok(await _selectors.getElement(table).text() != '');
});