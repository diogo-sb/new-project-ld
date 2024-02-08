import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Header() {
  return (
    <>
      <header className='flex justify-end p-10'>
        <div>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>TS</AvatarFallback>
          </Avatar>
        </div>
      </header>
    </>
  )
}
