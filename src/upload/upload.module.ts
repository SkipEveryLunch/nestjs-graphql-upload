/*
------------------------------------------------------------------------------ 
Author: devhoangkien 
Website: https://devhoangkien.com
------------------------------------------------------------------------------
*/

import { Module } from '@nestjs/common';
import { UploadResolver } from './upload.resolver';

@Module({
  providers: [UploadResolver],
})
export class UploadModule {}
