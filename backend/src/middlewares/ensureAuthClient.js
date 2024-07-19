import {verify} from "jsonwebtoken"

export async function EnsureAuthenClient (req, res, next) {
    const authHeader = req.headers.authorization;
    
    
    if (!authHeader) {
        return res.status(401).json({
            message: "token required"
        })
    }

 

    try {
      const replace = authHeader.replace("Bearer ", "")
      const {subject} = verify(replace, "9ef20ec6832a9c4adfb35c2ae1d86f85")
      req.id_client = subject

       next()
    } catch (error) {
        return res.status(401).json({message: "token invalido"})
        
    }


}