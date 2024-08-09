import { IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconMail, IconPhone } from "@tabler/icons-react"


const social = [
    {
        name: 'instagram',
        icons: <IconBrandInstagram className="size-8 text-neutral-500 hover:text-blue-500" />,
        href: 'https://www.instagram.com/kaizenyou_/'
    },
    {
        name: 'twitter',
        icons: <IconBrandX className="size-8 text-neutral-500 hover:text-blue-500" />,
        href: 'https://x.com/kaizenyou'
    },
    {
        name: 'linkedin',
        icons: <IconBrandLinkedin className="size-8 text-neutral-500 hover:text-blue-500" />,
        href: 'https://www.linkedin.com/company/kaizenyou/'
    },
    {
        name: 'phone',
        icons: <IconPhone className="size-8 text-neutral-500 hover:text-blue-500" />,
        href: 'tel:+918081341702'
    },
    {
        name: 'mail',
        icons: <IconMail className="size-8 text-neutral-500 hover:text-blue-500" />,
        href: 'mailto:info@kaizenyou.in'
    },
]



const FooterSection = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center" >
            <div className="w-[80%] flex justify-center items-center px-[7px] border-b-[1px] border-neutral-600 py-[20px]" >
                {social.map((media) => (
                    <a target='_blank' key={media.name} href={media.href} className="px-3">
                        {media.icons}
                    </a>
                ))}

            </div>

            <div className=" h-[70px] flex items-center justify-center">
                <p className="text-center text-sm text-neutral-500">©2024 KAIZENYOU, ALL RIGHT RESERVED.</p>
            </div>

        </div>
    )
}

export default FooterSection
