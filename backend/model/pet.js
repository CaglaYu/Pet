const mariadb = require('mariadb');
const Schema = mariadb.Schema;

// Define collection and schema
let Pet = new Schema({
  pet_name: {
    type: String
  },
  pet_type: {
    type: Boolean
  },
  statu: { //görüldü OR sahip çıkıldı
    type: Boolean
  },
  subjects: {
    type: Array
  },
  tarih: {
    type: Date
  },
  saat: {
    type: String
  },
  adres1: {
    type: String
  },
  adres2: {
    type: String
  },
  city: {
    type: String
  },
  mahalle: {
    type: String
  },
  durum: {
    type: Number
  },
  sex: {
    type: Number
  },
  tur: {
    type: String
  },
  yukseklik: {
    type: Number
  },
  kilo: {
    type: Number
  },
  renk1: {
    type: String
  },
  renk2: {
    type: String
  },
  renk3: {
    type: String
  },
  tasma: {
    type: Boolean
  },
  ozellik: {
    type: String
  },
  foto1: {
    type: File
  },
  foto2: {
    type: File
  },
  foto3: {
    type: File
  },
  logged: {
    type: Date
  },
  bulanuser: {
    type: Number
  },
  arayanuser: {
    type: Number
  }

}, {
  collection: 'pets'
})

module.exports = mariadb.model('pet', pet)