const books = require('../main_book')

// method untuk melihat buku sesuai ID
const getBookID = (request, h) => {
  const { bookId } = request.params
  // method untuk mencari buku dengan ID tertentu dimulai dari index ke 0 dari array
  const book = books.filter((bufferId) => bufferId.id === bookId)[0]

  if (book) {
    // respon jika menemukan buku dengan id yang dicari
    const response = h
      .response({
        status: 'success',
        data: {
          book
        }
      })
      .code(200)
    return response
  }

  // respon jika TIDAK menemukan buku dengan id yang dicari
  const response = h
    .response({
      status: 'fail',
      message: 'Buku tidak ditemukan'
    })
    .code(404)
  return response
}

module.exports = { getBookID } // ekspor nilai modul untuk digunakan ke route
