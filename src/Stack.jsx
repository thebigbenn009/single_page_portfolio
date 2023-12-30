import React from 'react'
import { items } from './items'
import Wrapper from './Wrapper'

const Stack = () => {
  return (
    <Wrapper>
      <div className='stacks'>
        {items.map((item) => (
          <div className='stacks-inner'>
            <h2>{item.stack}</h2>
            <p>{item.experience}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default Stack