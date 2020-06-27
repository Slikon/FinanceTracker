import { Invoice } from './classes/invoice.js'
import { Payment } from './classes/payment.js'
import { hasFormatter } from './interfaces/hasFormatter.js'

let docOne: hasFormatter
let docTwo: hasFormatter

docOne = new Invoice('yoshi', 'web work', 250)
docTwo = new Payment('mario', 'plumbing work', 300)

let docs: hasFormatter[] = []

docs.push(docOne, docTwo)

const form = document.querySelector('.new-item-form') as HTMLFormElement

// inputs 
const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let doc: hasFormatter
    if(type.value === 'invoice'){
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    }
    else{
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }

    console.log(doc.format());
    
})


