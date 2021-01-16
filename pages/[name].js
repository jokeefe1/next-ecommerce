import React from 'react';
import {useRouter} from 'next/router';

export default function Name() {
  const router = useRouter();
  const {name} = router.query;

  return <h1>Welcome {name}</h1>;
}
