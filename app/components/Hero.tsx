import Image from 'next/image';
import { AcademicCapIcon, ShieldCheckIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { RiTelegram2Fill } from "react-icons/ri";
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="w-full bg-white min-h-[calc(100vh-80px)] relative z-0">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 z-0"></div>

      {/* Main content */}
      <div className="container mx-auto px-6 md:px-12 py-12 relative z-10">
        <div className="grid grid-cols-1 ml-10  md:ml-20 lg:grid-cols-12 gap-15 items-center">
          {/* Left content */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-sm font-semibold text-black/80 mb-2 "><span className='text-gray-400'>01.</span> Exclusive Help For Your UK</p>
              <h1 className="text-4xl md:text-5xl font-bold text-black/90 leading-tight mb-4">
                ASSIGNMENT<br />
                GET QUALITY HELP
              </h1>
              <p className="text-black/90 text-lg font-semibold">
                By Leading UK PHD experts in your topic
              </p>
            </div>
            
            <button className="bg-black/90 text-white px-8 py-4 rounded-sm font-semibold hover:bg-purple-800 transition-colors">
              GET HELP NOW
            </button>

          </div>

          {/* Center content - Main Image */}
          <div className="lg:col-span-4 relative z-0">
            <div className="relative rounded-full z-0 overflow-hidden aspect-square max-w-[600px] mx-auto">
              <Image
                src={"/center.png"}
                alt="Happy graduates"
                width={600}
                height={600}
                draggable={false}
                className="object-cover"
                priority
                unoptimized
              />

              
            </div>
            {/* Graduation hat icon with green background */}
            <div className="absolute top-8 left-2 z-20 bg-green-500 rounded-lg p-4 shadow-md">
                <AcademicCapIcon className="w-10 h-10 text-white" />
              </div>

              {/* Client avatars */}
                <div className="flex-col z-0 absolute bottom-10 items-center">
                <div className="flex -space-x-3 -z-10">
                  <div className="w-13 h-13 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop"
                      alt="Client 1"
                      width={50}
                      height={50}
                      className="w-full h-fullobject-cover"
                      unoptimized
                    />
                  </div>
                  <div className="w-13 h-13 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop"
                      alt="Client 2"
                      width={50}
                      height={50}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="w-13 h-13 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop"
                      alt="Client 3"
                      width={50}
                      height={50}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="w-13 h-13 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=40&h=40&fit=crop"
                      alt="Client 4"
                      width={50}
                      height={50}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="w-13 h-13 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-sm font-semibold border-2 border-white">
                    +
                  </div>
                </div>
                <div className='mt-4 pt-11 bg-white shadow-xl absolute -z-12 -bottom-8 right-0.5 rounded-full py-2 px-5'>
                  <p className="text-[10px] font-bold text-black text-center whitespace-nowrap">OVER 12400+ SUCCESSFUL CLIENTS</p>
                </div>
              </div>

            {/* 100% satisfaction badge */}
            <div className="absolute bottom-20 right-2  bg-white rounded-xl p-3 shadow-lg">
                  <p className="text-green-500 font-semibold text-4xl flex justify-between"><span className='text-5xl'>✓</span>100%</p>
                  <p className="text-xs font-bold text-black">SATISFACTION PROMISE</p>
            </div>
          </div>

          {/* Right content - Features */}
          <div className="lg:col-span-3 space-y-6 ">
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-lg">
                <AcademicCapIcon className="w-10 h-10 text-black/60" />
              </div>
              <div>
                <p className="font-semibold text-gray-600">All levels Dip.</p>
                <p className="font-semibold text-gray-600">Bachelors, Masters</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-lg">
                <ShieldCheckIcon className="w-10 h-10 text-black/60" />
              </div>
              <div>
                <p className="font-semibold text-gray-600">Free Plagiarism</p>
                <p className="font-semibold text-gray-600">Scan</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-lg">
                <DocumentTextIcon className="w-10 h-10 text-black/60" />
              </div>
              <div>
                <p className="font-semibold text-gray-600">MLA, APA, Harvard</p>
                <p className="font-semibold text-gray-600">& Oxford Citation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Form */}
      <div className="max-w-7xl mt-10 mx-auto px-4 pb-12">
        <div className="bg-black/80 p-6 rounded-xl">
          <div className="flex flex-col gap-4 items-center">
            <div className="flex w-full justify-between">
              <div className='flex items-center space-x-4'>
                <p className="text-white mb-2 text-2xl font-bold">Get <span className="bg-yellow-500 px-2 py-1 rounded text-black">50%</span> Discount</p>
                <div className="flex md:ml-15 items-center p-2 rounded-lg bg-white">
                  <svg className="w-5 h-5 text-green-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span className="text-black font-bold mr-2">Trustpilot</span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div className='bg-green-500 rounded-sm'>
                      <svg key={star} className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='flex items-center text-white md:pt-1'>
                <span className="inline-flex items-center mr-2">
                  <svg className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                Your information is 100% secure and confident
              </div>
            </div>
            
            <div className="flex-[2] grid md:grid-cols-4 gap-4 w-full">
              <div className="relative">
                <Input
                  placeholder="Area of study?"
                  className="bg-white p-10 font-bold"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <AcademicCapIcon className="w-5 h-5" />
                </div>
              </div>
              <div className="relative">
                <Input
                  placeholder="Where should we send quote?"
                  className="bg-white p-10 font-bold"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <RiTelegram2Fill className='w-5 h-5' />
                </div>
              </div>
              <div className="relative">
                <Input
                  placeholder="Whatsapp Number"
                  className="bg-white p-10 font-bold"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                </div>
              </div>
              <Button className="bg-yellow-500 hover:bg-yellow-600 font-bold text-xl text-black px-8 p-10">
                GET FREE QUOTE
              </Button>
            </div>
            
           
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Hero; 