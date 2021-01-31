import Head from 'next/head'
import { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext'

export default function Login() {

    const [email, setEmail] = useState("")
    const { loginUser } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        loginUser(email)
    }

    return (
        <div>
            <Head>
                <title>로그인 페이지</title>
                <meta name="description" content="상품을 구매하려면 여기서 로그인 하셔요" />
            </Head>

            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="이메일주소" 
                />
                <button type="submit">로그인</button>
            </form>
        </div>
    )
}