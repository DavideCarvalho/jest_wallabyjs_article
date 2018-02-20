import type { AxiosPromise } from 'axios';
declare type ApiType = {|
  somaDoisNumeros: (number1: number, number2: number) => number,
  pegaPost: (postNumber: number) => AxiosPromise<PostType>
|}

declare type PostType = {
  userId: string,
  id: number,
  title: string,
  body: string
}