const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Product = require('./models/productmodel')
const Comment = require('./models/commentmodel');
const User = require('./models/usermodel');
const Cart = require('./models/cartmodel');
const Order = require('./models/ordermodel');

app.use(express.json())
app.use(express.urlencoded({extended: false}))



app.get('/', (req, res) => {
    res.send()
})

// get all products
app.get('/products', async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//product by id
app.get('/products/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Add new product
app.post('/products', async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// update a product
app.put('/products/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json({ message: `Product with ID ${id} has been updated successfully` });   
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete a product
app.delete('/products/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        res.status(200).json({ message: `Product with ID ${id} has been deleted successfully` });   

        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


// Get all comments
app.get('/comments', async (req, res) => {
    try {
        const comments = await Comment.find({});
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Comment by id
app.get('/comments/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const commnet = await Comment.findById(id);
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Get comments for a specific product
app.get('/products/:productId/comments', async (req, res) => {
    try {
        const { productId } = req.params;
        const comments = await Comment.find({ product: productId });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add new comment
app.post('/comments', async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        res.status(200).json(comment);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// Update a comment
app.put('/comments/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await Comment.findByIdAndUpdate(id, req.body);
        if (!comment) {
            return res.status(404).json({ message: `Cannot find any comment with ID ${id}` });
        }
        const updatedComment = await Comment.findById(id);
        res.status(200).json({ message: `Comment with ID ${id} has been updated successfully` });   
     } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a comment
app.delete('/comments/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await Comment.findByIdAndDelete(id);
        if (!comment) {
            return res.status(404).json({ message: `Cannot find any comment with ID ${id}` });
        }
        res.status(200).json({ message: `Comment with ID ${id} has been deleted successfully` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Get all Users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//User by id
app.get('/users/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Add User
app.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});
app.put('/users/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const user = await Users.findByIdAndUpdate(id, req.body);
        if(!user){
            return res.status(404).json({message: `cannot find any user with ID ${id}`})
        }
        const updatedUser = await User.findById(id);
        res.status(200).json({ message: `User with ID ${id} has been updated successfully` });   
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete a user
app.delete('/users/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({message: `cannot find any user with ID ${id}`})
        }
        res.status(200).json({ message: `User with ID ${id} has been deleted successfully` });   

        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Get all Carts
app.get('/carts', async (req, res) => {
    try {
        const carts = await Cart.find({});
        res.status(200).json(carts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Cart by id
app.get('/carts/:id', async(req, res) =>{
    try {
        const { id } = req.params;
        const cart = await Cart.findById(id);
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

// Add Cart
app.post('/carts', async (req, res) => {
    try {
        const cart = await Cart.create(req.body);
        res.status(200).json(cart);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// Update Cart
app.put('/carts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const cart = await Cart.findByIdAndUpdate(id, req.body);
        if (!cart) {
            return res.status(404).json({ message: `Cannot find any cart with ID ${id}` })
        }
        const updatedCart = await Cart.findById(id);
        res.status(200).json({ message: `Cart with ID ${id} has been updated successfully` });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

// Delete a Cart
app.delete('/carts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const cart = await Cart.findByIdAndDelete(id);
        if (!cart) {
            return res.status(404).json({ message: `Cannot find any cart with ID ${id}` })
        }
        res.status(200).json({ message: `Cart with ID ${id} has been deleted successfully` });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});



// Get all Orders
app.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find({});
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Order by id
app.get('/orders/:id', async(req, res) =>{
    try {
        const { id } = req.params;
        const order = await Order.findById(id);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

// Add Order
app.post('/orders', async (req, res) => {
    try {
        const order = await Order.create(req.body);
        res.status(200).json(order);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// Update Order
app.put('/orders/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByIdAndUpdate(id, req.body);
        if (!order) {
            return res.status(404).json({ message: `Cannot find any order with ID ${id}` })
        }
        const updatedOrder = await Order.findById(id);
        res.status(200).json({ message: `Order with ID ${id} has been updated successfully` });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

// Delete an Order
app.delete('/orders/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByIdAndDelete(id);
        if (!order) {
            return res.status(404).json({ message: `Cannot find any order with ID ${id}` })
        }
        res.status(200).json({ message: `Order with ID ${id} has been deleted successfully` });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});



mongoose.connect('mongodb+srv://ravreet27:PDHMNhrek5dB2ztD@cluster0.soywwin.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, ()=> {
        console.log(`Assignment_4 node js API is running `)
    });
}).catch((error) => {
    console.log(error)
})
