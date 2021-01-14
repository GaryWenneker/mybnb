/* Api methods to call /functions */

const getId = () => {
  var desiredMaxLength = 19
  var randomNumber = '';
  for (var i = 0; i < desiredMaxLength; i++) {
    randomNumber += Math.floor(Math.random() * 10);
  }
  return randomNumber;
};

const create = (klantId, data) => {
  return fetch(`/.netlify/functions/klanten-add/${klantId}`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const read = (klantId) => {
  return fetch(`/.netlify/functions/klanten-read/${klantId}`).then((response) => {
    return response.json()
  })
}

const readAll = () => {
  return fetch('/.netlify/functions/klanten-read-all').then((response) => {
    return response.json()
  })
}

const update = (klantId, data) => {
  return fetch(`/.netlify/functions/klanten-update/${klantId}`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const deleteKlant = (klantId) => {
  return fetch(`/.netlify/functions/klanten-delete/${klantId}`, {
    method: 'POST',
  }).then(response => {
    return response.json()
  })
}

const batchDeleteKlant = (klantIds) => {
  return fetch(`/.netlify/functions/klanten-delete-batch`, {
    body: JSON.stringify({
      ids: klantIds
    }),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

export default {
  getId,
  create,
  read,
  readAll,
  update,
  delete: deleteKlant,
  batchDelete: batchDeleteKlant
}
