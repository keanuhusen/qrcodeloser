'use client';

import { useState } from 'react';
import { supabase } from '@/utils/supabase/client';

interface SurveyProps {
  ip: string;
  region: string;
  city: string;
}

export default function Survey({ ip, region, city }: SurveyProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Atlanta');
  const [initialSentiment, setInitialSentiment] = useState('');
  const [expectation, setExpectation] = useState('');
  const [sentiment, setSentiment] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitted(true);

    // const { data, error } = await supabase
    // .from('gotcha')
    // .select('*')

    const { data, error } = await supabase
    .from('gotcha')
    .insert([
      {
        ip: ip,
        region: region,
        city: city,
        selected_city: selectedCity,
        initial_sentiment: initialSentiment,
        expectation: expectation,
        sentiment: sentiment,
      },
    ])
    .select()

    if (error) {
      console.log('Error storing survey response.');
      console.log(error);
    }

    if (data) {
      console.log('Successfully stored survey response.');
      console.log(data);
    }
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className={`${isSubmitted ? 'hidden' : 'block'}`}>
        <div className="mb-4">
          <label htmlFor="initialSentiment" className="block mb-2"><strong>1.</strong> When you first saw the QR code, what did you initially feel?</label>
          <input
            type="text"
            name="initialSentiment"
            id="initialSentiment"
            maxLength={250}
            placeholder='Example: excited, worried, hesitant'
            onChange={(e) => setInitialSentiment(e.target.value)}
            className="block w-full px-4 py-2 text-[#272727] bg-transparent border-2 rounded-lg border-[#E94B3C]"
          />
          <span className="text-sm">^ max characters: 250</span>
        </div>
        <div className="mb-4">
          <label htmlFor="expectation" className="block mb-2"><strong>2.</strong> Before you scanned the QR code, what were you expecting?</label>
          <input
            type="text"
            name="expectation"
            id="expectation"
            maxLength={250}
            placeholder='Example: a monkey'
            onChange={(e) => setExpectation(e.target.value)}
            className="block w-full px-4 py-2 text-[#272727] bg-transparent border-2 rounded-lg border-[#E94B3C]"
          />
          <span className="text-sm">^ max characters: 250</span>
        </div>
        <div className="mb-4">
          <label htmlFor="sentiment" className="block mb-2"><strong>3.</strong> After scanning the QR code, how do you feel?</label>
          <input
            type="text"
            name="sentiment"
            id="sentiment"
            maxLength={250}
            placeholder='Example: got, disappointed, amazed, embarrassed'
            onChange={(e) => setSentiment(e.target.value)}
            className="block w-full px-4 py-2 text-[#272727] bg-transparent border-2 rounded-lg border-[#E94B3C]"
          />
          <span className="text-sm">^ max characters: 250</span>
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block mb-2"><strong>4.</strong> Where did you scan this QR code?</label>
          <select
            name="city"
            id="city"
            onChange={(e) => setSelectedCity(e.target.value)}
            defaultValue=""
            className="block w-full px-4 py-2 text-[#272727] bg-transparent border-2 rounded-lg border-[#E94B3C]"
          >
            <option value="" disabled>Select a City</option>
            <option value="Atlanta">Atlanta, GA</option>
            <option value="Birmingham">Birmingham, AL</option>
            <option value="Charlotte">Charlotte, NC</option>
            <option value="Costa Mesa">Costa Mesa, CA</option>
            <option value="Dallas">Dallas, TX</option>
            <option value="Irvine">Irvine, CA</option>
            <option value="Los Angeles">Los Angeles, CA</option>
            <option value="Nashville">Nashville, TN</option>
            <option value="New York">New York, NY</option>
            <option value="Orlando">Orlando, FL</option>
            <option value="Phoenix">Phoenix, AZ</option>
            <option value="San Diego">San Diego, CA</option>
          </select>
        </div>
        <input
          type="submit"
          value="Submit"
          className="px-12 py-2 text-white font-bold bg-[#E94B3C] border-2 rounded-lg border-[#E94B3C] cursor-pointer"
        />
      </form>
      <div className={`${isSubmitted ? 'block' : 'hidden'} p-4 border-2 rounded-lg border-[#E94B3C]`}>
        {city !== selectedCity
          ? <div>
            {/* <p>Nice try; either you lied to us in the survey, or your current IP address location is mismatched. We know you&apos;re currently in {city} even though you selected {selectedCity}.</p> */}
            <p>Hmmm... either you lied to us in the survey, or your current IP address location is mismatched. Our sources say that you&apos;re currently in {city} even though you selected {selectedCity}.</p>
            <br />
            <p>But thanks anyway for trying to participate in the survey. We&apos;re not actually storing responses... so, gotcha again! You just wasted more of your time. Go outside, touch grass, pet a dog, tell your kin you love them, and enjoy the rest of your day! Bye now &colon;&rpar;</p>
          </div>
          : <div>
            <p>Thanks for participating in the survey. We&apos;re not actually storing responses... so, gotcha again! You just wasted more of your time. Go outside, touch grass, pet a dog, tell your kin you love them, and enjoy the rest of your day!</p>
          </div>
        }
      </div>
    </>
  );
}