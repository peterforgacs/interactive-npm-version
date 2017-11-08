#!/usr/bin/env node
'use strict';
const exec = require('child_process').exec;
const inquirer = require('inquirer');

const isAllowed = {
	type: 'confirm',
	name: 'allowed',
	message: 'Bump package.json version?',
	default: false
};

const bump = {
	type: 'list',
	name: 'size',
	message: 'What is the size of the change?',
	choices: ['Patch', 'Minor', 'Major'],
	default: 'Patch',
	filter(val) {
		return val.toLowerCase();
	}
};

function bumpTo(size) {
	exec(`npm version ${size}`, (err, stdout) => {
		if (err) {
			console.error(err);
			process.exit(1);
		}

		console.log(stdout);
	});
}

function main() {
	inquirer.prompt(isAllowed)
	.then(response => response.allowed ? inquirer.prompt(bump) : process.exit(0))
	.then(bump => bumpTo(bump.size));
}

main();
