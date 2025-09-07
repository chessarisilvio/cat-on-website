import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { X } from "lucide-react";

const CatGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "https://cataas.com/cat?width=800&height=600&type=sq",
      alt: "Tabby cat stretching in the sun",
      caption: "The perfect feline morning stretch ☀️"
    },
    {
      src: "https://cataas.com/cat/cute?width=800&height=600",
      alt: "Kitten playing with a ball of yarn",
      caption: "The eternal battle between cat and yarn 🧶"
    },
    {
      src: "https://cataas.com/cat/sleeping?width=800&height=600",
      alt: "Cat sleeping in a box",
      caption: "If I fits, I sits! The feline box logic 📦"
    },
    {
      src: "https://cataas.com/cat/fluffy?width=800&height=600",
      alt: "Two cats cuddling",
      caption: "Feline friendship in its sweetest moment 💕"
    },
    {
      src: "https://cataas.com/cat/orange?width=800&height=600",
      alt: "Cat looking out the window",
      caption: "The silent guardian of the house 🏠"
    },
    {
      src: "https://cataas.com/cat/black?width=800&height=600",
      alt: "Cat in majestic pose",
      caption: "His feline majesty in all his splendor 👑"
    },
    {
      src: "https://cataas.com/cat/small?width=800&height=600",
      alt: "Curious kitten exploring",
      caption: "Feline curiosity in action 🔍"
    },
    {
      src: "https://cataas.com/cat/grey?width=800&height=600",
      alt: "Cat purring",
      caption: "The purring engine at full throttle 🎵"
    },
    {
      src: "https://cataas.com/cat/white?width=800&height=600",
      alt: "Acrobat cat in balance",
      caption: "The perfect balance of a born acrobat 🤸"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="galleria" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 cat-text-gradient">
            Feline Gallery 📸
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of heart-warming feline moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card 
              key={index} 
              className="cat-card overflow-hidden cat-hover-scale cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <span className="text-white text-2xl">🔍</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-center text-muted-foreground">
                    {image.caption}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-full">
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/20 transition-colors"
                aria-label="Close gallery"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-colors"
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-colors"
                aria-label="Next image"
              >
                →
              </button>

              {/* Image */}
              <div className="bg-white rounded-lg overflow-hidden">
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="w-full h-auto max-h-[70vh] object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
                <div className="p-4 text-center">
                  <p className="text-muted-foreground">
                    {galleryImages[selectedImage].caption}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {selectedImage + 1} of {galleryImages.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Fun fact box */}
        <div className="mt-16">
          <Card className="cat-card">
            <CardContent className="text-center p-8">
              <div className="text-4xl mb-4">📷</div>
              <h3 className="text-2xl font-bold mb-4">Did you know?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cats are among the most photographed animals in the world! On the internet, 
                cat videos generate billions of views every year. 
                Their natural expressiveness and curious behaviors make them 
                perfect subjects for photography.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CatGallery;