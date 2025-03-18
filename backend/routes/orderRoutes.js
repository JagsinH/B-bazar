import express from 'express';
import {PrismaClient} from '@prisma/client';

const orderRouter = express.Router();
const prisma = new PrismaClient();

orderRouter.post('/order', async (req, res) => {
    try{
        const{userId, restaurantId, menuItems, totalPrice} = req.body;
        console.log(userId)
        if (typeof menuItems !== "object") {
            return res.status(400).json({ error: "menuItems must be a valid JSON object or array" });
        }
        const order = await prisma.order.create({
            data: {
                userId,
                restaurantId,
                menuItems,
                totalPrice
            }
        });
        console.log(order)
        res.status(201).json({message: 'Order placed successfully', order});
    }catch(err){
        res.status(500).json({error: err.message});
    }
});
//get all orders for a specific users
orderRouter.get('/orders/:userId', async (req, res) => {
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
orderRouter.get('/order/:orderId', async (req, res) => {
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
orderRouter.put('/order/:orderId', async (req, res) => {
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

export default orderRouter;