const mongoose = require('mongoose');
let Reviews = require('../model/reviewModel');
let Movies = require('../model/moviesModel');

const getAllReview = async ()=>{
    return Reviews.find();
}
const getReviewById = async(reviewId)=>{
    return Reviews.findById(reviewId).populate("movie");
}
const saveReview = async(review)=>{
    const newReview = new Reviews({
        movie: mongoose.Types.ObjectId(review.movie),
        rating: review.rating,
        review: review.review,

    });

    return newReview.save();
}
module.exports = {
    getAllReview,
    getReviewById,
    saveReview
}