console.log('This is an inventory managment application for making works easier and reliable.')
// This app will manage inventory of warehouse and will be able to track inventory items and replacements via Vendors

/*
 */

class InventoryItem {
  constructor(
    // id,
    system,
    brand,
    modelCode,
    description,
    unit,
    availableQuantity,
    defectiveQuantity,
    inServiceQuantity,
    disposedQuantity
  ) {
    //this.id = id // item number, this property will be replaced with database id when it is connected to database
    this.system = system // related system, selection from dropdown: system list to be created
    this.brand = brand // selection from dropdown: vendor list to be created
    this.modelCode = modelCode // if there is no model code, it will be replaced with description or auto-generated unique code
    this.description = description
    this.unit = unit // selection from dropdown: piece, meter, kilogram, etc.
    this.availableQuantity = availableQuantity // new or repaired items quantity
    this.defectiveQuantity = defectiveQuantity // defective items quantity
    this.inServiceQuantity = inServiceQuantity // items sent to vendor or repair shop for inspenction and replace or repair depends warranty status
    this.disposedQuantity = disposedQuantity // disposed items quantity, will be functional during later stages of the app development
    // price = '' // LATER-STAGE, purchased prices with dates
  }
}

class Incident {
  static counter = 0

  constructor(inItems) {
    let id = Incident.counter++

    this.id = id // ??? How can I give initial number and increment it by 1 for each new incident?
    this.date = Date.now() // change to request date and create new date for each new incident
    this.returnedItems = []
    this.recievedItems = []
  }
  //   returnItemByModel (modelNo, condition, quantity) {
  //     const
  //   }
  // }

  // incident date
  // will be connected to new detailed incident class and will be able to track replacement items and their status
  // will be modified to multiple item class
  // classes: incidentId, incidentDate etc.
}

const  = new Incident()

this.condition = condition // material condition, selection from dropdown: new, defective, waste (! find better definition)
this.returnedItems = [] // will be modified to multiple item class
class DefectiveItems {
  constructor(modelCode, quantity) {
    this.id = id
    this.quantity = quantity
  }
}
// ??? Super class
// !! LATER-STAGE warrantyExpireDate = '' // material warranty expire date

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

// this.serialNumber = serialNumber // material serial number

// -----------------------------------------------------------------------

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
