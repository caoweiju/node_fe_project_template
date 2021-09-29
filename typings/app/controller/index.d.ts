// This file is created by egg-ts-helper@1.27.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBase from '../../../app/controller/base';
import ExportHome from '../../../app/controller/home';
import ExportOther from '../../../app/controller/other';

declare module 'egg' {
  interface IController {
    base: ExportBase;
    home: ExportHome;
    other: ExportOther;
  }
}
