'use strict';

module.exports.photosConsumer = (event, context, callback) => {
  console.log('Event:', JSON.stringify(event));

  event.Records.forEach(function(record) {
    const bucket = record.s3.bucket;
    const object = record.s3.object;
    console.log('Bucket:', JSON.stringify(bucket));
    console.log('Object:', JSON.stringify(object));
  });

  callback(null, "ok");
};
