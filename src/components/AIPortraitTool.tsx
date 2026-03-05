"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Loader2, Upload, User, Trash2 } from "lucide-react";
import { transformPortrait } from "@/ai/flows/transform-portrait-flow";

export function AIPortraitTool() {
  const [loading, setLoading] = useState(false);
  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSourceImage(reader.result as string);
        setResultImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!sourceImage) return;
    setLoading(true);
    try {
      const result = await transformPortrait({ photoDataUri: sourceImage });
      setResultImage(result.imageUrl);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border-none shadow-2xl bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Badge className="bg-accent text-accent-foreground border-none">GenAI Studio</Badge>
        </div>
        <CardTitle className="text-4xl font-headline font-bold">Ghibli-Style Me</CardTitle>
        <CardDescription className="text-lg">
          Reimagine yourself as an AI traveler geek in the whimsical world of Studio Ghibli.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8 p-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Source Image */}
          <div className="space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <User size={14} /> Original Photo
            </h4>
            <div className="relative aspect-[4/5] rounded-3xl border-2 border-dashed border-muted bg-muted/20 flex flex-col items-center justify-center overflow-hidden transition-all hover:border-accent/40">
              {sourceImage ? (
                <img src={sourceImage} alt="Source" className="w-full h-full object-cover" />
              ) : (
                <div className="text-center p-8">
                  <div className="bg-background p-4 rounded-full shadow-lg mb-6 mx-auto w-fit">
                    <Upload size={32} className="text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 font-medium">Upload your portrait to start the transformation</p>
                  <label className="cursor-pointer">
                    <span className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-bold hover:bg-primary/90 transition-all shadow-md active:scale-95 inline-flex items-center gap-2">
                      <Upload size={18} /> Select Photo
                    </span>
                    <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                  </label>
                </div>
              )}
              {sourceImage && !loading && (
                <button 
                  onClick={() => setSourceImage(null)}
                  className="absolute top-4 right-4 bg-background/90 text-destructive p-2 rounded-full hover:bg-background transition-colors shadow-lg"
                  title="Remove Image"
                >
                  <Trash2 size={18} />
                </button>
              )}
            </div>
          </div>

          {/* Result Image */}
          <div className="space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-widest text-accent flex items-center gap-2">
              <Sparkles size={14} /> Ghibli Reimagining
            </h4>
            <div className="relative aspect-[4/5] rounded-3xl border-2 border-dashed border-accent/20 bg-accent/5 flex flex-col items-center justify-center overflow-hidden">
              {loading ? (
                <div className="text-center space-y-6">
                  <div className="relative">
                    <Loader2 className="animate-spin mx-auto text-accent" size={64} />
                    <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent/50" size={24} />
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-headline font-bold text-accent animate-pulse">Painting your story...</p>
                    <p className="text-xs text-muted-foreground max-w-[200px] mx-auto">This takes a moment as our AI artists get to work.</p>
                  </div>
                </div>
              ) : resultImage ? (
                <div className="relative w-full h-full animate-in zoom-in-95 duration-500">
                  <img src={resultImage} alt="Ghibli Version" className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <Button variant="secondary" className="rounded-full shadow-xl bg-white/90 backdrop-blur-sm" asChild>
                      <a href={resultImage} download="ghibli-me.png">Download Masterpiece</a>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center p-8 opacity-20">
                  <div className="bg-muted p-4 rounded-full mb-6 mx-auto w-fit">
                    <Sparkles size={48} />
                  </div>
                  <p className="text-sm font-medium">The magic happens here</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button 
            onClick={handleGenerate} 
            disabled={!sourceImage || loading}
            size="lg"
            className="h-14 px-12 text-lg font-bold rounded-full bg-accent hover:bg-accent/80 text-accent-foreground shadow-2xl shadow-accent/40 transition-all hover:-translate-y-1 active:scale-95"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 animate-spin" /> Working Magic...
              </>
            ) : (
              <>
                <Sparkles className="mr-2" /> Transform to Ghibli Style
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
