const puppeteer = require('puppeteer');
const prompts = require('prompts');



	
(async () => {
	var browser = await puppeteer.launch({
		ignoreHTTPSErrors: true, headless: false, timeout: 0, slowMo: 50
	});
	
	const station_prompt = await prompts({
		type: 'select',
		name: 'station_prompt',
		message: 'Select single station or all stations:',
		choices: [
			{ title: 'Single',  value: 1 },
			{ title: 'All', value: 2},
		]
	});
 
	//console.log(station_prompt);
	
	switch(station_prompt.station_prompt) {
		case 1: //----------------Single Station------------
				const station_prompt_no = await prompts({
					type: 'number',
					name: 'station_prompt_no',
					message: 'Enter station number:'
				});
				
				var page = await browser.newPage();
				page.on('dialog', async dialog => {
					await dialog.accept();
				});
				var STATION_SELECTOR = 'https://172.16.'+station_prompt_no.station_prompt_no+'.1';
				try {
					await page.goto(STATION_SELECTOR);
					const USERNAME_SELECTOR = '#username';
					const PASSWORD_SELECTOR = '#password';
					const BUTTON_SELECTOR = '#login';
					
					await page.click(USERNAME_SELECTOR);
					await page.keyboard.type('arctic-adm');

					await page.click(PASSWORD_SELECTOR);
					await page.keyboard.type('arcticm2m');

					await page.click(BUTTON_SELECTOR);
					await page.waitFor(2000);
					
					await page.click('#menu_network_smsconf');
					await page.waitFor(2000);
					const input1 = await page.$('#get_allowed');
					await input1.click({ clickCount: 3 });
					await input1.type('+60126036263');
					const input2 = await page.$('#set_allowed');
					await input2.click({ clickCount: 3 });
					await input2.type('+60126036263');
					
					await page.click('#submit');
					await page.waitFor(3000);
					await page.click('body > table.frame > tbody > tr:nth-child(1) > td.topbar > table > tbody > tr:nth-child(2) > td > a');
					await page.waitFor(2000);
					await page.click('#reboot');
				} 
				catch (e) {
					console.log('Station https://172.16.'+station_prompt_no.station_prompt_no+'.1 is not online / available.');
				}
				
				browser.close();
		break;
		case 2: //----------------All Station------------
				var page = await browser.newPage();
				page.on('dialog', async dialog => {
					await dialog.accept();
				});
				for (var station_no = 1; station_no <= 66; station_no++){
						var STATION_SELECTOR = 'https://172.16.'+station_no+'.1';
					try {
						await page.goto(STATION_SELECTOR);
						
						const USERNAME_SELECTOR = '#username';
						const PASSWORD_SELECTOR = '#password';
						const BUTTON_SELECTOR = '#login';
						
						await page.click(USERNAME_SELECTOR);
						await page.keyboard.type('arctic-adm');

						await page.click(PASSWORD_SELECTOR);
						await page.keyboard.type('arcticm2m');

						await page.click(BUTTON_SELECTOR);
						await page.waitFor(2000);
						await page.click('#menu_network_smsconf');
						
						await page.waitFor(2000);
						const input1 = await page.$('#get_allowed');
						await input1.click({ clickCount: 3 });
						await input1.type('+60126036263');
						const input2 = await page.$('#set_allowed');
						await input2.click({ clickCount: 3 });
						await input2.type('+60126036263');
						
						await page.click('#submit');
						await page.waitFor(3000);
						await page.click('body > table.frame > tbody > tr:nth-child(1) > td.topbar > table > tbody > tr:nth-child(2) > td > a');
						await page.waitFor(2000);
						await page.click('#reboot');
					} 
					catch (e) {
						console.log('Station https://172.16.'+station_no+'.1 is not online / available.');
					}
				}
				
				browser.close();
		break;
		default:
		console.log("Wrong value entered, process will now terminated.");
		process.exit();
		break;
	}
	//browser.close();
})();