console.log('This is an inventory managment application for making works easier and reliable.')
class Item {
  constructor(id, system, brand, modelCode, description, unit, quantity) {
    this.id = id // material number
    this.system = system // related system
    this.brand = brand // material brand
    this.modelCode = modelCode // material model code
    this.description = description // material description
    this.unit = unit // material unit
    this.quantity = quantity // material quantity
    defects = [] //
    faultlessQty = ''
    defectiveQty = ''
    totalQty = faultlessQty + defectiveQty
  }
}

let defectId = 0

class defect {
  constructor(id, quantity) {
    this.id = id
    this.quantity = quantity

    this.defectId = defectId + 1 //?
  }
}

class delivery {
  constructor(id, quantity) {
    this.id = id
    this.quantity = quantity
  }
}

// const numan = {
//   name: 'Numan',
//   picnics: [],
//   joinPicnic(picnic) {
//     picnic.attendees.push(this)
//     this.picnics.push(picnic)
//   },
// }

// const armagansPicnic = {
//   name: "Armagan's Picnic",
//   location: 'Templehofer Feld',
//   date: '2023-05-01',
//   attendees: [armagan],
//   items: [],
// }

// const numansPicnic = {
//   name: "Numann's Picnic",
//   location: 'Hasenheide',
//   date: '2023-05-02',
//   attendees: [numan],
//   items: [],
// }

// numan.joinPicnic(armagansPicnic)
// armangan.joinPicnic(numansPicnic)
