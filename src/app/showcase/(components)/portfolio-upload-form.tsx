"use client";

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'; // Removed CardTitle
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { UploadCloud } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import BlurText from '@/components/shared/blur-text';

const portfolioSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters." }),
  description: z.string().min(20, { message: "Description must be at least 20 characters." }),
  projectUrl: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal('')),
  imageFile: z.instanceof(FileList).refine(files => files?.length > 0, 'An image is required.')
           .refine(files => files?.[0]?.size <= 5 * 1024 * 1024, `Max file size is 5MB.`)
           .refine(files => ["image/jpeg", "image/png", "image/webp"].includes(files?.[0]?.type),
             "Only .jpg, .png, and .webp formats are supported."
           )
});

type PortfolioFormValues = z.infer<typeof portfolioSchema>;

export function PortfolioUploadForm() {
  const { toast } = useToast();
  const form = useForm<PortfolioFormValues>({
    resolver: zodResolver(portfolioSchema),
    defaultValues: {
      title: "",
      description: "",
      projectUrl: "",
    },
  });

  const onSubmit: SubmitHandler<PortfolioFormValues> = (data) => {
    // Placeholder for actual upload logic
    console.log("Portfolio Data:", data);
    toast({
      title: "Upload Submitted (Placeholder)",
      description: `Your work "${data.title}" has been submitted for review. Image: ${data.imageFile[0].name}`,
    });
    form.reset();
  };

  return (
    <Card className="shadow-xl">
      <CardHeader>
        <div className="flex items-center gap-3">
          <UploadCloud className="h-8 w-8 text-primary" />
          <BlurText text="Upload Your Work" className="text-2xl font-bold font-headline text-primary leading-none tracking-tight" />
        </div>
        <CardDescription>Share your projects, designs, or handmade creations with the community.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="portfolio-title">Project Title</FormLabel>
                  <FormControl>
                    <Input id="portfolio-title" placeholder="e.g., My Awesome App Design" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="portfolio-description">Description</FormLabel>
                  <FormControl>
                    <Textarea id="portfolio-description" placeholder="Tell us about your project..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="projectUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="portfolio-url">Project URL (Optional)</FormLabel>
                  <FormControl>
                    <Input id="portfolio-url" placeholder="https://example.com/my-project" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageFile"
              render={({ field: { onChange, onBlur, name, ref } }) => (
                <FormItem>
                  <FormLabel htmlFor="portfolio-image">Upload Image (Max 5MB: JPG, PNG, WEBP)</FormLabel>
                  <FormControl>
                    <Input 
                      id="portfolio-image" 
                      type="file" 
                      accept="image/jpeg,image/png,image/webp"
                      onChange={(e) => onChange(e.target.files)}
                      onBlur={onBlur}
                      name={name}
                      ref={ref}
                      className="file:text-primary file:font-semibold hover:file:bg-primary/10"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
              <UploadCloud size={18} className="mr-2" />
              Submit My Work
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
