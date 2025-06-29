import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true, // removes extra whitespace
        maxlength: 500, 
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
},{
    timestamps: true, // adds createdAt and updatedAt automatically
});

export default mongoose.model('Comment', commentSchema);