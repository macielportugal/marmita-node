'use strict'

class SessionController {
    async create ({ request, auth }) { 
        const { email, password } = request.all()
    
        const token = await auth.authenticator('jwt').attempt(email, password)
    
        return token
    
    }

    async logout({ request, auth }) {
        await auth.logout()
    }
}

module.exports = SessionController
