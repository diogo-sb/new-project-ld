import PostForm from '@/components/post-form/post-form'
import PostView from '@/components/post-view/post-view'
import styles from './home.module.css'
import { useEffect, useState } from 'react'


export default function Home() {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [post, setPost] = useState<Array<any>>([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/data")
    .then(res => res.json())
    .then(data => setPost(data))
    .catch(err => console.error(err))
  }, [])
  
  return (
    <>
      <main id='home-page' className={styles.home_page}>
        <div className={styles.container_post_form}>
          <PostForm />
        </div>
        <hr />
        <div className='container-post-view flex flex-col gap-4'>
            { post.map(item => (
              <PostView key={item.id} user={item.usuario} post={item.post}/>
            ))}
        </div>
      </main>
    </>
  )
}
