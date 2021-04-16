const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect DB
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

//create a photo
/* Photo.create({
  title: 'Photo Title 2',
  description: 'Photo description 2 lorem ipsum',
}); */

//read a photo
/* Photo.find({}, (err, data) => {
  console.log(data);
});
 */

//update photo
/* const id = '6079f04e5916c524d4bdcb74';

Photo.findByIdAndUpdate(
  id,
  {
    title: 'Photo Title 111 updated',
    description: 'Photo description 111 updated',
  },
  {
      new: true
  },
  (err, data) => {
    console.log(data);
  }
); */

//delete a photo
const id = '6079f1ce8c0f602c98964346';

Photo.findByIdAndDelete(id, (err, data) => {
  console.log('Photo is removed..');
});
