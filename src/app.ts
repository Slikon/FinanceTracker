import { Invoice } from './classes/invoice.js'
import { Payment } from './classes/payment.js'
import { hasFormatter } from './interfaces/hasFormatter.js'
import { listTemplate } from './classes/listTemplate.js'

const form = document.querySelector('.new-item-form') as HTMLFormElement

// inputs 
const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// list template instance
const ul = document.querySelector('ul')!
const list = new listTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    // values is a tuple with predefined types
    let values: [string, string, number]
    values = [toFrom.value, details.value, amount.valueAsNumber]

    let doc: hasFormatter
    if(type.value === 'invoice'){
        doc = new Invoice(...values)
    }
    else{
        doc = new Payment(...values)
    }

    list.render(doc, type.value, 'end')
    
}) 

