"use client"

import CardWrapper from './card-wrapper'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { RegisterSchema } from '@/schemas'
import {
    Form,
    FormControl,
    FormItem,
    FormLabel,
    FormField,
    FormMessage
} from '@/components/ui/form'
import { z } from 'zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import FormError from '../form-error'
import FormSuccess from '../form-success'
import register from '@/actions/register'

const RegisterForm = () => {

    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const [isPending, startTransition] = useTransition();

    const onSubmit = (values) => {
        setError("")
        setSuccess("")

      startTransition(() => {
        register(values)
        .then((data) => {
            setError(data.error)
            setSuccess(data.success)
        })
      });
    };

    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    
  return (
    <>
    <CardWrapper
    headerLabel='Create an Account'
    backButtonLabel='Already have an Account'
    backButtonHref='/auth/login'
    showSocial
    >
       <Form {...form}> 
            <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-6'
            >
                
                <div className='space-y-4'>
                <FormField
                    control={form.control}
                    name = 'name'
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>
                                Name
                            </FormLabel>
                            <FormControl>
                                <Input
                                {...field}
                                disabled={isPending}
                                placeholder='John Doe'
                                
                                />
                            </FormControl>
                            <FormMessage />
                           
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name = 'email'
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>
                                Email
                            </FormLabel>
                            <FormControl>
                                <Input
                                {...field}
                                disabled={isPending}
                                placeholder='jonathan.doe@gmail.com'
                                type='email'
                                />
                            </FormControl>
                            <FormMessage />
                           
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name = 'password'
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>
                                Password
                            </FormLabel>
                            <FormControl>
                                <Input
                                {...field}
                                disabled={isPending}
                                placeholder='$$$$$$'
                                type='password'
                                />
                            </FormControl>
                            <FormMessage />
                           
                        </FormItem>
                    )}
                    />
                   
                </div>
                <FormError message={error}/>
                <FormSuccess message={success}/>
                <Button
                className='w-full'
                disabled={isPending}
                type='submit'
                >
                    Register
                </Button>
                
            </form>

       </Form>
    </CardWrapper>
    
    </>
  )
}

export default RegisterForm