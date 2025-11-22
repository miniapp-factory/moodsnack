'use client';

import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const moods = ['happy', 'sad', 'energetic', 'relaxed', 'hungry'];
const snackMap: Record<string, string> = {
  happy: 'Chocolate Chip Cookie',
  sad: 'Warm Apple Pie',
  energetic: 'Trail Mix',
  relaxed: 'Herbal Tea',
  hungry: 'Cheese Sandwich',
};

export default function SnackSuggestion() {
  const [mood, setMood] = useState<string>('happy');
  const [snack, setSnack] = useState<string>(snackMap[mood]);

  useEffect(() => {
    // Randomly pick a mood on mount
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    setMood(randomMood);
    setSnack(snackMap[randomMood]);
  }, []);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Snack Suggestion</CardTitle>
        <CardDescription>Your mood: {mood}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xl font-semibold">{snack}</p>
        <Button variant="outline" className="mt-4" onClick={() => {
          const randomMood = moods[Math.floor(Math.random() * moods.length)];
          setMood(randomMood);
          setSnack(snackMap[randomMood]);
        }}>
          Get another suggestion
        </Button>
      </CardContent>
    </Card>
  );
}
