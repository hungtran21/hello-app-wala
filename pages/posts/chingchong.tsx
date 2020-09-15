

import { GetStaticProps, InferGetServerSidePropsType } from 'next'
import React from 'react'
import { useSelector } from 'react-redux'
import fs from 'fs'
import path from 'path'
import ActiveLink from 'pages/components/ActiveLink'
import { useRouter } from 'next/router'

interface Post {
    name: string
}


export const getStaticProps: GetStaticProps = async (context) => {
    // const res = await fetch('https://.../posts')
    const posts: Post[] = [{ name: "wala" }]

    return {
        props: {
            posts,
        },
        revalidate: 1
    }
}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    // const res = await fetch('https://.../posts')
    // const posts = await res.json()
    const posts = [{ id: 1 }, { id: 2 }]
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
        params: { id: post.id },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

const ChingChong = ({ posts }: InferGetServerSidePropsType<typeof getStaticProps>) => {
    console.log(posts)
    const router = useRouter()
    const params = router.query
    console.log(params)
    return (
        <div>
            <ul>
                <li>
                    <h4>Item 1</h4>
                    <p>This is item 1</p>
                </li>
                <li>
                    <h4>Item 2</h4>
                    <p>This is item 2</p>
                </li>
                <li>
                    <ActiveLink href={`/wala`}>123</ActiveLink>
                </li>
            </ul>
        </div>
    )
}

export default ChingChong