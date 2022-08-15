import { Request, Response, Router } from 'express';
import { getKeycloak } from './config/keycloak';
const router = Router();

router.get('/anonymous', (request: Request, response: Response) => {
    response.send("Hello anonymous.");
});

router.get('/user', getKeycloak().protect('user'), (request: Request, response: Response) => {
    response.send("Allowed access for role user.");
});

router.get('/admin', getKeycloak().protect('admin'), (request: Request, response: Response) => {
    response.send("Allowed access for role admin.");
});

router.get('/all', getKeycloak().protect(['user', 'admin']), (request: Request, response: Response) => {
    response.send("Allowed access for role user and admin.");
});
export default router;