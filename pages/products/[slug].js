import Head from 'next/head'

import { fromImageToUrl, API_URL } from '../../utils/urls'
import { twoDecimals } from '../../utils/format'

const Product = ({ product }) => {
    return (
        <div>
            <Head>
                {product.meta_title &&
                    <title>{product.meta_title}</title>
                }
                {product.meta_description && 
                    <meta name="description" content={product.meta_description} />
                }
            </Head>
            <h3>{product.name}</h3>
            <img src={fromImageToUrl(product.image)} />
            <h3>{product.name}</h3>
            <p>{twoDecimals(product.price)} 원</p>

            <p>
                {product.content}
            </p>
        </div>
    )
}

export async function getStaticProps({ params: { slug } }) {
    const product_res = await fetch(`${API_URL}/products/?slug=${slug}`)
    const found = await product_res.json()

    return {
        props: {
            product: found[0]
        }
    }
}

export async function getStaticPaths() {
    // 가능한 모든 경로 검색
    const products_res = await fetch(`${API_URL}/products/`)
    const products = await products_res.json()
    
    // 찾은경로를 Nextjs 컨택스로 반환
    return {
        paths: products.map(product =>({
           params: { slug: String(product.slug) } 
        })),
        fallback: false //매칭값이 없으면 404페이지 보여주기
    }
}

export default Product