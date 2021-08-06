import React, { useState } from 'react'
import RecentVisitsCard from '../recentVisitsCard'
import { Aside } from './style'

const Container = () => {
    const [recentVisitorsData, setRecentVisitorsData] = useState([])

    return (
        <Aside>
            <ul>
            <RecentVisitsCard />
            </ul>
        </Aside>
    )
}

export default Container
