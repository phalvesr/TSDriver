import * as puppeteer from "puppeteer-core";
import { PathHelper } from "../../helpers/index"
import { IDriverParameters, ILoginInstagram } from "../Interfaces/index";
import * as dotenv from "dotenv";

dotenv.config();

export async function driver<T>({ 
    url,
    browserPath = PathHelper.GetEdgePath(),
    pageExecutionLambda,
} : IDriverParameters<T>): Promise<void> {
    
    let page: puppeteer.Page;

    try {
        await DriveMeTo(url);
    } catch(e) {
        console.log(e)
        console.error("Erro ao fazer navegação");
    }

    async function DriveMeTo(url: string) {
        
        const browser: puppeteer.Browser = await puppeteer.launch({
            headless: false,
            executablePath: browserPath
        });
        page = await browser.newPage();
        await page.goto(url);
        
        if (page.url().includes("accounts")) {
            
            await logInToInstagram({ 
                username: process.env.INSTAGRAM_USERNAME,
                password: process.env.INSTAGRAM_PASSWORD 
            });
        }

        await page.goto(url);
        const a = await page.evaluate(pageExecutionLambda);
        console.log(a);
        // browser.close();
    }

    async function logInToInstagram({ username, password } : ILoginInstagram): Promise<void> {

        await page.waitForSelector('input[name="username"]', {
            visible: true
        });
        await page.waitForSelector('input[name="password"]', {
            visible: true
        });
            
            
        await page.type('input[name="username"]', username, { delay: Math.random() * 1000 });
        await page.type('input[name="password"]', password, { delay: Math.random() * 1000 });
        await page.click('div[class="                     Igw0E     IwRSH      eGOV_         _4EzTm                                                                                                              "]', { 
            delay: Math.random() * 360 
        });

        return;
    }
}