import PostForm from '@/components/post-form/post-form'
import PostView from '@/components/post-view/post-view'
import styles from './home.module.css'

export default function Home() {
  return (
    <>
      <main id='home-page' className={styles.home_page}>
        <div className={styles.container_post_form}>
          <PostForm />
        </div>
        <hr />
        <div className='container-post-view'>
          <PostView />
        </div>
      </main>
    </>
  )
}
