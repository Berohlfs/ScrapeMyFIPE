// Libs
import axios from "axios"

export const postFIPE = async(fipe: string)=> {
    try{
        console.log('\n\n================================ STEP 03: Updating sheets.')
        console.log('Sending data...')
        await axios.post('https://sheetdb.io/api/v1/fwj26g5ujeln1', {
            fipe
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.SHEETS_DB_BEARER_TOKEN}`
            }
        })
        console.log('Data sent successfully.')
    }catch(error){
        console.error(error)
        throw Error('Failed to post FIPE into sheets.')
    }
}
