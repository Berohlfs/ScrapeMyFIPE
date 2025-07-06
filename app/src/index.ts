// Libs
import { CronJob } from "cron"
import dotenv from 'dotenv'
dotenv.config()
// Scripts
import { scrape } from './scripts/scrape'
import { sendEmail } from "./scripts/sendEmail"
import { postFIPE } from "./scripts/sheets"

const main = async()=> {
    try{
        const fipe = await scrape()
        await sendEmail(fipe)
        await postFIPE(fipe)
    }catch(error){
        if(error instanceof Error){
            console.error(error.message)
        }else{
            console.error(error)
        }
    }
}

new CronJob(
	'* * 0 15 * *', 
	main, 
	null,
	true,
)

// second         0-59
// minute         0-59
// hour           0-23
// day of month   1-31
// month          1-12
// day of week    0-7 (0 or 7 is Sunday)
