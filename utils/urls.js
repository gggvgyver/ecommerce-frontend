export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

/**
 * 이미지를 URL로
 * 로컬과 배포된 strapis를 위한 작업
 * @param {any} image
 */

 export const fromImageToUrl = (image) => {
     if (!image) {
         return "/vercel.svg"
     }

     if (image.url.indexOf("/") === 0) {
         return `${API_URL}${image.url}`
     }

     return image.url
 }