"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Shorten = () => {
  const [url, setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [generated, setGenerated] = useState("")

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shortUrl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUrl("")
        setShortUrl("")
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)
        console.log(result)
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className='mx-4 sm:mx-auto max-w-lg flex flex-col bg-white my-12 sm:my-16 p-6 sm:p-8 rounded-lg shadow-lg text-emerald-800 gap-4'>
      <h1 className='font-extrabold text-xl sm:text-2xl mb-4'>Generate short and snappy URLs</h1>
      <div className='flex flex-col space-y-4'>
        <input value={url} type='text' placeholder='Enter your URL' className='border border-gray-300 rounded-lg p-2 w-full' onChange={e => { setUrl(e.target.value) }} />
        <input value={shortUrl} type='text' placeholder='Enter preferred URL' className='border border-gray-300 rounded-lg p-2 w-full' onChange={e => { setShortUrl(e.target.value) }} />
        <button onClick={generate} className='text-white bg-emerald-800 shadow-lg px-4 py-2 rounded-lg font-bold cursor-pointer'>Generate</button>
      </div>
      {generated && (
        <div className='mt-4'>
          <span className='font-bold text-lg'>Your Link: </span>
          <code>
            <Link href={generated} className='text-blue-500 hover:underline break-all' target="_blank">
              {generated}
            </Link>
          </code>
        </div>
      )}
    </div>
  )
}

export default Shorten
