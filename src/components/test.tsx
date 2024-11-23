'use client';

import { supabase } from '@/utils/supabase/client';

// export default function Test({ ip, region, city }) {
export default function Test() {
  const handleClick = async () => {
    // const { data, error } = await supabase
    // .from('gotcha')
    // .insert([
    //   {
    //     ip: ip,
    //     region: region,
    //     city: city,
    //   },
    // ])
    // .select()

    const { data, error } = await supabase
    .from('gotcha')
    .select('*')
    .limit(100)

    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button onClick={() => handleClick()}>Get All Survey Results</button>
    </div>
  );
}