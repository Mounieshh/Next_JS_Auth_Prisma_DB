"use client"

import {FcGoogle} from "react-icons/fc"
import {FaGithub} from "react-icons/fa"
import { Button } from "../ui/button"

const Social = () => {
  return (
    <>
    <div className="flex items-center w-full gap-x-2">
    <Button
    size='lg'
    variant='outline'
    className="w-full"
    onClick = {() => {}}
    >
        <FcGoogle/>
    </Button>
    <Button
    size='lg'
    variant='outline'
    className="w-full"
    onClick = {() => {}}
    >
        <FaGithub/>
    </Button>
    </div>
    </>
  )
}

export default Social