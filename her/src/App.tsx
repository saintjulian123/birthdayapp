// BirthdayApp.tsx
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Users, Clock, Menu } from "lucide-react";
import gallery1 from "@/assets/gallery/1.jpeg";
import gallery2 from "@/assets/gallery/2.jpeg";
import gallery3 from "@/assets/gallery/3.jpeg";
import gallery4 from "@/assets/gallery/4.jpeg";
import gallery5 from "@/assets/gallery/5.jpeg";
import gallery6 from "@/assets/gallery/6.jpeg";
import gallery7 from "@/assets/gallery/7.jpeg";
import gallery8 from "@/assets/gallery/8.jpeg";
import gallery9 from "@/assets/gallery/9.jpeg";
import gallery10 from "@/assets/gallery/10.jpeg";
import memoriesteen from '@/assets/memories/teen.jpg';
import memoriesteen1 from '@/assets/memories/teen2.jpg';
import memorieesteen2 from '@/assets/memories/teen3.jpg';
import memoriesteen3 from '@/assets/memories/teen5.jpg';
import memoriesteen4 from '@/assets/memories/teen6.jpg';
import memoriesteen5 from '@/assets/memories/teen7.jpg';
import memoriesteen6 from '@/assets/memories/teen8.jpg';
import memoriesteen7 from '@/assets/memories/teen9.jpg';
import memoriesteen8 from '@/assets/memories/teen1.jpg';
import adulthood1 from '@/assets/memories/adult.jpg';
import adulthood2 from '@/assets/memories/adult2.jpg';
import adulthood3 from '@/assets/memories/adult3.jpg';
import adulthood4 from '@/assets/memories/adult1.jpg';
import pharma from '@/assets/memories/pharma.jpg';
import pharm1 from '@/assets/memories/pharma1.jpg';
import phamarcy from '@/assets/memories/pharmacy.jpg';
import pharm2 from '@/assets/memories/pharma2.jpg';
import pharm3 from '@/assets/memories/pharma3.jpg';
import pharm4 from '@/assets/memories/pharma4.jpg';
import pharm5 from '@/assets/memories/pharma5.jpg';
import pharm6 from '@/assets/memories/pharma6.jpg';
import heroImage from '@/assets/hero/14.jpeg';
import lap from '@/assets/video/la passion.mp4';
import MediaGallery from './components/MediaGallery';
import final from '@/assets/memories/final.jpg';
import haa from '@/assets/memories/haa.png';
import baddie from '@/assets/video/baddie.mp4';
import hobo from '@/assets/video/hobo.mp4';
import idk from '@/assets/video/idk.mp4';

interface MediaItem {
  src: string;
  type: 'video' | 'image';
}

export default function BirthdayApp() {
  const [selectedSection, setSelectedSection] = useState('home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSectionChange = (section: string) => {
    setSelectedSection(section);
    setIsDropdownOpen(false);
  };

  // Define media items for each section
  const galleryMedia: MediaItem[] = [
    { src: gallery1, type: 'image' },
    { src: gallery2, type: 'image' },
    { src: gallery3, type: 'image' },
    { src: gallery4, type: 'image' },
    { src: gallery5, type: 'image' },
    { src: gallery6, type: 'image' },
    { src: gallery7, type: 'image' },
    { src: gallery8, type: 'image' },
    { src: gallery9, type: 'image' },
    { src: gallery10, type: 'image' },
  ];

  const childhoodMedia: MediaItem[] = [
    { src: pharma, type: 'image' },
    { src: pharm1, type: 'image' },
    { src: phamarcy, type: 'image' },
    { src: pharm2, type: 'image' },
    { src: pharm3, type: 'image' },
    { src: pharm4, type: 'image' },
    { src: pharm5, type: 'image' },
    { src: pharm6, type: 'image' },
    { src: final, type: 'image' },
    { src: lap, type: 'video' },
  ];

  const teenageMedia: MediaItem[] = [
    { src: memoriesteen, type: 'image' },
    { src: memoriesteen1, type: 'image' },
    { src: memorieesteen2, type: 'image' },
    { src: memoriesteen3, type: 'image' },
    { src: memoriesteen4, type: 'image' },
    { src: memoriesteen5, type: 'image' },
    { src: memoriesteen6, type: 'image' },
    { src: memoriesteen7, type: 'image' },
    { src: memoriesteen8, type: 'image' },
    { src: haa, type: 'image' },
    { src: baddie, type: 'video' },
    { src: idk, type: 'video' },
  ];

  const adulthoodMedia: MediaItem[] = [
    { src: adulthood1, type: 'image' },
    { src: adulthood2, type: 'image' },
    { src: adulthood3, type: 'image' },
    { src: adulthood4, type: 'image' },
    { src: hobo, type: 'video' },
  ];

  const renderSection = () => {
    switch (selectedSection) {
      case 'home':
        return (
          <div>
            {/* Hero Section */}
            <section className="relative h-screen hero" style={{ backgroundImage: `url(${heroImage})` }}>
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              {/* Content */}
              <div className="container mx-auto px-4 py-8 relative z-10 h-full flex justify-center items-center">
                <div className="text-white text-center">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                    Happy 22nd Birthday, Mesale!
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl">
                    Wishing you a year filled with joy, love, and endless possibilities.
                  </p>
                </div>
              </div>
            </section>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-8">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-pink-800">Celebrating a Journey Through the Years</h2>
                <p className="text-gray-600 mb-6">Here's a glimpse into the life of a truly remarkable person.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card onClick={() => handleSectionChange('memories-childhood')} className="cursor-pointer hover:shadow-lg transition duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-pink-800">
                        <Heart className="h-6 w-6" />
                        <span>Miss Pharmacy</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-pink-800">La Passion! Her shayla</CardDescription>
                    </CardContent>
                  </Card>
                  <Card onClick={() => handleSectionChange('memories-teenage')} className="cursor-pointer hover:shadow-lg transition duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-pink-800">
                        <Clock className="h-6 w-6" />
                        <span>Teenage Years: Growth, Challenges, and Dreams</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-pink-800">The teenage years were filled with growth, challenges, and dreams. These were the formative years that helped her discover her passions and strengths.</CardDescription>
                    </CardContent>
                  </Card>
                  <Card onClick={() => handleSectionChange('memories-adulthood')} className="cursor-pointer hover:shadow-lg transition duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-pink-800">
                        <Users className="h-6 w-6" />
                        <span>Embracing Early Adulthood with Open Arms</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-pink-800">Entering early adulthood was a time of new beginnings. She embraced each challenge with open arms and continued to grow as a person.</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </main>
          </div>
        );

      case 'gallery':
        return <MediaGallery mediaItems={galleryMedia} title="Gallery" />;

      case 'quotes':
        return (
          <main className="flex-grow container mx-auto px-4 py-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-pink-800">Quotes</h2>
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition duration-300">
                <CardContent>
                  <p className="text-pink-800">"Hey chomi, I hope you enjoy your birthday and know that I hold you dear to my heart even though we barely talk. I appreciate your presence in my life and wish you nothing but the best. Continue growing your faith in God and find happiness in everything. I love you babe and will forever do ~Legwinya lame❤️"</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition duration-300">
                <CardContent>
                  <p className="text-pink-800">"Happy birthday BabyMesale ❤️😫 I pray that God continues to shine and show his grace through you and that he blesses you as you leave and enter your homestead always ❤️ Thank you for being the best sister, roommate and friend I love you a lot girl❤️~Amzzz❤️"</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition duration-300">
                <CardContent>
                  <p className="text-pink-800">"Today, we celebrate you and all the joy you bring to everyone’s lives. Thank you for being such a wonderful friend. Happy birthday Mabedi!~ Daylor"</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition duration-300">
                <CardContent>
                  <p className="text-pink-800">"To the LOML, your growth is beautiful to witness especially since l realise it has spilled over in different parts of your life. You are deserving and may we celebrate more birthdays and remain united in our love 🥺 to the girl who will always have a seat at my table, happy birthday. I love you unconditionally ~ HYPELADY"</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition duration-300">
                <CardContent>
                  <p className="text-pink-800">"To the girl who’s more than just a friend, you’re a sister, a confidant, and an endless source of joy. I hope you embrace every opportunity and make it truly unforgettable! Happy birthday Mesale" ~ Machola"</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition duration-300">
                <CardContent>
                  <p className="text-pink-800">"Happy Birthday, Toma! 🎉🎂✨ Wishing you a life filled with love, laughter, and all the happiness in the world! May the new chapter bring you endless joy, success, and beautiful moments. You deserve nothing but the best, may your dreams soar high, your heart stay full, and your days be as bright as your smile❤️~Tefo"</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition duration-300">
                <CardContent>
                  <p className="text-pink-800">"Beauty, intelligence, mindfulness and ambition i admire in you, continue striving for success and follow your heart's desires. Let the words in Phil 4:13 be your pillar of strength. I wish you nothing but joy, happiness and spendor. Cheers to 22 years of life and many more Toma. With Love ~ Mmapetla"</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition duration-300">
                <CardContent>
                  <p className="text-pink-800">"You’ve always known just what to say, A steady voice in the midst of the tremors of this world At 22, you’ve been one of a kind, Grateful for your wisdom and the peace you bring to my mind. Happy birthday Bunene~Rati"</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition duration-300">
                <CardContent>
                  <p className="text-pink-800">"Happy birthday my girl. Wishing you a day filled with love, laughter and all the happiness in the world. May your year ahead be as amazing as you are ! ~ Your One ❤️"</p>
                </CardContent>
              </Card>
            </div>
          </main>
        );

      case 'memories':
        return (
          <main className="flex-grow container mx-auto px-4 py-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-pink-800">Memories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card onClick={() => handleSectionChange('memories-childhood')} className="cursor-pointer hover:shadow-lg transition duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-pink-800">
                    <Heart className="h-6 w-6" />
                    <span>Miss Pharmacy</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-pink-800">Passion! Her shayla.</CardDescription>
                </CardContent>
              </Card>
              <Card onClick={() => handleSectionChange('memories-teenage')} className="cursor-pointer hover:shadow-lg transition duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-pink-800">
                    <Clock className="h-6 w-6" />
                    <span>Teenage Years: Growth, Challenges, and Dreams</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-pink-800">The teenage years were filled with growth, challenges, and dreams. These were the formative years that helped her discover her passions and strengths.</CardDescription>
                </CardContent>
              </Card>
              <Card onClick={() => handleSectionChange('memories-adulthood')} className="cursor-pointer hover:shadow-lg transition duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-pink-800">
                    <Users className="h-6 w-6" />
                    <span>Embracing Early Adulthood with Open Arms</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-pink-800">Entering early adulthood was a time of new beginnings. She embraced each challenge with open arms and continued to grow as a person.</CardDescription>
                </CardContent>
              </Card>
            </div>
          </main>
        );

      case 'memories-childhood':
        return <MediaGallery mediaItems={childhoodMedia} title="Miss Pharmacy" />;

      case 'memories-teenage':
        return <MediaGallery mediaItems={teenageMedia} title="Teenage Years: Growth, Challenges, and Dreams" />;

      case 'memories-adulthood':
        return <MediaGallery mediaItems={adulthoodMedia} title="Embracing Early Adulthood with Open Arms" />;

      default:
        return <div>404 - Page Not Found</div>;
    }
  };

  return (
    <div className="bg-pink-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Navigation Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-pink-800" onClick={() => handleSectionChange('home')}>Home Page</Button>
            <Button variant="ghost" className="text-pink-800" onClick={() => handleSectionChange('gallery')}>Gallery</Button>
            <Button variant="ghost" className="text-pink-800" onClick={() => handleSectionChange('memories')}>Memories</Button>
            <Button variant="ghost" className="text-pink-800" onClick={() => handleSectionChange('quotes')}>Quotes</Button>
          </div>

          {/* Dropdown Menu */}
          <div className="relative">
            <Button variant="ghost" className="text-pink-800" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <Menu className="h-4 w-4" />
            </Button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                <Button variant="ghost" className="w-full text-left px-4 py-2 text-pink-800" onClick={() => handleSectionChange('home')}>Home Page</Button>
                <Button variant="ghost" className="w-full text-left px-4 py-2 text-pink-800" onClick={() => handleSectionChange('gallery')}>Gallery</Button>
                <Button variant="ghost" className="w-full text-left px-4 py-2 text-pink-800" onClick={() => handleSectionChange('memories')}>Memories</Button>
                <Button variant="ghost" className="w-full text-left px-4 py-2 text-pink-800" onClick={() => handleSectionChange('quotes')}>Quotes</Button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Render the selected section */}
      {renderSection()}

      {/* Footer */}
      <footer className="bg-white mt-8">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-gray-600 mb-4">"May the Lord bless you, prosper you, and continue protecting you - Julian"</p>
          <p className="text-gray-600">© 2023 Julian</p>
        </div>
      </footer>
    </div>
  );
}