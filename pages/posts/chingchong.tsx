

import React from 'react'
import ActiveLink from 'pages/components/ActiveLink'


const ChingChong = () => {
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