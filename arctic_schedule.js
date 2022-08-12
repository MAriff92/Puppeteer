const puppeteer = require('puppeteer');
const prompts = require('prompts');
const fs = require('fs');



	
(async () => {
	var browser = await puppeteer.launch({
		ignoreHTTPSErrors: true, headless: false, timeout: 0, slowMo: 50
	});

//----------------All Station------------
				
				var today = new Date();
				var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
				var time = today.getHours() +''+ today.getMinutes();
				var dateTime = date+' '+time;
				
				var page = await browser.newPage();
				fs.writeFile('C:/Scraper/arctic/Log/Arctic Log '+dateTime+'.txt', 'ARCTIC SCHEDULER LOG \r\n', function (err) {
					if (err) throw err;
				});
				
				page.on('dialog', async dialog => {
					await dialog.accept();
				});
				
				for (var station_no = 1; station_no <= 66; station_no++){
						var STATION_SELECTOR = 'https://172.16.'+station_no+'.1/tools_reboot.php';
					try {
						await page.goto(STATION_SELECTOR);
						//await page.waitForNavigation({waitUntil: 'networkidle0'});
						
						const USERNAME_SELECTOR = '#username';
						const PASSWORD_SELECTOR = '#password';
						const BUTTON_SELECTOR = '#login';
						
						await page.click(USERNAME_SELECTOR);
						await page.keyboard.type('arctic-adm');

						await page.click(PASSWORD_SELECTOR);
						await page.keyboard.type('arcticm2m');

						await page.click(BUTTON_SELECTOR,{waitUntil: 'domcontentloaded'});
						await page.waitFor(2000);
						//await page.waitForNavigation({waitUntil: 'networkidle0'});
						
						//await page.click('#menu_tools_reboot',{waitUntil: 'domcontentloaded'});
						//await page.waitForNavigation({waitUntil: 'networkidle0'});
						
						await page.click('#reboot');
						var return_log = 'Station https://172.16.'+station_no+'.1 DONE.';
					} 
					catch (e) {
						console.log('Station https://172.16.'+station_no+'.1 is not online / available.');
						var return_log = (e);
					}
					console.log(return_log);
					fs.appendFile('C:/Scraper/arctic/Log/Arctic Log '+dateTime+'.txt', return_log+'\r\n', function (err) {
						if (err) throw err;
					});
				}
				
				for (var station_no = 101; station_no <= 103; station_no++){
						var STATION_SELECTOR = 'https://172.16.'+station_no+'.1/tools_reboot.php';
					try {
						await page.goto(STATION_SELECTOR);
						//await page.waitForNavigation({waitUntil: 'networkidle0'});
						
						const USERNAME_SELECTOR = '#username';
						const PASSWORD_SELECTOR = '#password';
						const BUTTON_SELECTOR = '#login';
						
						await page.click(USERNAME_SELECTOR);
						await page.keyboard.type('arctic-adm');

						await page.click(PASSWORD_SELECTOR);
						await page.keyboard.type('arcticm2m');

						await page.click(BUTTON_SELECTOR,{waitUntil: 'domcontentloaded'});
						await page.waitFor(2000);
						//await page.waitForNavigation({waitUntil: 'networkidle0'});
						
						//await page.click('#menu_tools_reboot',{waitUntil: 'domcontentloaded'});
						//await page.waitForNavigation({waitUntil: 'networkidle0'});
						
						await page.click('#reboot');
						var return_log = 'Station https://172.16.'+station_no+'.1 DONE.';
					} 
					catch (e) {
						console.log('Station https://172.16.'+station_no+'.1 is not online / available.');
						var return_log = (e);
					}
					console.log(return_log);
					fs.appendFile('C:/Scraper/arctic/Log/Arctic Log '+dateTime+'.txt', return_log+'\r\n', function (err) {
						if (err) throw err;
					});
				}
				
				for (var station_no = 22; station_no <= 22; station_no++){
						var STATION_SELECTOR = 'https://172.17.'+station_no+'.1/tools_reboot.php';
					try {
						await page.goto(STATION_SELECTOR);
						//await page.waitForNavigation({waitUntil: 'networkidle0'});
						
						const USERNAME_SELECTOR = '#username';
						const PASSWORD_SELECTOR = '#password';
						const BUTTON_SELECTOR = '#login';
						
						await page.click(USERNAME_SELECTOR);
						await page.keyboard.type('arctic-adm');

						await page.click(PASSWORD_SELECTOR);
						await page.keyboard.type('arcticm2m');

						await page.click(BUTTON_SELECTOR,{waitUntil: 'domcontentloaded'});
						await page.waitFor(2000);
						//await page.waitForNavigation({waitUntil: 'networkidle0'});
						
						//await page.click('#menu_tools_reboot',{waitUntil: 'domcontentloaded'});
						//await page.waitForNavigation({waitUntil: 'networkidle0'});
						
						await page.click('#reboot');
						var return_log = 'Station https://172.17.'+station_no+'.1 DONE.';
					} 
					catch (e) {
						console.log('Station https://172.17.'+station_no+'.1 is not online / available.');
						var return_log = (e);
					}
					console.log(return_log);
					fs.appendFile('C:/Scraper/arctic/Log/Arctic Log '+dateTime+'.txt', return_log+'\r\n', function (err) {
						if (err) throw err;
					});
				}
				
				for (var station_no = 2; station_no <= 2; station_no++){
						var STATION_SELECTOR = 'https://172.18.'+station_no+'.1/tools_reboot.php';
					try {
						await page.goto(STATION_SELECTOR);
						//await page.waitForNavigation({waitUntil: 'networkidle0'});
						
						const USERNAME_SELECTOR = '#username';
						const PASSWORD_SELECTOR = '#password';
						const BUTTON_SELECTOR = '#login';
						
						await page.click(USERNAME_SELECTOR);
						await page.keyboard.type('arctic-adm');

						await page.click(PASSWORD_SELECTOR);
						await page.keyboard.type('arcticm2m');

						await page.click(BUTTON_SELECTOR,{waitUntil: 'domcontentloaded'});
						await page.waitFor(2000);
						//await page.waitForNavigation({waitUntil: 'networkidle0'});
						
						//await page.click('#menu_tools_reboot',{waitUntil: 'domcontentloaded'});
						//await page.waitForNavigation({waitUntil: 'networkidle0'});
						
						await page.click('#reboot');
						var return_log = 'Station https://172.18.'+station_no+'.1 DONE.';
					} 
					catch (e) {
						console.log('Station https://172.18.'+station_no+'.1 is not online / available.');
						var return_log = (e);
					}
					console.log(return_log);
					fs.appendFile('C:/Scraper/arctic/Log/Arctic Log '+dateTime+'.txt', return_log+'\r\n', function (err) {
						if (err) throw err;
					});
				}
				
				browser.close();
	//browser.close();
})();