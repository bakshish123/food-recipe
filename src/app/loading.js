import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function loading()  {
  return (
    <div className='w-full min-h-screen'>
        <Skeleton></Skeleton>
    </div>
  )
}

