import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { Button } from '../ui/button'

export default function PostForm() {
  return (
    <div className='flex flex-col items-end'>
      <Textarea placeholder='No que esta pensando?' />
      <Button className='mt-3'
        onClick={() => {
          toast('Enviado!', {
            description: 'Seu post foi publicado',
          })
        }}
      >
        Enviar
      </Button>
    </div>
  )
}
