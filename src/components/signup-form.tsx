"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Mail, PartyPopper } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function SignupForm() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function onSubmit(values: FormData) {
    try {
      const response = await fetch(`http://168.231.118.91:8001/api/post/data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: values.name,
          email: values.email,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        setSubmissionError("You have already signed the petition.");
        return;
      }

      form.reset();
      setIsDialogOpen(true);
      setSubmissionError(null);
      console.log("Form submitted successfully:", values);
    } catch (error) {
      console.error("Fetch Error:", error);
      setSubmissionError(
        "An unexpected error occurred. Please try again later."
      );
    }
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
                  <div className="relative">
                    {" "}
                    {/* Add this relative wrapper */}
                    <Input
                      placeholder="Full Name"
                      className="pl-3 py-6 bg-white"
                      {...field}
                    />
                    <User className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                    {/* Adjusted translate-y */}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative">
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Email"
                      type="email"
                      className="pl-3 py-6 bg-white focus:outline-none focus:ring-0"
                      {...field}
                    />
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full py-6 bg-[#25525D] hover:bg-[#25525D]/95 text-white flex items-center justify-center gap-2"
          >
            {form.formState.isSubmitting && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
            )}
            {form.formState.isSubmitting ? "Submitting..." : "Submit"}
          </Button>

          {submissionError && (
            <p className="text-red-500 text-sm text-center">
              {submissionError}
            </p>
          )}
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

            <DialogTitle className="mt-6 text-xl font-semibold">
              Your submission was recorded!
            </DialogTitle>

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
  );
}
