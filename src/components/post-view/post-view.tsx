import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import styles from './post-view.module.css'

export default function PostView() {
  const user = '@UsuárioX'
  const postTxt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, consectetur.'

  return (
    <section className='container-post'>
      <div className={styles.post}>
        <div>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>TS</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h4 className='font-bold'>{user}</h4>
          <p>{postTxt}</p>
        </div>
      </div>
    </section>
  )
}
