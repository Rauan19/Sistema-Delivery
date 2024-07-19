import {verify} from "jsonwebtoken"

export async function MIddDeliveryMan (req, res, next) {
    const authHeader = req.headers.authorization;
    
    
    if (!authHeader) {
        return res.status(401).json({
            message: "token required"
        })
    }

 

    try {
      const replace = authHeader.replace("Bearer ", "")
      const {subject} = verify(replace, "9ef20ec6832a9c4adfb3599c2ae1d86f85")
      req.id_deliveryman = subject

       next()
    } catch (error) {
        return res.status(401).json({message: "token invalido"})
        
    }


}