import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const formSchema = z.object({
  posts: z.string().min(10, { message: 'Digite no minimo 10 palavras' }).max(250),
  user: z.string(),
  dat: z.number(),
})

export default function PostForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user: 'Usuario1',
      posts: '',
      dat: new Date().getTime(),
    },
  })

  return (
    <Form {...form}>
      <form className='' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='posts'
          render={({ field }) => (
            <FormItem>
              <FormLabel>POST</FormLabel>
              <FormControl>
                <Textarea placeholder='No que você esta pensando?' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='mt-3'>
          Enviar
        </Button>
      </form>
    </Form>
  )
}

function onSubmit(values: z.infer<typeof formSchema>) {
  toast('Post publicado com sucesso')
  console.log(values)
}
