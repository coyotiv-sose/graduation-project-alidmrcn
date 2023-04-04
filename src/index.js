console.log('This is an inventory managment application for making works easier and reliable.')
// This app will manage inventory of warehouse and will be able to track inventory items and replacements via Vendors

/*
 */

class InventoryItem {
  constructor(modelCode, description, unit, availableQuantity, defectiveQuantity) {
    this.modelCode = modelCode // if there is no model code, it will be replaced with description or auto-generated unique code
    this.description = description
    this.unit = unit // selection from dropdown: piece, meter, kilogram, etc.
    this.availableQuantity = availableQuantity // new or repaired items quantity
    this.defectiveQuantity = defectiveQuantity // defective items quantity
    // this.inServiceQuantity = inServiceQuantity // items sent to vendor or repair shop for inspenction and replace or repair depends warranty status
    // this.system = system // related system, selection from dropdown: system list to be created
    // this.brand = brand // selection from dropdown: vendor list to be created
    // this.id = id // item number, this property will be replaced with database id when it is connected to database
    // this.disposedQuantity = disposedQuantity // disposed items quantity, will be functional during later stages of the app development
    // price = '' // LATER-STAGE, purchased prices with dates
  }
}
class Incident {
  constructor(returnDefectiveItems) {
    this.date = Date.now()
    this.defectiveItems = []

    // ! Create requiredItems property to track required items for replacement

    returnDefectiveItems.forEach(item => {
      item.availableQuantity -= 1 // ! if there available quantity
      item.defectiveQuantity += 1
      this.defectiveItems.push(item)
      // ! if not create requiredItems property and push item to it
    })
  }
}

const Item01 = new InventoryItem('LN1234', '42U Cabin', 'ea', 5, 1)
const Item02 = new InventoryItem('2960X', '48port Switch', 'ea', 100, 1)
const Item03 = new InventoryItem('UT1GF', '12 Core', 'm', 5000, 0)
const Item04 = new InventoryItem('55DXFG', '55" Screen', 'ea', 10, 2)

const incident1 = new Incident([Item01, Item02])

// -----------------------------------------------------------------------
// !! LATER-STAGE warrantyExpireDate = '' // material warranty expire date
// will be connected to new detailed incident class and will be able to track replacement items and their status
// will be modified to multiple item class
// classes: incidentId, incidentDate etc.
// this.condition = condition // material condition, selection from dropdown: new, defective, waste (! find better definition)
// this.returnedItems = [] // will be modified to multiple item class
// -----------------------------------------------------------------------
// this.serialNumber = serialNumber // material serial number

// ------------------------- ARMAGANS CODE ----------------------------------------------

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

//  static counter = 0

//   constructor(inItems) {
//     let id = Incident.counter++
//   }
