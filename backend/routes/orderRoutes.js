import express from 'express';
import {PrismaClient} from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.post('/order', async (req, res) => {
    try{
        const{userId, restrauntId, menuitems, totalPrice} = req.body;
        const order = await prisma.order.create({
            data: {
                userId: userId,
                restrauntId: restrauntId,
                menuitems: menuitems,
                totalPrice: totalPrice
            }
        });
        res.status(201).json({message: 'Order placed successfully', order});
    }catch(error){
        res.status(500).json({error: 'failed to place order'});
    }
});
//get all orders for a specific users
router.get('/orders/:userId', async (req, res) => {
    try{
        const userId = req.params.userId;
        const orders = await prisma.order.findMany({
            where: {
                userId: userId
            }
        });
        res.status(200).json(orders);
    }catch(error){
        res.status(500).json({error: 'failed to get orders'});
    }
});

//3. get details of a specific order
router.get('/order/:orderId', async (req, res) => {
    try{
        const orderId = req.params.orderId;
        const order = await prisma.order.findUnique({
            where: {
                id: orderId
            }
        });
        if(!order){
            return res.status(404).json({error: 'Order not found'});
        }
        res.status(200).json(order);
    }catch(error){
        res.status(500).json({error: 'failed to get order details'});
    }
});

//4. update order status
router.put('order/:orderId', async (req, res) => {
    try{
        const orderId = req.params.orderId;
        const {status} = req.body;
        const order = await prisma.order.update({
            where: {
                id: orderId
            },
            data: {
                status: status
            }
        });
        res.status(200).json({message: 'Order status updated successfully', order});
    }catch(error){
        res.status(500).json({error: 'failed to update order status'});
    }
});

export default router;