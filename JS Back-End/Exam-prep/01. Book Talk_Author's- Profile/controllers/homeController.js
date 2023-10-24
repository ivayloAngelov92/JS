const { getAll } = require('../services/bookService.js');
const { parseError } = require('../util/parser.js');

const homeController = require('express').Router(); // Създаваме си самия контролер

// ДА СЕ СМЕНИ С КОНТРОЛЕРА ОТ ЗАДАНИЕТО

homeController.get('/', async (req, res) => {
	try {
		res.render('home', {
			title: 'Home Page',
		});
	} catch (error) {
		res.render('home', {
			title: 'Home Page',
			errors: parseError(error),
		});
	}
});

///////////////////////////////////// CATALOG //////////////////////////////
homeController.get('/catalog', async (req, res) => {
	try {
		const books = await getAll();
		res.render('catalog', {
			title: 'Catalog Page',
			books,
		});
	} catch (error) {
		res.render('catalog', {
			title: 'Catalog Page',
			errors: parseError(error),
		});
	}
});

module.exports = homeController;