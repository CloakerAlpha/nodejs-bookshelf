const { nanoid } = require('nanoid')
const books = require('../main_book')

// method untuk menambah buku
const addBook = (request, h) => {
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload

  if (!name) {
    // respon GAGAL ketika properti name pada request body tidak ada
    const response = h
      .response({
        status: 'fail',
        message: 'Gagal menambahkan buku. Mohon isi nama buku'
      })
      .code(400)
    return response
  }

  if (readPage > pageCount) {
    // respon GAGAL ketika nilai properti readPage yang lebih besar dari nilai properti pageCount
    const response = h
      .response({
        status: 'fail',
        message:
            'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
      })
      .code(400)
    return response
  }

  const id = nanoid(7) // ukuran string hasil generate nanoid yaitu 7 karakter
  const insertedAt = new Date().toISOString() // setting tanggal ketika buku ditambahkan
  const updatedAt = insertedAt // karena nilainya sama sehingga tinggal digunakan ulang dari variabel sebelumnya
  const finished = pageCount === readPage // untuk mengecek kondisi apakah jumlah pagecount sama dengan jumlah readpage

  // membuat objek buku yang memiliki properti yg akan diolah
  const newBook = {
    name, year, author, summary, publisher, pageCount, readPage, finished, reading, id, insertedAt, updatedAt
  }

  books.push(newBook) // push nilai yang telah ditentukan ke variabel newBook
  const isSuccess = books.filter((bufferId) => bufferId.id === id).length > 0 // mengecek apakah buku berhasil ditambahkan

  if (isSuccess) { // jika buku berhasil ditambahkan maka kode dibawah akan dieksekusi
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id
      }
    })
    response.code(201)
    return response
  }

  // Server gagal memasukkan buku karena alasan umum (generic error).
  const response = h
    .response({
      status: 'fail',
      message: 'Buku gagal ditambahkan'
    })
    .code(500)
  return response
}

module.exports = { addBook }// ekspor nilai modul untuk digunakan ke route
