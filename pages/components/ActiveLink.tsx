import { route } from 'next/dist/next-server/server/router'
import { useRouter } from 'next/router'

function ActiveLink({ children, href }: { children: any, href: string }) {
    const router = useRouter()
    const style = {
        marginRight: 10,
        color: router.pathname === href ? 'red' : 'black',
    }

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick} style={style}>
            {children}
        </a>
    )
}

export default ActiveLink