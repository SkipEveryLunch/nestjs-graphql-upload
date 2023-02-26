/*
------------------------------------------------------------------------------ 
Author: devhoangkien 
Website: https://devhoangkien.com
------------------------------------------------------------------------------
*/

import { ResponseSingleUpload } from './response';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UploadInputArgs } from './uploadInputArgs';
import { Readable } from 'stream';

@Resolver()
export class UploadResolver {

  @Query(returns => String)
  async item(): Promise<string> {
    return 'Hello world!';
  }
  @Mutation(returns => ResponseSingleUpload)
  async uploadSingleFiles(@Args() args: UploadInputArgs): Promise<any> {
    const file = await args.file
    const {  createReadStream } = await args.file
    const buffer = await this.streamToBuffer(createReadStream())
    return {
      message:buffer.toString()
    };
  }
  async streamToBuffer(stream: Readable): Promise<Buffer> {
    const buffer: Uint8Array[] = [];

    return new Promise((resolve, reject) =>
      stream
        .on('error', (error) => reject(error))
        .on('data', (data) => buffer.push(data))
        .on('end', () => resolve(Buffer.concat(buffer))),
    );
  }
}
