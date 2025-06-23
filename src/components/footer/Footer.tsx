import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'

function Footer() {


const data = new Date().getFullYear()

return (
    <>
        <div className="flex justify-center bg-indigo-900 text-white">
            <div className="container flex flex-col items-center py-4">
                <p className='text-xl font-bold'>
                        Blog Pessoal Generation | © Copyright: {data}
                    </p>
                <p className='text-lg'>Acesse nossas redes sociais</p>
                <div className='flex gap-2'>
                    <LinkedinLogoIcon size={48} weight='bold' />
                    <InstagramLogoIcon size={48} weight='bold' />
                    <FacebookLogoIcon size={48} weight='bold' />
                </div>
            </div>
        </div>
    </>
)


}

export default Footer