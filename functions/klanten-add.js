/* Import faunaDB sdk */
const faunadb = require('faunadb')
const getId = require('./utils/getId')
const q = faunadb.query

const klant = {
  klantnummer: "20210002",
  bedrijfsnaam: "van Maas tot Maas",
  contactpersoon: "Nathalie Strijker",
  voornaam: "Gary",
  voorvoegselAchternaam: "",
  achternaam: "Wenneker",
  telefoonnummer: "0626937737",
  emailadres: "garywenneeker@gmail.com",
  adres: [
    {
      vanafDatum: "26-01-2021",
      straatnaam: "Sint Odradastraat",
      huisnummer: 6,
      huisnummertoevoeging: "",
      postcode: "5335LL",
      woonplaatsnaam: "Alem",
      landcode: "NL"
    }
  ]
};
/* export our lambda function as named "handler" export */
exports.handler = async (event, context) => {
  /* configure faunaDB Client with our secret */
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET
  })
  /* parse the string body into a useable JS object */
  const data = JSON.parse(event.body)
  const id = getId(event.path)
  console.log('Function `klanten-add` invoked', data)
  const klantItem = {
    data: data
  }
  /* construct the fauna query */
  return client.query(
    q.Create(q.Ref(`collections/klanten/${id}`), klantItem))
    .then((response) => {
      console.log('success', response)
      /* Success! return the response with statusCode 200 */
      return {
        statusCode: 200,
        body: JSON.stringify(response)
      }
    }).catch((error) => {
      console.log('error', error)
      /* Error! return the error with statusCode 400 */
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}
