/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query


exports.handler = (event, context) => {
    console.log('Function `klanten-read-all` invoked')
    console.log(`FAUNADB_SECRET: ${process.env.FAUNADB_SECRET}`)
    /* configure faunaDB Client with our secret */
    const client = new faunadb.Client({
        secret: process.env.FAUNADB_SECRET
    })
    return client.query(q.Paginate(q.Match(q.Ref('indexes/all_klanten'))))
        .then((response) => {
            const klantRefs = response.data
            console.log('Klanten refs', klantRefs)
            console.log(`${klantRefs.length} klants found`)
            // create new query out of klant refs. http://bit.ly/2LG3MLg
            const getAllKlantDataQuery = klantRefs.map((ref) => {
                return q.Get(ref)
            })
            // then query the refs
            return client.query(getAllKlantDataQuery).then((ret) => {
                return {
                    statusCode: 200,
                    body: JSON.stringify(ret)
                }
            })
        }).catch((error) => {
            console.log('error', error)
            return {
                statusCode: 400,
                body: JSON.stringify(error)
            }
        })
}
