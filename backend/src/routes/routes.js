import {Router} from "express"
import CreateClientCOntroller from "../controllers/client.Controller"
import AuthticateController  from "../controllers/auth.client"
import   CreateDeliveryManCOntroller   from "../controllers/deliveryManController"
import { AuthticateDeliveryManController } from "../controllers/auth.DeliveryMAn"
import   CreateDeliveryController        from "../controllers/deliveryController"
import { EnsureAuthenClient } from "../middlewares/ensureAuthClient"
import { MIddDeliveryMan } from "../middlewares/MIDAUth.DeliveryMan"

//156c36f9-5f13-4a32-abab-82cf6ed10a5b
const AuthDelivMAN = new AuthticateDeliveryManController()


 const routes = Router()
 //68575dd4-fc35-4407-b6db-897a3a32617e

 //6d89a547-f1d5-41d3-a363-3032e916b076  id uva

 
routes.post("/client", CreateClientCOntroller.createClientCT)

routes.post("/login", AuthticateController.hadle)

routes.post("/deliveryman", CreateDeliveryManCOntroller.createDeliveryMan)

routes.post("/loginDeliveryMan", AuthDelivMAN.authMan)

routes.post("/delivery/:id_client", EnsureAuthenClient, CreateDeliveryController.handle )

routes.get("/deliveries", MIddDeliveryMan, CreateDeliveryController.handleFinALl)

routes.put("/delivery/update/:id_delivery",  CreateDeliveryController.UPdateDeliveryManCOntroLL)
// tem q consertar esse put


routes.delete("/delete/delivery/:id_delivery", EnsureAuthenClient, CreateDeliveryController.DeleteDeliveryController)

routes.get("/delivery/get/:id_client", EnsureAuthenClient , CreateDeliveryController.FindDeliveryesPorCLientController)

routes.get("/deliveryman/deliveries/:id_deliveryman", MIddDeliveryMan, CreateDeliveryController.FinALLDeliveryManCOntroller )

routes.put("/update/:id_delivery", MIddDeliveryMan, CreateDeliveryController.AtualizarDeliveryClient  )

export default routes