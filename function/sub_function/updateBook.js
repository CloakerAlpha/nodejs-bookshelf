const books = require('../main_book')

// method untuk mengubah atau memperbarui data buku sesuai ID
const updateBook = (request, h) => {
  const { bookId } = request.params
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload

  if (!name) {
    // Client tidak melampirkan properti name pada request body
    const response = h
      .response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Mohon isi nama buku'
      })
      .code(400)
    return response
  }

  if (readPage > pageCount) {
    // Client melampirkan nilai properti readPage yang lebih besar dari nilai properti pageCount
    const response = h
      .response({
        status: 'fail',
        message:
            'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount'
      })
      .code(400)
    return response
  }

  const updatedAt = new Date().toISOString()
  const finished = pageCount === readPage
  const index = books.findIndex((note) => note.id === bookId)

  if (index !== -1) {
    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      finished,
      updatedAt
    }

    const response = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui'
    })
    response.code(200)
    return response
  }
  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan'
  })
  response.code(404)
  return response
}

module.exports = { updateBook } // ekspor nilai modul untuk digunakan ke route
