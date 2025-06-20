
import { Container } from '@/components/shared/container';
import BlurText from '@/components/shared/blur-text';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift, Heart } from 'lucide-react';
import Link from 'next/link';

export default function DonatePage() {
  return (
    <Container>
      <div className="text-center mb-12">
        <Heart className="mx-auto h-16 w-16 text-accent mb-4" />
        <BlurText text="Support Our Mission" className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-primary" />
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Your contribution helps us empower more girls and build brighter futures.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-2xl">Make a Difference Today</CardTitle>
            <CardDescription>
              Every donation, no matter the size, helps us provide essential resources, education, and mentorship.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground flex-1">
                <Gift size={20} className="mr-2" /> Donate Monthly
              </Button>
              <Button size="lg" variant="outline" className="text-primary border-primary hover:bg-primary/10 flex-1">
                <Heart size={20} className="mr-2" /> One-Time Donation
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              This is a placeholder donation page. In a real application, this would integrate with a payment processor.
            </p>
            <p className="text-sm text-center">
              Want to learn more about our impact? <Link href="/success-stories" className="text-primary hover:underline">Read our success stories</Link>.
            </p>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
