import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import styles from './post-view.module.css'


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PostView(props: any) {

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
          <h4 className='font-bold'>{props.user}</h4>
          <p>{props.post}</p>
        </div>
      </div>
    </section>
  )
}
