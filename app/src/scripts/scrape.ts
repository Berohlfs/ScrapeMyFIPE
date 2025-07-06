// Libs
import puppeteer from "puppeteer"

const extractNumber = (data: string)=> {
    const numbers = ['0','1','2','3','4','5','6','7','8','9']
    const extracted = data.split('').reduce((accumulator, current)=> {
        if(numbers.includes(current)){
            return accumulator + current
        }else{
            return accumulator
        }
    }, '')
    return extracted
}

export const scrape = async()=> {
    try{
        console.log('\n\n================================ STEP 01: Scrapping.')
        console.log('Opening Browser...')
        const browser = await puppeteer.launch()

        console.log('Opening the page...')
        const page = await browser.newPage()
        await page.goto('https://www.icarros.com.br/tabela-fipe/volkswagen/fox/2022/fox-1.6-connect#:~:text=Pre%C3%A7o%20FIPE%20R%24%2066.369')
        console.log('Page loaded.')

        console.log('Selecting the text element.')
        const price_section = await page.waitForSelector('div.card--detail')

        if(!price_section){
            throw 'Price section not found.'
        }

        let fipe = await price_section.evaluate(section=> {
            const text_element = section.getElementsByClassName('title--price__highlight')[1]
            return text_element.textContent
        })
        if(!fipe){
            throw 'Price not found.'
        }
        fipe = extractNumber(fipe)
        console.log('Element selected.')
        console.log(`FIPE: ${fipe}`)

        await browser.close()
        console.log('Browser closed.')

        return fipe
    }catch(error){
        console.error(error)
        throw Error('Failed to scrape FIPE.')
    }
}
