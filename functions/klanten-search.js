// /* Import faunaDB sdk */
// const faunadb = require('faunadb')
// const getId = require('./utils/getId')
// const q = faunadb.query

// /* export our lambda function as named "handler" export */
// exports.handler = async (event, context) => {
//   /* configure faunaDB Client with our secret */
//   const client = new faunadb.Client({
//     secret: process.env.FAUNADB_SECRET
//   })
//   /* parse the string body into a useable JS object */
//   const data = JSON.parse(event.body)
//   const id = getId(event.path)
//   console.log('Function `klanten-add` invoked', data)
//   const klantItem = {
//     data: data
//   }
//   /* construct the fauna query */
//   return client.query(
//     q.Map(
//       q.Filter(
//         q.Paginate(q.Match(q.Ref('indexes/all_klanten'))),

//       )
//     ))
//     .then((response) => {
//       console.log('success', response)
//       /* Success! return the response with statusCode 200 */
//       return {
//         statusCode: 200,
//         body: JSON.stringify(response)
//       }
//     }).catch((error) => {
//       console.log('error', error)
//       /* Error! return the error with statusCode 400 */
//       return {
//         statusCode: 400,
//         body: JSON.stringify(error)
//       }
//     })
// }