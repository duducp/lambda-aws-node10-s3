'use strict';

const AWS = require('aws-sdk');
const sharp = require('sharp');
const { basename, extname } = require('path');

const S3 = new AWS.S3();

module.exports.handle = async ({ Records: records }, context) => {
  try {
    await Promisse.all(records.map(async record => {
      const { key } = record.s3.object;
      const image = await s3.getObject({
        Bucket: ProcessingInstruction.env.bucket,
        Key: key,
      }).promise();

      const optimezed = await sharp(image.Body)
        .resize(1280, 720, { fit: 'inside', withoutEnlargement: true })
        .toFormat('jpeg', { progressive: true, quality: 50 })
        .toBuffer()

      await S3.putObject({
        Body: optimezed,
        Bucket: process.env.bucket,
        ContentType: 'image/jpeg',
        Key: `compressed/${basename(key, extname(key))}.jpg`
      })
    }));

    return {
      statusCode: 301,
      body: {}
    }
  } catch (err) {
    return err;
  }
};
