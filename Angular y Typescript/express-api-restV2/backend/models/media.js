var mongoose= require('./conection');
//mongoose.connect('mongodb://localhost:27017/user',{ useNewUrlParser: true });
const Media = mongoose.model(
    'Media',
    {
        name: String,
        path:String,
        type:String,
        size: Number,
        mtime: Date,
        urlPath: String
    }
);

module.exports = Media;
