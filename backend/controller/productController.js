const Product=require("..//models/productModel")
const ErrorHandler=require("../utils/errorhandler")
const catchAsyncErrors=require("../middleware/catchAsyncErrors")

//create product
exports.createProduct=catchAsyncErrors(async(req,res,next)=>{

    const product= await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    });

});

//get all products
exports.getAllProducts=catchAsyncErrors(async(req,res)=>{

    const products=await Product.find();

    res.status(200).json({
        success:true,
        products

    })


})
// get single product details
exports.getProductDetails=catchAsyncErrors(async(req,res,next)=>{

    const product=await Product.findById(req.params.id);

if(!product){
    return next(new ErrorHandler('Product not found',404))
}
    res.status(200).json({
        success:true,
        product
    })

})

//Update product

exports. updateProduct=catchAsyncErrors(async (req,res,next)=>{

    const product=await Product.findById(req.params.id)

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }
updated_prouduct = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,
            runValidators:true,
            useFindAndModify:false});

            res.status(200).json({
                success:true,
                updated_prouduct
            })
})
//delete product 
exports.deleteProduct=catchAsyncErrors(async(req,res,next)=>{
    const product=await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })

    }
     await product.remove();
     res.status(200).json({
        success:true,
        message:"Product deleted successfully"
     })
})
