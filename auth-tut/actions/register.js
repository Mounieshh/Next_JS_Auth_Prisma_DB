"use server"

import { RegisterSchema } from "@/schemas"

const register = async (values) => {
    const validateFields = RegisterSchema.safeParse(values);

    if(!validateFields.success){
        return {
            error : "Invalid fields"
        }
    }
    return{ 
        success : 'Email sent'
    }
}

export default register