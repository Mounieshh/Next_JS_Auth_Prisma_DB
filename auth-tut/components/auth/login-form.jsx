"use client"

import CardWrapper from './card-wrapper'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { LoginSchema } from '@/schemas'
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
import login from '@/actions/login'

const LoginForm = () => {

    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const [isPending, startTransition] = useTransition();

    const onSubmit = (values) => {
        setError("")
        setSuccess("")

      startTransition(() => {
        login(values)
        .then((data) => {
            setError(data.error)
            setSuccess(data.success)
        })
      });
    };

    const form = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    
  return (
    <>
    <CardWrapper
    headerLabel='Welcome Back'
    backButtonLabel='Dont Have an Account'
    backButtonHref='/auth/register'
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
                    Login
                </Button>
                
            </form>

       </Form>
    </CardWrapper>
    
    </>
  )
}

export default LoginForm