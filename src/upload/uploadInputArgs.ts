/*
------------------------------------------------------------------------------ 
Author: devhoangkien 
Website: https://devhoangkien.com
------------------------------------------------------------------------------
*/
import {GraphQLUpload } from 'graphql-upload-minimal';

import {  Field, ArgsType } from '@nestjs/graphql';
import { Readable } from 'stream';

@ArgsType()
export class UploadInputArgs {
  @Field(() => GraphQLUpload)
  file!: Promise<Upload>;
}

class Upload{
  fieldName: string;
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: ()=>Readable;
}
