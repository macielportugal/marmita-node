'use strict'

const PackedLunch = use("App/Models/PackedLunch")
const { validate } = use('Validator')

class PackedLunchController {
    async list({ view }) {
        const packedlunchList = await PackedLunch.query().where('amount', '>', '0').fetch()
        return view.render('welcome', { packed_lunch_list: packedlunchList.toJSON() })
    }

    async show({ view, params }) {
        const { id } = params
        const packedlunch = await PackedLunch.find(id)
        return view.render('show', { packed_lunch: packedlunch.toJSON() })
    }

    async apiList() {
        const packedlunchList = await PackedLunch.query().where('amount', '>', '0').fetch()
        return packedlunchList
    }

    async apiShow({ request, params }) {
        const { id } = params
        return await PackedLunch.find(id)
    }

    async apiCreate({ request }) {
        const rules = {
            name: 'required',
            description: 'required',
            ingredient_list: 'required',
            price: 'required|number',
            amount: 'required|number',
            image: 'required',
            discount: 'number'
        }

        const validation = await validate(request.all(), rules)

        if (validation.fails()) {
            return validation.messages()
        }

        const data = request.only(["name", "description", "ingredient_list", "price", "amount", "image", "discount"])

        const packedlunch = await PackedLunch.create(data)

        return packedlunch
    }

    async apiUpdate({ request, params }) {
        const { id } = params

        const rules = {
            name: 'required',
            description: 'required',
            ingredient_list: 'required',
            price: 'required|number',
            amount: 'required|number',
            image: 'required',
            discount: 'number'
        }

        const validation = await validate(request.all(), rules)

        if (validation.fails()) {
            return validation.messages()
        }

        const data = request.only(["name", "description", "ingredient_list", "price", "amount", "image", "discount"])

        const packedlunch = await PackedLunch.query().where('id', id).update(data)

        return await PackedLunch.find(id)
    }

    async apiDestroy({ request, params }) {
        const { id } = params
        
        const packedlunch = await PackedLunch.find(id)

        return await packedlunch.delete()
    }
}

module.exports = PackedLunchController
