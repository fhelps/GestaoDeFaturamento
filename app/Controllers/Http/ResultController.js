'use strict'

const Result = use('App/Models/Result')

class ResultController {

    async index ({ view, params }) {
        /**
         * Fetch all posts inside our database.
         *
         * ref: http://adonisjs.com/docs/4.1/lucid#_all
         */

        var results = await Result.all()
        results = results.toJSON()
        
        results = [{
            'usuario': "Eduardo",
            'data_inicial': "19/09/2020",
            'data_atual': "19/10/2020",
            'lucro_dia': 7.45,
            'lucro_mes': 121.51,
            'lucro_total': 208.87,
            'inicial': 600,
            'final': 808.87,
        }]

        if(params.id)
            return results
            
        return view.render('result.index', { results: results })
    }

}

module.exports = ResultController
