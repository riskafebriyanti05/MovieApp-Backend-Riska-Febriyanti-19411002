const requestResponse = {
    gagal: (pesan) => {
        return {
            sukses: false,
            pesan: pesan
        }
    },
    sukses: (pesan) => {
        return {
            sukses: true,
            pesan: pesan
        }
    },
    serverError: {
        sukses: false,
        pesan: 'Maaf terjadi kesalahan diserver'
    },
    suksesLogin: (data) => {
        return {
        sukses: true,
        pesan: 'Berhasil login',
        data: data
        }
    },
    suksesWithData: (data) => {
        return {
            sukses: true,
            pesan: 'Berhasil Memuat Data',
            data: data
        }
    }
}
module.exports = {requestResponse}