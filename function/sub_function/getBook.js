const books = require('../main_book')

// method untuk melihat semua buku
const getBook = (request, h) => {
  const { reading, finished } = request.query // melakukan permintaan query yang dimasukkan nilainya ke variabel reading dan finished

  // mengecek nilai reading dan finished, apabila memenuhi maka kode dibawah akak dieksekusi
  if (!reading && !finished) {
    const response = h
      .response({
        status: 'success',
        data: {
          books: books.map((book) => ({ // melakukan mapping nilai array dari book untuk digunakan
            id: book.id,
            name: book.name,
            publisher: book.publisher
          }))
        }
      })
      .code(200)
    return response
  }

  if (reading) { // jika nilai reading dikirim klien
    // method query reading dipakai
    const filteredBooksReading = books.filter(
      (book) => Number(book.reading) === Number(reading)
    )

    const response = h
      .response({
        status: 'success',
        data: {
          books: filteredBooksReading.map((book) => ({
            id: book.id,
            name: book.name,
            publisher: book.publisher
          }))
        }
      })
      .code(200)

    return response
  }

  // jika nilai finished dikirim klien
  const filteredBooksFinished = books.filter(
    (book) => Number(book.finished) === Number(finished)
  )

  const response = h
    .response({
      status: 'success',
      data: {
        books: filteredBooksFinished.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher
        }))
      }
    })
    .code(200)

  return response
}

module.exports = { getBook }// ekspor nilai modul untuk digunakan ke route
