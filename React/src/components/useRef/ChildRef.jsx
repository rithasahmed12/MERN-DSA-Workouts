    import React from 'react'
    import { forwardRef } from 'react'

    const ChildRef = forwardRef((props,ref) => {
    return (
        <>
        <div>ChildRef</div>
        <input type="text" ref={ref}  />
        </>
    )
    })

    export default ChildRef