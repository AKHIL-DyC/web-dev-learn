import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function adduser(username:string,gmail:string,password:string) {
    const res=await prisma.user.create({
        data:{
            username,
            gmail,
            password
        }
    })
}

async function updateuser(username:string,password:string,gmail:string) {
    const res= await prisma.user.update({
        data:{
            username,
            password
        },
     where :{
        gmail
     }
    })
}

async function listuser(gmail:string) {
    const res=await prisma.user.findFirst({
        where:{
            gmail
        }
    })
    console.log(res);
}

//adduser('da mwone','okda@gmail.com','1233')
//updateuser('renaming','122','ok@gmail.com')
listuser('okda@gmail.com')