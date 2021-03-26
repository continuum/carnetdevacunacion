import base from '@/plugins/airtable';

base('Owner').select().eachPage(function page(records) {
    records.forEach(element => {
        console.log(element.fields);
    });
});