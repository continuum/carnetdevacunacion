import Airtable from 'airtable'

const base = new Airtable({ apiKey: config.airtableApiKey }).base(config.airtableBaseId)

export default base;