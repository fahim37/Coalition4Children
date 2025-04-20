"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { User, Mail, PartyPopper } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Dialog, DialogContent, DialogFooter, DialogTitle } from "@/components/ui/dialog"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

type FormData = z.infer<typeof formSchema>

export default function SignupForm() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  })

  const onSubmit = async (values: FormData) => {
    form.reset()
    setIsDialogOpen(true)
    console.log("Form submitted:", values)

  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="relative">
                <FormControl>
                  <Input placeholder="Full Name" className="pl-3 py-6 bg-white" {...field} />
                </FormControl>
                <FormMessage />
                <User className="absolute right-3 top-1/2 -translate-y-[80%] text-gray-400 h-5 w-5" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative">
                <FormControl>
                  <Input placeholder="Email" type="email" className="pl-3 py-6 bg-white" {...field} />
                </FormControl>
                <FormMessage />
                <Mail className="absolute right-3 top-1/2 -translate-y-[80%] text-gray-400 h-5 w-5" />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full py-6 bg-[#25525D] hover:bg-[#25525D]/95 text-white">
            Submit
          </Button>
        </form>
      </Form>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-[#7A9AA1] text-white border-none sm:max-w-md">
          <button
            onClick={() => setIsDialogOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <span className="sr-only">Close</span>
          </button>

          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F8F3D6]">
              <PartyPopper className="h-10 w-10 text-[#FF5757]" />
            </div>

            <DialogTitle className="mt-6 text-xl font-semibold">Your submission was recorded!</DialogTitle>

            <DialogFooter className="mt-8 sm:justify-center">
              <Button
                onClick={() => setIsDialogOpen(false)}
                className="bg-[#25525D] hover:bg-[#25525D]/90 text-white py-6 px-10"
              >
                Thanks!
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
