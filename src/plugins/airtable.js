import Airtable from 'airtable'
import config from '@/config/index'

console.log(config);
const base = new Airtable({ apiKey: config.airtableApiKey }).base(config.airtableBaseId);

console.log(base);

export default base;