
import { AuthenticateClientCase } from "../models/auth.client"

 class  AuthticateController {
    async hadle (req, res) {
        const {username, password} = req.body

        try {
            const auth = new AuthenticateClientCase
            
            const token = await auth.execute(username, password)
             return res.status(200).json({token})
        } catch (error) {
            return res.status(401).json({ error: error.message });
        }
        
        
    }
}

export default new AuthticateController()