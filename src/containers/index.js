import React from 'react'

import './Container.css'

const Container = ({ children }) => (
    <main className="app-container container">
        {children}
    </main>
)

export default Container