/**
 * 日本付近画像API
 *
 * _basetime: 撮影時間 TargetTime['basetime']
 * _validtime: 撮影時間 TargetTime['validtime']
 * _band_prod: 画像種別 BAND_PROD
 * _x: タイルのX座標
 * _y: タイルのY座標
 */
export type Methods = {
  /** 日本付近画像をJPGで取得 */
  get: {
    resBody: ArrayBuffer
  }
}