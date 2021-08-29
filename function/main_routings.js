const { addBook } = require('./sub_function/addBook')
const { getBook } = require('./sub_function/getBook')
const { getBookID } = require('./sub_function/getBookID')
const { updateBook } = require('./sub_function/updateBook')
const { deleteBook } = require('./sub_function/deleteBook')

const mainRouting = [
  {
    // KRITERIA 1 API dapat menyimpan buku
    method: 'POST',
    path: '/books',
    // ( ganti dengan handler yg sesuai )  handler: () => {},
    handler: addBook
  },
  {
    // KRITERIA 2 API dapat menampilkan seluruh buku
    method: 'GET',
    path: '/books',
    // ( ganti dengan handler yg sesuai )  handler: () => {},
    handler: getBook
  },
  {
    // KRITERIA 3 API dapat menampilkan detail buku
    method: 'GET',
    path: '/books/{bookId}',
    // ( ganti dengan handler yg sesuai )  handler: () => {},
    handler: getBookID
  },
  {
    // KRITERIA 4 API dapat memperbarui data buku
    method: 'PUT',
    path: '/books/{bookId}',
    // ( ganti dengan handler yg sesuai )  handler: () => {},
    handler: updateBook
  },
  {
    // KRITERIA 5 API dapat menghapus  buku
    method: 'DELETE',
    path: '/books/{bookId}',
    // ( ganti dengan handler yg sesuai )  handler: () => {},
    handler: deleteBook
  }
]
module.exports = mainRouting
