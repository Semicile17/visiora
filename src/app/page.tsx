"use client";


import { Button } from '@/components/ui/button'
import { useTRPC } from '@/trpc/client'
import { useMutation } from '@tanstack/react-query';
import React from 'react'
import { toast } from 'sonner';

function Page() {
  const trpc = useTRPC();

  const invoke = useMutation(trpc.invoke.mutationOptions({
    onSuccess:()=>{
      toast.success('Background Job Started')
    }
  }));
  return (
    <div>
      <div className='p-4 max-w-7xl mx-auto'>
        <Button disabled={invoke.isPending} onClick={()=>invoke.mutate({text:"Jhon"})}>
          Invoke Background Job
        </Button>
      </div>
    </div>
  )
}

export default Page
