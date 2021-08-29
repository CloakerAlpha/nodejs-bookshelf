const books = require('../main_book')

// method untuk menghapus buku sesuai ID
const deleteBook = (request, h) => {
  const { bookId } = request.params

  const index2 = books.findIndex((a) => a.id === bookId) // find book by id

  if (index2 !== -1) {
    books.splice(index2, 1)

    // apabila menemukan ID buku yang dicari telah dihapus dari daftar buku karena akan membuat nilai index menjadi -1
    const response = h
      .response({
        status: 'success',
        message: 'Buku berhasil dihapus'
      })
      .code(200)
    return response
  }

  // apabila ID yang dikirim klien untuk dihapus tidak sesuai dengan buku manapun
  const response = h
    .response({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan'
    })
    .code(404)
  return response
}

module.exports = { deleteBook } // ekspor nilai modul untuk digunakan ke route
