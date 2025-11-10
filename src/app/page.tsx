/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useTRPC } from '@/trpc/client'
import { useQuery } from '@tanstack/react-query';
import React from 'react'

function Page() {
  const trpc = useTRPC();
  const {data} = useQuery(trpc.createAI.queryOptions({text:'Rohit'}));
  return (
    <div>
      
    </div>
  )
}

export default Page
